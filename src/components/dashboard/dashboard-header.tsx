import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Welcome</h1>
          <p className="text-gray-600">Jhon Deo</p>
        </div>

        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/professional-headshot.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-gray-900">Jhon</span>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>
      </div>
    </header>
  )
}
