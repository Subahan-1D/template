import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Lightbulb, Users, Building2, UsersRound, FileText, Settings, LogOut } from "lucide-react"

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Lightbulb, label: "Inspiration Management" },
  { icon: Users, label: "User Management" },
  { icon: Building2, label: "Church Management" },
  { icon: UsersRound, label: "Group Management" },
  { icon: FileText, label: "Posts Management" },
  { icon: Settings, label: "Settings" },
]

export function DashboardSidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-sm">R</span>
          </div>
          <span className="font-semibold text-gray-900">RELAS</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {sidebarItems.map((item) => (
          <Button
            key={item.label}
            variant={item.active ? "default" : "ghost"}
            className={cn(
              "w-full justify-start text-left",
              item.active
                ? "bg-yellow-400 text-black hover:bg-yellow-500"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
            )}
          >
            <item.icon className="mr-3 h-4 w-4" />
            {item.label}
          </Button>
        ))}
      </nav>

      <div className="p-4">
        <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gray-900">
          <LogOut className="mr-3 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}
