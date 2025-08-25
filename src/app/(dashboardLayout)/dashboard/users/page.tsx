"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowDown, Search } from "lucide-react";
import CustomPaginations from "@/components/common/CustomPaginations";
import { users } from "@/types/fakeData";
import { User } from "@/types/user.type";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function UserManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const itemsPerPage = 10;

  // Filter + Sort users
  const filteredUsers = useMemo(() => {
    return users
      .filter(
        (user) =>
          user.name.toLowerCase().includes(searchText.toLowerCase()) ||
          user.username.toLowerCase().includes(searchText.toLowerCase()) ||
          user.email.toLowerCase().includes(searchText.toLowerCase()) ||
          user.church.toLowerCase().includes(searchText.toLowerCase())
      )
      .sort((a, b) => (sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));
  }, [searchText, sortAsc]);

  const totalItems = filteredUsers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

  // Handle modal open
  const handleViewUser = (user: User) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const handleSortToggle = () => setSortAsc(!sortAsc);
  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">User Management</h1>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-gray-500 flex items-center gap-1" onClick={handleSortToggle}>
            Sort <ArrowDown className="w-2 h-2" />
          </Button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search users..."
              className="px-3 py-1 border rounded-md text-sm w-56"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
              <Search className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
        <Table className="w-full text-sm text-gray-700">
          <TableHeader>
            <TableRow className="bg-gray-50 border-b">
              <TableHead className="py-3 px-4 text-left font-medium text-gray-600">Name</TableHead>
              <TableHead className="py-3 px-4 text-left font-medium text-gray-600">Username</TableHead>
              <TableHead className="py-3 px-4 text-left font-medium text-gray-600">Email</TableHead>
              <TableHead className="py-3 px-4 text-left font-medium text-gray-600">Church</TableHead>
              <TableHead className="py-3 px-4 text-left font-medium text-gray-600">Status</TableHead>
              <TableHead className="py-3 px-4 text-left font-medium text-gray-600">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {currentUsers.map((user: User, idx) => (
              <TableRow key={user.id} className={idx % 2 === 0 ? "bg-white hover:bg-gray-50" : "bg-gray-50/50 hover:bg-gray-50"}>
                <TableCell className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/man-profile.jpg" />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-gray-900">{user.name}</span>
                  </div>
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-600">{user.username}</TableCell>
                <TableCell className="py-3 px-4 text-gray-600">{user.email}</TableCell>
                <TableCell className="py-3 px-4 text-gray-600">{user.church}</TableCell>
                <TableCell className="py-3 px-4">
                  <Badge
                    className={`flex items-center justify-center w-[104px] h-[30px] gap-1 px-1 py-1 rounded-[6px] text-sm ${
                      user.status === "Active" ? "bg-[#52C41A33] text-green-800" : "bg-[#FF4D4F33] text-red-800"
                    }`}
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="py-3 px-4 flex">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-[72px] h-[30px] px-1 py-1 gap-1 rounded-[6px] bg-[#E6F2FE] text-blue-600 border border-blue-200 hover:text-blue-800 flex items-center justify-center text-sm"
                    onClick={() => handleViewUser(user)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <CustomPaginations
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          startIndex={startIndex}
          onPageChange={handlePageChange}
        />
      </div>

      {/* Shadcn Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>User Info</DialogTitle>
            <DialogDescription>
              {selectedUser && (
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/man-profile.jpg" />
                      <AvatarFallback>{selectedUser.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900">{selectedUser.name}</p>
                      <p className="text-sm text-gray-500">{selectedUser.email}</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1 text-sm text-gray-700">
                    <p><strong>Username:</strong> {selectedUser.username}</p>
                    <p><strong>Church:</strong> {selectedUser.church}</p>
                    <p><strong>Status:</strong> {selectedUser.status}</p>
                  </div>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setModalOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
