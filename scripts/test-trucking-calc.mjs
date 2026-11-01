// Checks the trucking tool math against hand-worked examples.
// Run: node --experimental-strip-types scripts/test-trucking-calc.mjs
import assert from "node:assert/strict"
import { costPerMile, loadProfit, hosStatus, ifta, perDiem, detention, minutesBetween } from "../lib/trucking-calc.ts"

const close = (a, b, msg) => assert.ok(Math.abs(a - b) < 0.005, `${msg}: got ${a}, expected ${b}`)

// Cost per mile: $6,000 fixed over 10,000 miles = $0.60; fuel $4 / 6.5 mpg = $0.6154
const c = costPerMile({
    milesPerMonth: 10000, truckPayment: 2500, trailerPayment: 800, insurance: 1500, permitsAndPlates: 300,
    eldAndSoftware: 100, otherFixed: 800, fuelPrice: 4, mpg: 6.5, maintenancePerMile: 0.2, tiresPerMile: 0.04,
    tollsPerMonth: 200, driverPayPerMile: 0,
})
close(c.fixedPerMile, 0.6, "fixed per mile")
close(c.fuelPerMile, 0.6154, "fuel per mile")
close(c.total, 0.6 + 0.6154 + 0.2 + 0.04 + 0.02, "total per mile")

// Load: $3,000 for 1,000 loaded + 200 deadhead; fuel $4 at 6 mpg; $1/mile other; $50 tolls; 4% dispatch
const l = loadProfit({ rate: 3000, loadedMiles: 1000, deadheadMiles: 200, fuelPrice: 4, mpg: 6, otherCostPerMile: 1, tolls: 50, dispatchPercent: 4 })
close(l.rpmLoaded, 3, "rpm loaded")
close(l.rpmAllMiles, 2.5, "rpm all miles")
close(l.fuelCost, 800, "fuel cost") // 1200/6*4
close(l.dispatchFee, 120, "dispatch fee")
close(l.profit, 3000 - 800 - 1200 - 50 - 120, "profit")
close(l.breakEvenRate * 0.96, 800 + 1200 + 50, "break-even covers costs after fee")

// HOS: 9h into the window, 6h driven, 5h since break, 60 of 70 used -> 5h of window, 5h of driving, 10h of cycle,
// but the 30-minute break due in 3h uses window time: 3h + 0.5h break + 1.5h = 4.5h of driving
let h = hosStatus({ hoursSinceOnDuty: 9, hoursDriven: 6, drivingSinceBreak: 5, cycleHoursUsed: 60, cycle: 70 })
assert.equal(h.driveLeft, 4.5)
assert.equal(h.breakDueIn, 3)
assert.equal(h.breakNeededFirst, true)
// The mid-shift break eats into the 14-hour window: 10h into it, 4h driven, 7h since break
// -> 1h before the break, then the window has 4h - 0.5h break = 3.5h of driving
h = hosStatus({ hoursSinceOnDuty: 10, hoursDriven: 4, drivingSinceBreak: 7, cycleHoursUsed: 20, cycle: 70 })
assert.equal(h.breakDueIn, 1)
assert.equal(h.driveLeft, 3.5)
assert.equal(h.limitedBy, "14-hour window")
// Cycle is the limit
h = hosStatus({ hoursSinceOnDuty: 2, hoursDriven: 1, drivingSinceBreak: 1, cycleHoursUsed: 68.5, cycle: 70 })
assert.equal(h.limitedBy, "60/70-hour cycle")
close(h.driveLeft, 1.5, "cycle-limited drive left")
// Out of hours
h = hosStatus({ hoursSinceOnDuty: 14, hoursDriven: 10, drivingSinceBreak: 2, cycleHoursUsed: 40, cycle: 70 })
assert.equal(h.canDriveNow, false)
assert.equal(h.limitedBy, "14-hour window")

// IFTA: 6,000 miles on 1,000 gallons = 6 mpg
const t = ifta([
    { state: "FL", miles: 3000, gallonsBought: 700, rate: 0.4 },
    { state: "GA", miles: 3000, gallonsBought: 300, rate: 0.35 },
])
close(t.mpg, 6, "fleet mpg")
close(t.lines[0].taxDue, (500 - 700) * 0.4, "FL credit")
close(t.lines[1].taxDue, (500 - 300) * 0.35, "GA owed")
close(t.netTax, -80 + 70, "net")

// Per diem: 20 full days + 4 partial at $80 -> 23 day-equivalents, $1,840, 80% = $1,472
const p = perDiem({ fullDays: 20, partialDays: 4, dailyRate: 80, taxRatePercent: 25 })
close(p.allowance, 1840, "allowance")
close(p.deduction, 1472, "deduction")
close(p.taxSavings, 368, "tax savings")

// Detention: 4h10m at the dock, 2 free hours, $50/h, 15-min increments -> 2h15m billable = $112.50
const d = detention({ minutesAtFacility: 250, freeHours: 2, ratePerHour: 50, incrementMinutes: 15 })
assert.equal(d.billableMinutes, 135)
close(d.amount, 112.5, "detention amount")
assert.equal(detention({ minutesAtFacility: 90, freeHours: 2, ratePerHour: 50, incrementMinutes: 15 }).amount, 0)

assert.equal(minutesBetween("22:30", "01:15"), 165)
assert.equal(minutesBetween("08:00", "08:00", 1), 1440)

console.log("All trucking calculator checks passed")
