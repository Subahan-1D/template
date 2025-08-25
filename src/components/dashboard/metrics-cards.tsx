import { Card, CardContent } from "@/components/ui/card"
import { Users, Building2, FileText, HelpCircle } from "lucide-react"

const metrics = [
  {
    title: "Total Users",
    value: "1,250",
    icon: Users,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Total Churches",
    value: "25",
    icon: Building2,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Total Inspiration Posts",
    value: "154",
    icon: FileText,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Total Questions",
    value: "342",
    icon: HelpCircle,
    color: "bg-orange-100 text-orange-600",
  },
]

export function MetricsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <Card key={metric.title} className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${metric.color}`}>
                <metric.icon className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
