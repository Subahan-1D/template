"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

const data = [
  { month: "Feb", value: 20 },
  { month: "Mar", value: 35 },
  { month: "Apr", value: 25 },
  { month: "May", value: 40 },
  { month: "Jun", value: 80 },
  { month: "Jul", value: 45 },
  { month: "Aug", value: 30 },
  { month: "Sep", value: 25 },
  { month: "Oct", value: 35 },
  { month: "Nov", value: 50 },
]

const timeFilters = ["Daily", "Weekly", "Monthly", "Yearly"]

export function QuestionOverview() {
  return (
    <Card className="bg-white">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Question Overview</CardTitle>
          <div className="flex space-x-1">
            {timeFilters.map((filter) => (
              <Button
                key={filter}
                variant={filter === "Monthly" ? "default" : "ghost"}
                size="sm"
                className={filter === "Monthly" ? "bg-yellow-400 text-black hover:bg-yellow-500" : ""}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Bar dataKey="value" fill="#FCD34D" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-center">
          <p className="text-2xl font-bold text-gray-900">44,098.00</p>
          <p className="text-sm text-gray-500">+10.2% from last month</p>
        </div>
      </CardContent>
    </Card>
  )
}
