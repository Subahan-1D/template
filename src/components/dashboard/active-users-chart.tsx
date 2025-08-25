"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
// import { XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from "recharts"

const data = [
  { day: "Mon", users: 180 },
  { day: "Tue", users: 220 },
  { day: "Wed", users: 200 },
  { day: "Thu", users: 240 },
  { day: "Fri", users: 180 },
  { day: "Sat", users: 160 },
  { day: "Sun", users: 200 },
]

export function ActiveUsersChart() {
  return (
    <Card className="bg-white">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Active Users</CardTitle>
          <Button variant="ghost" size="sm" className="text-gray-500">
            Weekly
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="inline-block bg-yellow-100 px-3 py-1 rounded-full">
            <span className="text-sm font-semibold text-yellow-800">250 users</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">For this week</p>
        </div>
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FCD34D" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#FCD34D" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
              <YAxis hide />
              <Area type="monotone" dataKey="users" stroke="#F59E0B" strokeWidth={2} fill="url(#colorUsers)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
