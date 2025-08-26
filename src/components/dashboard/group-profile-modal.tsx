"use client"

import { useForm } from "react-hook-form"
import { ArrowLeft } from "lucide-react"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Swal from "sweetalert2"
interface GroupProfileData {
  groupName: string
  createdDate: string
  status: string
  totalPosts: number
  totalShared: number
  totalMembers: number
}

export interface GroupProfileModalProps {
  isOpen: boolean
  onClose: () => void
  onAddGroup: (newGroup: GroupProfileData) => void
  groupPosts: GroupProfileData
}

export function GroupProfileModal({ isOpen, onClose, groupPosts }: GroupProfileModalProps) {
   
console.log("Group Posts in Modal:", groupPosts) // Debugging line

    const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<GroupProfileData>()

  const onSubmit = async (data: GroupProfileData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // SweetAlert2 success
      Swal.fire({
        icon: "success",
        title: "Group Banned",
        text: `${data.groupName} has been successfully banned.`,
        confirmButtonColor: "#d33",
      })

      onClose()
    } catch {
      // SweetAlert2 error
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to ban group. Please try again.",
        confirmButtonColor: "#d33",
      })
    }
  }
// or a loading indicator
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 gap-0">
        <DialogHeader className="p-4 pb-2">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 rounded-full">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="px-4 pb-4">
          <div className="text-center space-y-6">
            {/* Profile Photo Section */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">Profile Photo</h3>
              <Avatar className="h-16 w-16 mx-auto">
                <AvatarImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OYFXTFLldQrL4ouAxlVYSdFUqzjKCy.png"
                  alt="Group Profile"
                />
                <AvatarFallback className="bg-orange-100 text-orange-800">✝</AvatarFallback>
              </Avatar>
            </div>

            {/* Group Information Grid */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-sm">
              <div className="text-left">
                <p className="text-muted-foreground mb-1">Group name</p>
                <p className="font-medium">{groupPosts.groupName}</p>
              </div>

              <div className="text-left">
                <p className="text-muted-foreground mb-1">Created Date</p>
                <p className="font-medium">{groupPosts.createdDate}</p>
              </div>

              <div className="text-left">
                <p className="text-muted-foreground mb-1">Status</p>
                <p className="font-medium text-green-600">{groupPosts.status}</p>
              </div>

              <div className="text-left">
                <p className="text-muted-foreground mb-1">Total Posts</p>
                <p className="font-medium">10</p>
              </div>

              <div className="text-left">
                <p className="text-muted-foreground mb-1">Total Shared</p>
                <p className="font-medium">45</p>
              </div>

              <div className="text-left">
                <p className="text-muted-foreground mb-1">Total Members</p>
                <p className="font-medium">{groupPosts.totalMembers}</p>
              </div>
            </div>

            {/* Ban Button */}
            <Button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "BANNING GROUP..." : "BAN GROUP"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
