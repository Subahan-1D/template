"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus } from "lucide-react"
import Swal from "sweetalert2"

interface GroupFormData {
  groupName: string
  groupMember: number
  createdBy: string
  status: "Active" | "Banned"
}

interface AddGroupModalProps {
  onAddGroup?: (groupData: {
    id: number
    groupName: string
    groupMember: number
    createdDate: string
    createdBy: string
    status: "Active" | "Banned"
  }) => void
}

export default function AddGroupModal({ onAddGroup }: AddGroupModalProps) {
  const [open, setOpen] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<GroupFormData>()

  const handleSave = (data: GroupFormData) => {
    const newGroup = {
      id: Date.now(),
      groupName: data.groupName,
      groupMember: Number(data.groupMember),
      createdDate: new Date().toLocaleDateString(),
      createdBy: data.createdBy,
      status: data.status,
    }

    console.log("Form Submitted:", newGroup)

    onAddGroup?.(newGroup)

    // ✅ Success Alert
    Swal.fire({
      icon: "success",
      title: "Saved Successfully!",
      text: "New group has been added.",
      showConfirmButton: false,
      timer: 1500,
    })

    reset()
    setOpen(false)
  }

  const handleCancel = () => {
    reset()
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#FFCE1B] hover:bg-yellow-400/90 text-primary-foreground flex items-center px-3 py-2 rounded-md">
          <Plus className="w-4 h-4 mr-2" />
          Add New Group
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900">Add New Group</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(handleSave)} className="grid gap-6 py-4">
          {/* Group Name */}
          <div className="space-y-2">
            <Label htmlFor="groupName">Group Name</Label>
            <Input
              id="groupName"
              {...register("groupName", { required: "Group name is required" })}
            />
            {errors.groupName && <p className="text-red-500 text-xs">{errors.groupName.message}</p>}
          </div>

          {/* Group Members */}
          <div className="space-y-2">
            <Label htmlFor="groupMember">Group Members</Label>
            <Input
              id="groupMember"
              type="number"
              {...register("groupMember", { required: "Number of members is required" })}
            />
            {errors.groupMember && <p className="text-red-500 text-xs">{errors.groupMember.message}</p>}
          </div>

          {/* Created By */}
          <div className="space-y-2">
            <Label htmlFor="createdBy">Created By</Label>
            <Input
              id="createdBy"
              {...register("createdBy", { required: "Created by is required" })}
            />
            {errors.createdBy && <p className="text-red-500 text-xs">{errors.createdBy.message}</p>}
          </div>

          {/* Status */}
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <select
              id="status"
              {...register("status", { required: "Status is required" })}
              className="border rounded p-2 w-full"
            >
              <option value="Active">Active</option>
              <option value="Banned">Banned</option>
            </select>
            {errors.status && <p className="text-red-500 text-xs">{errors.status.message}</p>}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="px-6 py-2 border border-yellow-400 text-yellow-600 hover:bg-yellow-50 bg-transparent"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="px-6 py-2 bg-[#FFCE1B] hover:bg-yellow-400/90 text-primary-foreground"
            >
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
