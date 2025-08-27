"use client"
import { Card, CardContent } from "@/components/ui/card"
import { useGetOverviewQuery } from "@/redux/api/overview";
import { Users, Building2, FileText, HelpCircle } from "lucide-react"

export function MetricsCards() {

const {data, isLoading, isError} = useGetOverviewQuery({})
console.log("overview user data",data);

  if (isLoading) return <p>Loading metrics...</p>;
  if (isError) return <p>Failed to load metrics</p>;


  const metrics = [
    {
      title: "Total Users",
      value: data?.user_count,
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Total Churches",
      value: data?.church_count ,
      icon: Building2,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Total Inspiration Posts",
      value: data?.daily_inspiration_count,
      icon: FileText,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Total Questions",
      value: data?.post_count ,
      icon: HelpCircle,
      color: "bg-orange-100 text-orange-600",
    },
  ];

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
