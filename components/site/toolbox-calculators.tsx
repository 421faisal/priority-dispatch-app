"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { DollarSign, Fuel, Navigation, Scale } from "lucide-react"

export function ToolboxCalculators() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProfitPerMileCalculator />
            <FuelCostCalculator />
            <LoadProfitabilityCalculator />
        </div>
    )
}

function ProfitPerMileCalculator() {
    const [totalRevenue, setTotalRevenue] = useState<string>("")
    const [totalMiles, setTotalMiles] = useState<string>("")
    const [totalExpenses, setTotalExpenses] = useState<string>("")

    const rpm = totalRevenue && totalMiles ? (parseFloat(totalRevenue) / parseFloat(totalMiles)).toFixed(2) : "0.00"
    const epm = totalExpenses && totalMiles ? (parseFloat(totalExpenses) / parseFloat(totalMiles)).toFixed(2) : "0.00"
    const profitPerMile = (parseFloat(rpm) - parseFloat(epm)).toFixed(2)

    return (
        <Card className="border-border shadow-md">
            <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-2 text-xl">
                    <DollarSign className="h-5 w-5 text-accent" />
                    Profit Per Mile Calculator
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="revenue">Total Revenue ($)</Label>
                    <Input id="revenue" type="number" value={totalRevenue} onChange={(e) => setTotalRevenue(e.target.value)} placeholder="5000" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="miles">Total Miles</Label>
                    <Input id="miles" type="number" value={totalMiles} onChange={(e) => setTotalMiles(e.target.value)} placeholder="2000" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="expenses">Total Expenses ($)</Label>
                    <Input id="expenses" type="number" value={totalExpenses} onChange={(e) => setTotalExpenses(e.target.value)} placeholder="3000" />
                </div>
                <div className="pt-4 border-t border-border grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-muted rounded-lg">
                        <span className="text-xs text-muted-foreground block uppercase font-bold">RPM</span>
                        <span className="text-xl font-black">${rpm}</span>
                    </div>
                    <div className="text-center p-3 bg-accent/20 rounded-lg">
                        <span className="text-xs text-accent block uppercase font-bold">Profit/Mile</span>
                        <span className="text-xl font-black text-accent">${profitPerMile}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

function FuelCostCalculator() {
    const [miles, setMiles] = useState<string>("")
    const [mpg, setMpg] = useState<string>("")
    const [perGallon, setPerGallon] = useState<string>("")

    const fuelGallons = miles && mpg ? (parseFloat(miles) / parseFloat(mpg)).toFixed(2) : "0"
    const totalCost = fuelGallons !== "0" && perGallon ? (parseFloat(fuelGallons) * parseFloat(perGallon)).toFixed(2) : "0.00"

    return (
        <Card className="border-border shadow-md">
            <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-2 text-xl">
                    <Fuel className="h-5 w-5 text-accent" />
                    Fuel Cost & MPG Calculator
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="trip-miles">Trip Miles</Label>
                    <Input id="trip-miles" type="number" value={miles} onChange={(e) => setMiles(e.target.value)} placeholder="1000" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="mpg">Truck Average MPG</Label>
                    <Input id="mpg" type="number" value={mpg} onChange={(e) => setMpg(e.target.value)} placeholder="6.5" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="price">Price Per Gallon ($)</Label>
                    <Input id="price" type="number" value={perGallon} onChange={(e) => setPerGallon(e.target.value)} placeholder="3.85" />
                </div>
                <div className="pt-4 border-t border-border grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-muted rounded-lg">
                        <span className="text-xs text-muted-foreground block uppercase font-bold">Gallons Needed</span>
                        <span className="text-xl font-black">{fuelGallons}</span>
                    </div>
                    <div className="text-center p-3 bg-primary/10 rounded-lg">
                        <span className="text-xs text-primary block uppercase font-bold">Total Fuel Cost</span>
                        <span className="text-xl font-black">${totalCost}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

function LoadProfitabilityCalculator() {
    const [rate, setRate] = useState<string>("")
    const [miles, setMiles] = useState<string>("")
    const [fuelPrice, setFuelPrice] = useState<string>("")
    const [mpg, setMpg] = useState<string>("6.5")

    const fuelCost = miles && mpg && fuelPrice ? (parseFloat(miles) / parseFloat(mpg)) * parseFloat(fuelPrice) : 0
    const grossProfit = rate ? parseFloat(rate) - fuelCost : 0

    return (
        <Card className="border-border shadow-md md:col-span-2">
            <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-2 text-xl">
                    <Scale className="h-5 w-5 text-accent" />
                    Quick Load Profitability Search
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="load-rate">Gross Rate ($)</Label>
                        <Input id="load-rate" type="number" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="2500" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="load-miles">Loaded Miles</Label>
                        <Input id="load-miles" type="number" value={miles} onChange={(e) => setMiles(e.target.value)} placeholder="800" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="fuel-price">Avg Fuel Price</Label>
                        <Input id="fuel-price" type="number" value={fuelPrice} onChange={(e) => setFuelPrice(e.target.value)} placeholder="4.00" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="load-mpg">MPG</Label>
                        <Input id="load-mpg" type="number" value={mpg} onChange={(e) => setMpg(e.target.value)} placeholder="6.5" />
                    </div>
                </div>

                <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-primary text-primary-foreground rounded-2xl">
                    <div>
                        <h4 className="text-lg font-bold opacity-80 uppercase tracking-wider">Estimated Gross Profit</h4>
                        <p className="text-xs opacity-60">(After Fuel Costs)</p>
                    </div>
                    <div className="text-4xl md:text-6xl font-black text-accent">
                        ${grossProfit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-medium opacity-80">Fuel Expense: ${fuelCost.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
                        <p className="text-sm font-medium opacity-80">Profit per Mile: ${(miles ? grossProfit / parseFloat(miles) : 0).toFixed(2)}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
