import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const newUsers = [
  {
    name: "Sarah Miller",
    username: "sarah48",
    church: "Nieuwe Kerk",
    date: "02-08-2025",
    avatar: "/woman-profile.png",
  },
  {
    name: "Sarah Miller",
    username: "sarah48",
    church: "Nieuwe Kerk",
    date: "02-08-2025",
    avatar: "/woman-profile.png",
  },
  {
    name: "Sarah Miller",
    username: "sarah48",
    church: "Nieuwe Kerk",
    date: "02-08-2025",
    avatar: "/woman-profile.png",
  },
]

export function NewUsersTable() {
  return (
    <Card className="bg-white">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">New Users</CardTitle>
          <Button variant="ghost" size="sm" className="text-blue-600">
            See More
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-500 pb-2 border-b">
            <span>Name</span>
            <span>User Name</span>
            <span>Church</span>
            <span>Date</span>
          </div>
          {newUsers.map((user, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 items-center py-2">
              <div className="flex items-center space-x-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm text-gray-900">{user.name}</span>
              </div>
              <span className="text-sm text-gray-600">{user.username}</span>
              <span className="text-sm text-gray-600">{user.church}</span>
              <span className="text-sm text-gray-600">{user.date}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
