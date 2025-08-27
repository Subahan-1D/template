"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft } from "lucide-react"
import { User } from "@/types/user.type"

interface UserData {
  id: string
  username: string
  firstName: string
  lastName: string
  email: string
  churchName: string
  joinDate: string
  status: "active" | "banned"
  totalPosts: number
  totalShared: number
  totalCommented: number
  profileImage: string
}

interface UserProfileModalProps {
  isOpen: boolean
  onClose: () => void
  user: User | null;
}

export function UserProfileModal({ isOpen, onClose }: UserProfileModalProps) {
  const [userData, setUserData] = useState<UserData>({
    id: "1",
    username: "sarah48",
    firstName: "Sarah",
    lastName: "Miller",
    email: "sarah48@gmail.com",
    churchName: "Nieuwe Kerk",
    joinDate: "01-08-2025",
    status: "active",
    totalPosts: 5,
    totalShared: 45,
    totalCommented: 109,
    profileImage: "/man-profile.jpg",
  })

  const handleStatusToggle = () => {
    setUserData((prev) => ({
      ...prev,
      status: prev.status === "active" ? "banned" : "active",
    }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto p-0 bg-white rounded-2xl">
        <DialogHeader className="p-6 pb-0">
          <Button variant="ghost" size="icon" onClick={onClose} className="absolute left-4 top-4 h-8 w-8 rounded-full">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="px-6 pb-6">
          {/* Profile Photo */}
          <div className="text-center mb-6">
            <p className="text-sm text-muted-foreground mb-3">Profile Photo</p>
            <Avatar className="h-20 w-20 mx-auto">
              <AvatarImage src={userData.profileImage || "/placeholder.svg"} alt={userData.firstName} />
              <AvatarFallback>
                {userData.firstName[0]}
                {userData.lastName[0]}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* User Details Grid */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">User name</p>
                <p className="text-sm font-medium">{userData.username}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">First name</p>
                <p className="text-sm font-medium">{userData.firstName}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Last name</p>
                <p className="text-sm font-medium">{userData.lastName}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="text-sm font-medium text-blue-600">{userData.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Church name</p>
                <p className="text-sm font-medium">{userData.churchName}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Join Date</p>
                <p className="text-sm font-medium">{userData.joinDate}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Status</p>
                <p
                  className={`text-sm font-medium capitalize ${userData.status === "active" ? "text-green-600" : "text-red-600"
                    }`}
                >
                  {userData.status}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Posts</p>
                <p className="text-sm font-medium">{userData.totalPosts}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Shared</p>
                <p className="text-sm font-medium">{userData.totalShared}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Commented</p>
                <p className="text-sm font-medium">{userData.totalCommented}</p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <Button
            onClick={handleStatusToggle}
            className={`w-full mt-6 ${userData.status === "active"
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-green-500 hover:bg-green-600 text-white"
              }`}
          >
            {userData.status === "active" ? "BAN USER" : "UNBAN USER"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
