"use client"

import { useForm } from "react-hook-form"
import { ArrowLeft } from "lucide-react"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Swal from "sweetalert2"
import { Question } from "@/types/qa.type"

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
  groupPosts: Post | Question
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
              {/* User Name */}
              <div>
                <p className="text-muted-foreground mb-1">User Name</p>
                <p className="font-medium text-gray-600">{groupPosts.userName}</p>
              </div>

              {/* Posted At */}
              <div>
                <p className="text-muted-foreground mb-1">Posted At</p>
                <p className="font-medium text-gray-600">{groupPosts.postUs}</p>
              </div>

              {/* Full Post */}
              <div className="col-span-2 text-left">
                <p className="text-muted-foreground mb-1">Full Post</p>
                <p className="font-medium text-gray-600 leading-relaxed">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
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
