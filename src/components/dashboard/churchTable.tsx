/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { sampleChurchPosts } from "@/types/fakeData"
import CustomPaginations from "@/components/common/CustomPaginations"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import AddChurchModal from "./add-church-modal"

export default function ChurchPostManagement() {
  const [currentPage, setCurrentPage] = useState(1)
  const [churchPosts, setChurchPosts] = useState(sampleChurchPosts)
  const itemsPerPage = 10
  const totalItems = churchPosts.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentPosts = churchPosts.slice(startIndex, startIndex + itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleEdit = (id: number) => {
    console.log(`Edit post ${id}`)
  }

  const handleAddChurch = (newChurch: any) => {
    setChurchPosts((prev) => [newChurch, ...prev])
    console.log("New church added:", newChurch)
  }

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)]">
            Church Management
          </h1>
          <h1 className="text-2xl font-semibold py-6 text-gray-900">Church Post Management</h1>
        </div>
        <AddChurchModal onAddChurch={handleAddChurch} />
      </div>

      <div className="bg-white rounded-lg pt-4">
        <Table className="border-0">
          <TableHeader >
            <TableRow className="border-0">
              <TableHead className="text-gray-600 font-medium py-4 px-6">Church Name</TableHead>
              <TableHead className="text-gray-600 font-medium py-4 px-6">City</TableHead>
              <TableHead className="text-gray-600 font-medium py-4 px-6">Created Date</TableHead>
              <TableHead className="text-gray-600 font-medium py-4 px-6">Created By</TableHead>
              <TableHead className="text-gray-600 font-medium py-4 px-6">Status</TableHead>
              <TableHead className="text-gray-600 font-medium py-4 px-6">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
  {currentPosts.map((post: any) => (
    <TableRow
      key={post.id}
      className="hover:bg-gray-50 border-0 bg-transparent"
    >
      {/* ✅ Church Name with Avatar */}
      <TableCell className="py-4 px-6 text-gray-900 font-medium flex items-center gap-3 border-0">
        <Avatar className="h-8 w-8">
          <AvatarImage src="/man-profile.jpg" alt={post.churchName} />
          <AvatarFallback>{post.churchName.charAt(0)}</AvatarFallback>
        </Avatar>
        <span>{post.churchName}</span>
      </TableCell>

      <TableCell className="py-4 px-6 text-gray-900 border-0">
        {post.city}
      </TableCell>
      <TableCell className="py-4 px-6 text-gray-600 border-0">
        {post.createdDate}
      </TableCell>
      <TableCell className="py-4 px-6 text-gray-600 border-0">
        {post.createdBy}
      </TableCell>
      <TableCell className="py-4 px-6 border-0">
        <Badge
          className={`w-[74px] h-[26px] flex items-center justify-center rounded-sm p-1 
            ${post.status === "Active"
              ? "bg-green-100 text-green-800 border border-green-200"
              : "bg-red-100 text-red-700 border border-red-200"
            }`}
        >
          {post.status}
        </Badge>
      </TableCell>

      <TableCell className="py-4 px-6 border-0">
        <Link href="">
          <Button
            variant="link"
            className="text-blue-600 border border-blue-500/50 h-7 px-2 py-1 bg-[#E6F2FE] hover:text-blue-800 font-normal rounded-[6px]"
            onClick={() => handleEdit(post.id)}
          >
            view
          </Button>
        </Link>
      </TableCell>
    </TableRow>
  ))}
</TableBody>

        </Table>
      </div>

      <div className="mt-6">
        <CustomPaginations
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          startIndex={startIndex}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}
