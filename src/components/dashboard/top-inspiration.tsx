import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const inspirationData = [
  { name: "John Doe", count: 48, avatar: "/man-profile.jpg" },
  { name: "Alex Carter", count: 45, avatar: "/man-profile.jpg" },
  { name: "Mia Johnson", count: 42, avatar: "/man-profile.jpg" },
  { name: "John Doe", count: 38, avatar: "/man-profile.jpg" },
]

export function TopInspiration() {
  return (
    <Card className="bg-white">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Top Inspiration Shared</CardTitle>
          <Button variant="ghost" size="sm" className="text-gray-500">
            Weekly
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {inspirationData.map((user, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-gray-900">{user.name}</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">{user.count}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
