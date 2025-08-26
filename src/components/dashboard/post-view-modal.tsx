"use client"

import { useForm } from "react-hook-form"
import { ArrowLeft } from "lucide-react"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Swal from "sweetalert2"

// Post Type
export type Post = { 
  id: number
  userName: string
  date: string
  post: string
  postUs: string
  status: "Approved" | "Blocked"
}



export interface PostViewModalProps {
  isOpen: boolean
  onClose: () => void
  groupPosts: Post
}

export function PostViewModal({ isOpen, onClose, groupPosts }: PostViewModalProps) {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Post>()

  const onSubmit = async () => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // SweetAlert2 success
      Swal.fire({
        icon: "success",
        title: "Post Blocked",
        text: `${groupPosts.userName}'s post has been successfully blocked.`,
        confirmButtonColor: "#d33",
      })

      onClose()
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to block post. Please try again.",
        confirmButtonColor: "#d33",
      })
    }
  }

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
        

            {/* Post Info Grid */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-sm">
              <div className="text-left">
                <p className="text-muted-foreground mb-1">User Name</p>
                <p className="font-medium">{groupPosts.userName}</p>
              </div>

              <div className="text-left">
                <p className="text-muted-foreground mb-1">Date</p>
                <p className="font-medium">{groupPosts.date}</p>
              </div>

              <div className="text-left">
                <p className="text-muted-foreground mb-1">Status</p>
                <p className={`font-medium ${groupPosts.status === "Approved" ? "text-green-600" : "text-red-600"}`}>
                  {groupPosts.status}
                </p>
              </div>

              <div className="text-left col-span-2">
                <p className="text-muted-foreground mb-1">Post</p>
                <p className="font-medium">{groupPosts.post}</p>
              </div>

              <div className="text-left col-span-2">
                <p className="text-muted-foreground mb-1">Posted At</p>
                <p className="font-medium">{groupPosts.postUs}</p>
              </div>
            </div>

            {/* Block Button */}
            <Button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "POST BLOCKED..." : "BLOCK POST"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
