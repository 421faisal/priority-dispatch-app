// Pure calculation functions behind the trucking tools. No React here, so the
// math can be tested on its own (see scripts/test-trucking-calc.mjs).

/** ATRI "An Analysis of the Operational Costs of Trucking: 2026 Update" (2025 data) */
export const ATRI_COST_PER_MILE = 2.336
export const ATRI_COST_PER_MILE_EX_FUEL = 1.854

/** IRS special M&IE rate for the transportation industry, travel in the continental US, from Oct 1, 2025 */
export const PER_DIEM_CONUS = 80
export const PER_DIEM_OCONUS = 86
/** Drivers under DOT hours-of-service rules may deduct 80% of meal costs (IRC 274(n)(3)) */
export const PER_DIEM_DEDUCTIBLE = 0.8
/** IRS: the first and last travel day count at 75% of the daily rate */
export const PARTIAL_DAY_SHARE = 0.75

const n = (v: number) => (Number.isFinite(v) ? v : 0)

export interface CostPerMileInput {
    milesPerMonth: number
    /** Fixed costs per month */
    truckPayment: number
    trailerPayment: number
    insurance: number
    permitsAndPlates: number
    eldAndSoftware: number
    otherFixed: number
    /** Variable costs */
    fuelPrice: number
    mpg: number
    maintenancePerMile: number
    tiresPerMile: number
    tollsPerMonth: number
    driverPayPerMile: number
}

export function costPerMile(i: CostPerMileInput) {
    const miles = n(i.milesPerMonth)
    const fixedMonthly =
        n(i.truckPayment) + n(i.trailerPayment) + n(i.insurance) + n(i.permitsAndPlates) + n(i.eldAndSoftware) + n(i.otherFixed)
    const fuelPerMile = i.mpg > 0 ? n(i.fuelPrice) / i.mpg : 0
    const fixedPerMile = miles > 0 ? fixedMonthly / miles : 0
    const tollsPerMile = miles > 0 ? n(i.tollsPerMonth) / miles : 0
    const variablePerMile = fuelPerMile + n(i.maintenancePerMile) + n(i.tiresPerMile) + tollsPerMile + n(i.driverPayPerMile)
    const total = fixedPerMile + variablePerMile
    return {
        fixedMonthly,
        fixedPerMile,
        fuelPerMile,
        variablePerMile,
        total,
        monthlyCost: total * miles,
        vsAtri: total - ATRI_COST_PER_MILE,
    }
}

export interface LoadProfitInput {
    rate: number
    loadedMiles: number
    deadheadMiles: number
    fuelPrice: number
    mpg: number
    /** Everything except fuel, per mile driven (maintenance, insurance, payment...) */
    otherCostPerMile: number
    tolls: number
    dispatchPercent: number
}

export function loadProfit(i: LoadProfitInput) {
    const loaded = n(i.loadedMiles)
    const totalMiles = loaded + n(i.deadheadMiles)
    const fuelCost = i.mpg > 0 ? (totalMiles / i.mpg) * n(i.fuelPrice) : 0
    const otherCost = totalMiles * n(i.otherCostPerMile)
    const dispatchFee = n(i.rate) * (n(i.dispatchPercent) / 100)
    const totalCost = fuelCost + otherCost + n(i.tolls) + dispatchFee
    const profit = n(i.rate) - totalCost
    const costPerMileAll = i.mpg > 0 ? n(i.fuelPrice) / i.mpg + n(i.otherCostPerMile) : n(i.otherCostPerMile)
    // Lowest rate that covers costs: rate - rate*d - fixedCosts = 0
    const share = 1 - n(i.dispatchPercent) / 100
    const breakEvenRate = share > 0 ? (fuelCost + otherCost + n(i.tolls)) / share : 0
    return {
        totalMiles,
        rpmLoaded: loaded > 0 ? n(i.rate) / loaded : 0,
        rpmAllMiles: totalMiles > 0 ? n(i.rate) / totalMiles : 0,
        deadheadShare: totalMiles > 0 ? n(i.deadheadMiles) / totalMiles : 0,
        fuelCost,
        otherCost,
        dispatchFee,
        totalCost,
        profit,
        profitPerMile: totalMiles > 0 ? profit / totalMiles : 0,
        costPerMileAll,
        breakEvenRate,
    }
}

export interface HosInput {
    /** Hours since the driver came on duty after 10 hours off (the 14-hour window) */
    hoursSinceOnDuty: number
    /** Driving hours since the last 10 hours off */
    hoursDriven: number
    /** Driving hours since the last break of 30+ minutes */
    drivingSinceBreak: number
    /** On-duty hours in the last 7 or 8 days, including today */
    cycleHoursUsed: number
    cycle: 60 | 70
}

export type HosLimit = "11-hour driving limit" | "14-hour window" | "60/70-hour cycle"

export function hosStatus(i: HosInput) {
    const drive = Math.max(0, 11 - n(i.hoursDriven))
    const window = Math.max(0, 14 - n(i.hoursSinceOnDuty))
    const cycle = Math.max(0, i.cycle - n(i.cycleHoursUsed))
    const options: [HosLimit, number][] = [
        ["11-hour driving limit", drive],
        ["14-hour window", window],
        ["60/70-hour cycle", cycle],
    ]
    const breakDueIn = Math.max(0, 8 - n(i.drivingSinceBreak))
    // A 30-minute break taken mid-shift still uses up the 14-hour window
    if (breakDueIn < Math.min(drive, window, cycle)) {
        options[1] = ["14-hour window", Math.max(breakDueIn, window - 0.5)]
    }
    const [limitedBy, driveLeft] = options.reduce((a, b) => (b[1] < a[1] ? b : a))
    return {
        driveLeft,
        limitedBy,
        driveLimitLeft: drive,
        windowLeft: window,
        cycleLeft: cycle,
        /** Driving hours left before a 30-minute break is required */
        breakDueIn,
        breakNeededFirst: breakDueIn < driveLeft,
        canDriveNow: driveLeft > 0 && breakDueIn > 0,
        /** Cycle used up: a 34-hour restart resets it */
        needsRestart: cycle === 0,
    }
}

export interface IftaRow {
    state: string
    miles: number
    gallonsBought: number
    /** Tax rate in dollars per gallon for this state and quarter */
    rate: number
}

export function ifta(rows: IftaRow[]) {
    const totalMiles = rows.reduce((s, r) => s + n(r.miles), 0)
    const totalGallons = rows.reduce((s, r) => s + n(r.gallonsBought), 0)
    const mpg = totalGallons > 0 ? totalMiles / totalGallons : 0
    const lines = rows.map((r) => {
        const taxableGallons = mpg > 0 ? n(r.miles) / mpg : 0
        const netGallons = taxableGallons - n(r.gallonsBought)
        return { ...r, taxableGallons, netGallons, taxDue: netGallons * n(r.rate) }
    })
    return { totalMiles, totalGallons, mpg, lines, netTax: lines.reduce((s, l) => s + l.taxDue, 0) }
}

export interface PerDiemInput {
    fullDays: number
    partialDays: number
    dailyRate: number
    /** Your marginal federal + self-employment tax rate, as a percent, for the savings estimate */
    taxRatePercent: number
}

export function perDiem(i: PerDiemInput) {
    const dayEquivalents = n(i.fullDays) + n(i.partialDays) * PARTIAL_DAY_SHARE
    const allowance = dayEquivalents * n(i.dailyRate)
    const deduction = allowance * PER_DIEM_DEDUCTIBLE
    return { dayEquivalents, allowance, deduction, taxSavings: deduction * (n(i.taxRatePercent) / 100) }
}

export interface DetentionInput {
    /** Minutes from check-in to release */
    minutesAtFacility: number
    freeHours: number
    ratePerHour: number
    /** Billing increment in minutes (15, 30 or 60); partial increments round up */
    incrementMinutes: number
}

export function detention(i: DetentionInput) {
    const billableMinutesRaw = Math.max(0, n(i.minutesAtFacility) - n(i.freeHours) * 60)
    const inc = i.incrementMinutes > 0 ? i.incrementMinutes : 60
    const billableMinutes = Math.ceil(billableMinutesRaw / inc) * inc
    return { billableMinutes, billableHours: billableMinutes / 60, amount: (billableMinutes / 60) * n(i.ratePerHour) }
}

/** Minutes between two "HH:MM" clock times, crossing midnight if needed (plus whole extra days) */
export function minutesBetween(start: string, end: string, extraDays = 0) {
    const toMin = (t: string) => {
        const [h, m] = t.split(":").map(Number)
        return n(h) * 60 + n(m)
    }
    let d = toMin(end) - toMin(start)
    if (d < 0) d += 24 * 60
    return d + n(extraDays) * 24 * 60
}
