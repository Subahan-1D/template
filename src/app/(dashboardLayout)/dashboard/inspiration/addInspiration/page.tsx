"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Home, Users, Church, Users2, FileText, Settings, LogOut } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function AddNewInspiration() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        title: "My grace is sufficient for you",
        description: "Even in our weakest moments, God's grace is enough. We don't have to be...",
        author: "2 Corinthians 12:9",
        dateTime: "August 18, 08:00 AM",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log("Form submitted:", formData)
        router.push("/")
    }

    const handleCancel = () => {
        router.push("/")
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Main Content */}
            <div className="flex-1 p-8">
                <div className=" ">
                    {/* Header */}
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm text-gray-500">Welcome</span>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-[#FFCE1B] hover:bg-yellow-400/90 text-primary-foreground rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm font-medium">J</span>
                                </div>
                                <span className="text-sm font-medium">Jhon</span>
                            </div>
                        </div>
                        <h1 className="text-xl font-semibold text-gray-900">Jhon Deo</h1>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-lg shadow-sm p-8">
                        <h2 className="text-xl font-semibold mb-6">Add New Inspiration Post</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                                    <Input
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        className="w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                    <Textarea
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        className="w-full h-20 resize-none"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                                    <Input
                                        value={formData.author}
                                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                        className="w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Date & Time</label>
                                    <Input
                                        value={formData.dateTime}
                                        onChange={(e) => setFormData({ ...formData, dateTime: e.target.value })}
                                        className="w-full"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end gap-4 pt-6">
                                <Button type="button" variant="outline" onClick={handleCancel} className="px-6 bg-transparent">
                                    Cancel
                                </Button>
                                <Button type="submit" className="bg-[#FFCE1B] hover:bg-yellow-400/90 text-primary-foreground text-primary-foreground px-6">
                                    Save
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
