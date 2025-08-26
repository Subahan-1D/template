"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus } from "lucide-react"

interface ChurchFormData {
    image ?: FileList | null
    churchName: string
    website?: string
    contactEmail: string
    city: string
    address: string
 
}

interface AddChurchModalProps {
    onAddChurch?: (churchData: ChurchFormData) => void
}

export default function AddChurchModal({ onAddChurch }: AddChurchModalProps) {
    const [open, setOpen] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ChurchFormData>()

    const handleSave = (data: ChurchFormData) => {
        console.log("Form Submitted:", data)

        const newChurch = {
            id: Date.now(),
            churchName: data.churchName,
            website: data.website || "",
            contactEmail: data.contactEmail,
            city: data.city,
            address: data.address,
            createdDate: new Date().toLocaleDateString(),
            createdBy: "Admin",
            status: "Active",

        }

        onAddChurch?.(newChurch)
        reset()
        setOpen(false)
    }

    const handleCancel = () => {
        console.log("Cancel Pressed. Current form values cleared.")
        reset()
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-[#FFCE1B] hover:bg-yellow-400/90 text-primary-foreground flex items-center px-3 py-2 rounded-md">
                    <Plus className="w-4 h-4 mr-2" />
                    Add New
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[600px] bg-white">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold text-gray-900">Add New Church</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit(handleSave)} className="grid gap-6 py-4">
                    {/* Upload Image and Church Name Row */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="image">Upload Image</Label>
                            <Input
                                id="image"
                                type="file"
                                accept="image/*"
                                {...register("image")}
                                className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="churchName">Church Name</Label>
                            <Input
                                id="churchName"
                                {...register("churchName", { required: "Church name is required" })}
                            />
                            {errors.churchName && <p className="text-red-500 text-xs">{errors.churchName.message}</p>}
                        </div>
                    </div>

                    {/* Website and Contact Email Row */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="website">Website (optional)</Label>
                            <Input id="website" {...register("website")} placeholder="https://example.com" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="contactEmail">Contact Email</Label>
                            <Input
                                id="contactEmail"
                                type="email"
                                {...register("contactEmail", { required: "Email is required" })}
                            />
                            {errors.contactEmail && <p className="text-red-500 text-xs">{errors.contactEmail.message}</p>}
                        </div>
                    </div>

                    {/* City and Address Row */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input
                                id="city"
                                {...register("city", { required: "City is required" })}
                            />
                            {errors.city && <p className="text-red-500 text-xs">{errors.city.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="address">Address</Label>
                            <Input
                                id="address"
                                {...register("address", { required: "Address is required" })}
                            />
                            {errors.address && <p className="text-red-500 text-xs">{errors.address.message}</p>}
                        </div>
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
