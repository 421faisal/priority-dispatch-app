"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Plus, Trash2 } from "lucide-react"
import { rates } from "@/lib/pricing"
import {
    ATRI_COST_PER_MILE,
    PER_DIEM_CONUS,
    PER_DIEM_OCONUS,
    costPerMile,
    detention,
    hosStatus,
    ifta,
    loadProfit,
    minutesBetween,
    perDiem,
    type CostPerMileInput,
    type LoadProfitInput,
} from "@/lib/trucking-calc"

const usd = (v: number, digits = 2) =>
    (v < 0 ? "-$" : "$") + Math.abs(v).toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits })
const hrs = (h: number) => {
    const total = Math.round(h * 60)
    return `${Math.floor(total / 60)}h ${String(total % 60).padStart(2, "0")}m`
}
const num = (s: string) => {
    const v = parseFloat(s)
    return Number.isFinite(v) ? v : 0
}
/** Form strings to the numbers a calculator takes */
const nums = <T,>(v: Record<string, string>) => Object.fromEntries(Object.entries(v).map(([k, s]) => [k, num(s)])) as T

function Field({
    id,
    label,
    value,
    onChange,
    hint,
    step = "any",
}: {
    id: string
    label: string
    value: string
    onChange: (v: string) => void
    hint?: string
    step?: string
}) {
    return (
        <div className="space-y-1.5">
            <Label htmlFor={id}>{label}</Label>
            <Input id={id} type="number" inputMode="decimal" min="0" step={step} value={value} onChange={(e) => onChange(e.target.value)} />
            {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
        </div>
    )
}

function Stat({ label, value, tone = "plain" }: { label: string; value: string; tone?: "plain" | "accent" | "good" | "bad" }) {
    const tones = {
        plain: "bg-muted",
        accent: "bg-accent/15 text-accent",
        good: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
        bad: "bg-red-500/10 text-red-700 dark:text-red-400",
    }
    return (
        <div className={`rounded-xl p-4 ${tones[tone]}`}>
            <span className="block text-xs font-bold uppercase tracking-wide opacity-80">{label}</span>
            <span className="mt-1 block text-2xl font-black">{value}</span>
        </div>
    )
}

function Panel({ children, results }: { children: React.ReactNode; results: React.ReactNode }) {
    return (
        <div className="grid gap-8 rounded-2xl border border-border bg-card p-6 shadow-sm md:grid-cols-2 md:p-8">
            <div className="space-y-4">{children}</div>
            <div aria-live="polite" className="space-y-4 md:border-l md:border-border md:pl-8">
                <h2 className="text-lg font-bold">Results</h2>
                {results}
            </div>
        </div>
    )
}

export function CostPerMileTool() {
    const [v, setV] = useState({
        milesPerMonth: "10000",
        truckPayment: "2500",
        trailerPayment: "800",
        insurance: "1500",
        permitsAndPlates: "300",
        eldAndSoftware: "100",
        otherFixed: "500",
        fuelPrice: "3.80",
        mpg: "6.5",
        maintenancePerMile: "0.20",
        tiresPerMile: "0.04",
        tollsPerMonth: "200",
        driverPayPerMile: "0",
    })
    const set = (k: keyof typeof v) => (s: string) => setV({ ...v, [k]: s })
    const r = costPerMile(nums<CostPerMileInput>(v))
    return (
        <Panel
            results={
                <>
                    <div className="grid grid-cols-2 gap-3">
                        <Stat label="Cost per mile" value={usd(r.total, 3)} tone="accent" />
                        <Stat label="Monthly cost" value={usd(r.monthlyCost, 0)} />
                        <Stat label="Fixed per mile" value={usd(r.fixedPerMile, 3)} />
                        <Stat label="Fuel per mile" value={usd(r.fuelPerMile, 3)} />
                    </div>
                    <p className="text-sm text-muted-foreground">
                        National average (ATRI 2026): {usd(ATRI_COST_PER_MILE, 3)} per mile. You are{" "}
                        <strong className={r.vsAtri <= 0 ? "text-emerald-600" : "text-red-600"}>
                            {usd(Math.abs(r.vsAtri), 3)} {r.vsAtri <= 0 ? "below" : "above"}
                        </strong>{" "}
                        the average. Your minimum rate is {usd(r.total, 2)} per mile on every mile, loaded or empty, plus your profit.
                    </p>
                </>
            }
        >
            <Field id="cpm-miles" label="Miles per month (loaded + empty)" value={v.milesPerMonth} onChange={set("milesPerMonth")} />
            <fieldset className="grid grid-cols-2 gap-4">
                <legend className="mb-2 font-semibold">Fixed costs per month ($)</legend>
                <Field id="cpm-truck" label="Truck payment" value={v.truckPayment} onChange={set("truckPayment")} />
                <Field id="cpm-trailer" label="Trailer payment" value={v.trailerPayment} onChange={set("trailerPayment")} />
                <Field id="cpm-ins" label="Insurance" value={v.insurance} onChange={set("insurance")} />
                <Field id="cpm-permits" label="Permits & plates" value={v.permitsAndPlates} onChange={set("permitsAndPlates")} hint="IRP, UCR, 2290 spread per month" />
                <Field id="cpm-eld" label="ELD & software" value={v.eldAndSoftware} onChange={set("eldAndSoftware")} />
                <Field id="cpm-other" label="Other fixed" value={v.otherFixed} onChange={set("otherFixed")} hint="Phone, parking, accounting" />
            </fieldset>
            <fieldset className="grid grid-cols-2 gap-4">
                <legend className="mb-2 font-semibold">Variable costs</legend>
                <Field id="cpm-fuel" label="Diesel price ($/gal)" value={v.fuelPrice} onChange={set("fuelPrice")} />
                <Field id="cpm-mpg" label="Average MPG" value={v.mpg} onChange={set("mpg")} />
                <Field id="cpm-maint" label="Maintenance ($/mile)" value={v.maintenancePerMile} onChange={set("maintenancePerMile")} />
                <Field id="cpm-tires" label="Tires ($/mile)" value={v.tiresPerMile} onChange={set("tiresPerMile")} />
                <Field id="cpm-tolls" label="Tolls ($/month)" value={v.tollsPerMonth} onChange={set("tollsPerMonth")} />
                <Field id="cpm-pay" label="Driver pay ($/mile)" value={v.driverPayPerMile} onChange={set("driverPayPerMile")} hint="0 if you drive your own truck" />
            </fieldset>
        </Panel>
    )
}

export function LoadProfitTool() {
    const [v, setV] = useState({
        rate: "3000",
        loadedMiles: "1100",
        deadheadMiles: "150",
        fuelPrice: "3.80",
        mpg: "6.5",
        otherCostPerMile: "1.10",
        tolls: "0",
        dispatchPercent: "4",
    })
    const set = (k: keyof typeof v) => (s: string) => setV({ ...v, [k]: s })
    const r = loadProfit(nums<LoadProfitInput>(v))
    return (
        <Panel
            results={
                <>
                    <div className="grid grid-cols-2 gap-3">
                        <Stat label="Profit on this load" value={usd(r.profit)} tone={r.profit >= 0 ? "good" : "bad"} />
                        <Stat label="Profit per mile" value={usd(r.profitPerMile)} tone={r.profitPerMile >= 0 ? "good" : "bad"} />
                        <Stat label="Rate/mile (loaded)" value={usd(r.rpmLoaded)} />
                        <Stat label="Rate/mile (all miles)" value={usd(r.rpmAllMiles)} tone="accent" />
                    </div>
                    <ul className="space-y-1 text-sm">
                        <li>Total miles: <strong>{r.totalMiles.toLocaleString("en-US")}</strong> ({Math.round(r.deadheadShare * 100)}% deadhead)</li>
                        <li>Fuel: <strong>{usd(r.fuelCost)}</strong> · Other costs: <strong>{usd(r.otherCost)}</strong></li>
                        <li>Dispatch fee: <strong>{usd(r.dispatchFee)}</strong></li>
                        <li>Break-even rate for this trip: <strong>{usd(r.breakEvenRate)}</strong></li>
                    </ul>
                    <p className="text-sm text-muted-foreground">
                        {r.profit >= 0
                            ? "This load covers your costs. Compare the all-miles rate with your cost per mile before you accept."
                            : "This load loses money at these numbers. Counter-offer above the break-even rate or keep looking."}
                    </p>
                </>
            }
        >
            <div className="grid grid-cols-2 gap-4">
                <Field id="lp-rate" label="Load rate ($)" value={v.rate} onChange={set("rate")} />
                <Field id="lp-loaded" label="Loaded miles" value={v.loadedMiles} onChange={set("loadedMiles")} />
                <Field id="lp-dh" label="Deadhead miles" value={v.deadheadMiles} onChange={set("deadheadMiles")} hint="Empty miles to the pickup" />
                <Field id="lp-tolls" label="Tolls ($)" value={v.tolls} onChange={set("tolls")} />
                <Field id="lp-fuel" label="Diesel price ($/gal)" value={v.fuelPrice} onChange={set("fuelPrice")} />
                <Field id="lp-mpg" label="Average MPG" value={v.mpg} onChange={set("mpg")} />
                <Field id="lp-other" label="Other costs ($/mile)" value={v.otherCostPerMile} onChange={set("otherCostPerMile")} hint="Everything except fuel" />
                <div className="space-y-1.5">
                    <Label htmlFor="lp-dispatch">Dispatch fee</Label>
                    <select
                        id="lp-dispatch"
                        value={v.dispatchPercent}
                        onChange={(e) => set("dispatchPercent")(e.target.value)}
                        className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm"
                    >
                        <option value="0">No dispatcher (0%)</option>
                        {rates.map((x) => (
                            <option key={x.equipment} value={String(x.percent)}>
                                {x.equipment} ({x.percent}%)
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </Panel>
    )
}

function nowHHMM() {
    const d = new Date()
    return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`
}

export function HosTool() {
    const [start, setStart] = useState("06:00")
    const [now, setNow] = useState("14:30")
    const [driven, setDriven] = useState("6")
    const [sinceBreak, setSinceBreak] = useState("4")
    const [cycle, setCycle] = useState<"60" | "70">("70")
    const [used, setUsed] = useState("52")
    const sinceOnDuty = minutesBetween(start, now) / 60
    const r = hosStatus({
        hoursSinceOnDuty: sinceOnDuty,
        hoursDriven: num(driven),
        drivingSinceBreak: num(sinceBreak),
        cycleHoursUsed: num(used),
        cycle: cycle === "60" ? 60 : 70,
    })
    const closeMin = (Number(start.split(":")[0]) * 60 + Number(start.split(":")[1]) + 14 * 60) % (24 * 60)
    const windowCloses = `${String(Math.floor(closeMin / 60)).padStart(2, "0")}:${String(closeMin % 60).padStart(2, "0")}`
    return (
        <Panel
            results={
                <>
                    <div className="grid grid-cols-2 gap-3">
                        <Stat label="Driving time left" value={hrs(r.driveLeft)} tone={r.driveLeft > 0 ? "good" : "bad"} />
                        <Stat label="30-min break due in" value={hrs(r.breakDueIn)} tone={r.breakDueIn > 0 ? "plain" : "bad"} />
                        <Stat label="14-hour window closes" value={windowCloses} />
                        <Stat label={`${cycle}-hour cycle left`} value={hrs(r.cycleLeft)} />
                    </div>
                    <ul className="space-y-1 text-sm">
                        <li>11-hour driving limit: <strong>{hrs(r.driveLimitLeft)}</strong> left</li>
                        <li>14-hour window: <strong>{hrs(r.windowLeft)}</strong> left</li>
                        <li>Limited by: <strong>{r.limitedBy}</strong></li>
                    </ul>
                    <p className="text-sm text-muted-foreground">
                        {r.driveLeft === 0
                            ? r.needsRestart
                                ? "You are out of cycle hours. A 34-hour restart resets your cycle to zero."
                                : "You cannot drive again until you take 10 consecutive hours off duty."
                            : r.breakDueIn === 0
                              ? "Take a 30-minute break (off duty, sleeper or on duty not driving) before you drive again."
                              : r.breakNeededFirst
                                ? `You can drive ${hrs(r.breakDueIn)} before your 30-minute break, then up to ${hrs(r.driveLeft - r.breakDueIn)} more.`
                                : `You can drive ${hrs(r.driveLeft)} more today.`}{" "}
                        Planning tool only: your ELD is the official record.
                    </p>
                </>
            }
        >
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <Label htmlFor="hos-start">Came on duty at</Label>
                    <Input id="hos-start" type="time" value={start} onChange={(e) => setStart(e.target.value)} />
                    <p className="text-xs text-muted-foreground">After 10 hours off</p>
                </div>
                <div className="space-y-1.5">
                    <Label htmlFor="hos-now">Time now</Label>
                    <Input id="hos-now" type="time" value={now} onChange={(e) => setNow(e.target.value)} />
                    <button type="button" onClick={() => setNow(nowHHMM())} className="text-xs font-semibold text-accent hover:underline">
                        Use current time
                    </button>
                </div>
                <Field id="hos-driven" label="Hours driven this shift" value={driven} onChange={setDriven} step="0.25" />
                <Field id="hos-break" label="Hours driven since last 30-min break" value={sinceBreak} onChange={setSinceBreak} step="0.25" />
                <div className="space-y-1.5">
                    <Label htmlFor="hos-cycle">Cycle</Label>
                    <select
                        id="hos-cycle"
                        value={cycle}
                        onChange={(e) => setCycle(e.target.value as "60" | "70")}
                        className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm"
                    >
                        <option value="70">70 hours / 8 days</option>
                        <option value="60">60 hours / 7 days</option>
                    </select>
                </div>
                <Field id="hos-used" label="On-duty hours used in cycle" value={used} onChange={setUsed} step="0.25" hint="Including today" />
            </div>
        </Panel>
    )
}

interface Row {
    state: string
    miles: string
    gallons: string
    rate: string
}

export function IftaTool() {
    const [rows, setRows] = useState<Row[]>([
        { state: "FL", miles: "2400", gallons: "420", rate: "" },
        { state: "GA", miles: "1800", gallons: "200", rate: "" },
        { state: "TN", miles: "1300", gallons: "230", rate: "" },
    ])
    const update = (i: number, k: keyof Row, s: string) => setRows(rows.map((r, j) => (j === i ? { ...r, [k]: s } : r)))
    const r = ifta(rows.map((x) => ({ state: x.state, miles: num(x.miles), gallonsBought: num(x.gallons), rate: num(x.rate) })))
    const missingRates = rows.some((x) => x.rate === "")
    return (
        <div className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-left text-sm">
                    <caption className="sr-only">Miles, fuel and tax by state</caption>
                    <thead>
                        <tr className="border-b border-border">
                            <th className="py-2 pr-2">State</th>
                            <th className="py-2 pr-2">Miles</th>
                            <th className="py-2 pr-2">Gallons bought</th>
                            <th className="py-2 pr-2">Tax rate ($/gal)</th>
                            <th className="py-2 pr-2 text-right">Taxable gal</th>
                            <th className="py-2 pr-2 text-right">Tax due / (credit)</th>
                            <th className="py-2"><span className="sr-only">Remove</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, i) => (
                            <tr key={i} className="border-b border-border/60">
                                <td className="py-2 pr-2">
                                    <Input aria-label={`State, row ${i + 1}`} value={row.state} maxLength={3} onChange={(e) => update(i, "state", e.target.value.toUpperCase())} className="w-20" />
                                </td>
                                <td className="py-2 pr-2">
                                    <Input aria-label={`Miles, row ${i + 1}`} type="number" min="0" value={row.miles} onChange={(e) => update(i, "miles", e.target.value)} />
                                </td>
                                <td className="py-2 pr-2">
                                    <Input aria-label={`Gallons bought, row ${i + 1}`} type="number" min="0" value={row.gallons} onChange={(e) => update(i, "gallons", e.target.value)} />
                                </td>
                                <td className="py-2 pr-2">
                                    <Input aria-label={`Tax rate, row ${i + 1}`} type="number" min="0" step="0.0001" placeholder="0.0000" value={row.rate} onChange={(e) => update(i, "rate", e.target.value)} />
                                </td>
                                <td className="py-2 pr-2 text-right">{r.lines[i].taxableGallons.toFixed(1)}</td>
                                <td className={`py-2 pr-2 text-right font-semibold ${r.lines[i].taxDue < 0 ? "text-emerald-600" : ""}`}>{usd(r.lines[i].taxDue)}</td>
                                <td className="py-2">
                                    <Button type="button" variant="ghost" size="icon" aria-label={`Remove row ${i + 1}`} onClick={() => setRows(rows.filter((_, j) => j !== i))}>
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Button type="button" variant="outline" onClick={() => setRows([...rows, { state: "", miles: "", gallons: "", rate: "" }])}>
                <Plus className="mr-2 h-4 w-4" /> Add state
            </Button>
            <div aria-live="polite" className="grid grid-cols-2 gap-3 md:grid-cols-4">
                <Stat label="Total miles" value={r.totalMiles.toLocaleString("en-US")} />
                <Stat label="Total gallons" value={r.totalGallons.toLocaleString("en-US")} />
                <Stat label="Fleet MPG" value={r.mpg.toFixed(2)} />
                <Stat label={r.netTax >= 0 ? "Net tax due" : "Net credit"} value={usd(Math.abs(r.netTax))} tone="accent" />
            </div>
            {missingRates && (
                <p className="text-sm text-muted-foreground">
                    Enter each state&apos;s diesel rate for the quarter from the{" "}
                    <a href="https://www.iftach.org/taxmatrix4/Taxmatrix.php" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">
                        official IFTA tax rate matrix
                    </a>{" "}
                    to see tax owed. Rates change every quarter, so we do not prefill them.
                </p>
            )}
        </div>
    )
}

export function PerDiemTool() {
    const [full, setFull] = useState("200")
    const [partial, setPartial] = useState("40")
    const [rate, setRate] = useState(String(PER_DIEM_CONUS))
    const [tax, setTax] = useState("27")
    const r = perDiem({ fullDays: num(full), partialDays: num(partial), dailyRate: num(rate), taxRatePercent: num(tax) })
    return (
        <Panel
            results={
                <>
                    <div className="grid grid-cols-2 gap-3">
                        <Stat label="Per diem deduction" value={usd(r.deduction, 0)} tone="accent" />
                        <Stat label="Estimated tax saved" value={usd(r.taxSavings, 0)} tone="good" />
                        <Stat label="Total per diem" value={usd(r.allowance, 0)} />
                        <Stat label="Day equivalents" value={r.dayEquivalents.toFixed(2)} />
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Full days x rate, plus partial days at 75%, then 80% deductible for drivers under DOT hours-of-service
                        rules. An estimate, not tax advice: confirm with your tax preparer.
                    </p>
                </>
            }
        >
            <Field id="pd-full" label="Full days away from home" value={full} onChange={setFull} step="1" />
            <Field id="pd-partial" label="Partial days (leaving and returning)" value={partial} onChange={setPartial} step="1" />
            <div className="space-y-1.5">
                <Label htmlFor="pd-rate">Daily rate</Label>
                <select id="pd-rate" value={rate} onChange={(e) => setRate(e.target.value)} className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm">
                    <option value={String(PER_DIEM_CONUS)}>${PER_DIEM_CONUS} per day, continental US</option>
                    <option value={String(PER_DIEM_OCONUS)}>${PER_DIEM_OCONUS} per day, outside the continental US</option>
                </select>
            </div>
            <Field id="pd-tax" label="Your tax rate (%)" value={tax} onChange={setTax} hint="Federal bracket plus self-employment tax, for the savings estimate" />
        </Panel>
    )
}

export function DetentionTool() {
    const [checkIn, setCheckIn] = useState("08:00")
    const [release, setRelease] = useState("12:40")
    const [days, setDays] = useState("0")
    const [free, setFree] = useState("2")
    const [rate, setRate] = useState("50")
    const [inc, setInc] = useState("15")
    const minutes = minutesBetween(checkIn, release, num(days))
    const r = detention({ minutesAtFacility: minutes, freeHours: num(free), ratePerHour: num(rate), incrementMinutes: num(inc) })
    return (
        <Panel
            results={
                <>
                    <div className="grid grid-cols-2 gap-3">
                        <Stat label="Detention to bill" value={usd(r.amount)} tone="accent" />
                        <Stat label="Billable time" value={hrs(r.billableHours)} />
                        <Stat label="Time at facility" value={hrs(minutes / 60)} />
                        <Stat label="Free time" value={hrs(num(free))} />
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Keep proof: in and out times on the bill of lading, ELD location data and a message to the broker before
                        free time runs out.
                    </p>
                </>
            }
        >
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <Label htmlFor="det-in">Checked in</Label>
                    <Input id="det-in" type="time" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
                </div>
                <div className="space-y-1.5">
                    <Label htmlFor="det-out">Released</Label>
                    <Input id="det-out" type="time" value={release} onChange={(e) => setRelease(e.target.value)} />
                </div>
                <Field id="det-days" label="Extra full days waited" value={days} onChange={setDays} step="1" hint="Usually 0" />
                <Field id="det-free" label="Free time (hours)" value={free} onChange={setFree} step="0.5" />
                <Field id="det-rate" label="Detention rate ($/hour)" value={rate} onChange={setRate} />
                <div className="space-y-1.5">
                    <Label htmlFor="det-inc">Billing increment</Label>
                    <select id="det-inc" value={inc} onChange={(e) => setInc(e.target.value)} className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm">
                        <option value="15">15 minutes</option>
                        <option value="30">30 minutes</option>
                        <option value="60">1 hour</option>
                    </select>
                </div>
            </div>
        </Panel>
    )
}
