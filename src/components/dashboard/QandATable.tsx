"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowDown, Search } from "lucide-react";
import CustomPaginations from "@/components/common/CustomPaginations";


import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";


import { PostViewModal } from "./post-view-modal";
import { Question } from "@/types/qa.type";
import { QuestionAndAnswerData } from "@/types/fakeData";

export default function QuestionAndAnswer() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [sortAsc, setSortAsc] = useState(true);
    const [selectedpost, setSelectedpost] = useState<Question | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [qestion] = useState<Question[]>(QuestionAndAnswerData); // Replace 'posts' with actual posts data when available       

    const itemsPerPage = 10;

    // 🔎 Filter + Sort Posts
    const filteredPosts = useMemo(() => {
        return qestion && qestion
            .filter(
                (question) =>
                    question.userName.toLowerCase().includes(searchText.toLowerCase()) ||
                    question.postUs.toLowerCase().includes(searchText.toLowerCase())
            )
            .sort((a, b) =>
                sortAsc ? a.userName.localeCompare(b.userName) : b.userName.localeCompare(a.userName)
            );
    }, [searchText, sortAsc, qestion]);

    // Pagination
    const totalItems = filteredPosts?.length || 0;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPosts = filteredPosts?.slice(startIndex, startIndex + itemsPerPage);

    // Handlers
    const handleSortToggle = () => setSortAsc(!sortAsc);
    const handlePageChange = (page: number) => setCurrentPage(page);

    // Handle modal open
    const handleViewpost = (post: Question) => {
        setSelectedpost(post);
        setModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold text-gray-900">
                    Post Management <span className="text-black">&gt;</span> Q&A Post
                </h1>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="text-gray-500 flex items-center gap-1" onClick={handleSortToggle}>
                        Sort <ArrowDown className="w-2 h-2" />
                    </Button>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
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
                            <TableHead className="py-3 px-4 text-left font-medium text-gray-600">User Name</TableHead>
                            <TableHead className="py-3 px-4 text-left font-medium text-gray-600">Date</TableHead>
                            <TableHead className="py-3 px-4 text-left font-medium text-gray-600">Question</TableHead>
                            <TableHead className="py-3 px-4 text-left font-medium text-gray-600">Category</TableHead>
                            <TableHead className="py-3 px-4 text-left font-medium text-gray-600">Post Us</TableHead>
                            <TableHead className="py-3 px-4 text-left font-medium text-gray-600">Status</TableHead>
                            <TableHead className="py-3 px-4 text-left font-medium text-gray-600">Actions</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {currentPosts && currentPosts?.map((question) => (
                            <TableRow key={question.id} className="hover:bg-gray-50 border-0 bg-transparent">
                                <TableCell className="py-3 px-4">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="w-8 h-8">
                                            <AvatarImage src="/man-profile.jpg" />
                                            <AvatarFallback>{question.userName.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <span className="font-medium text-gray-900">{question.userName}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="py-3 px-4 text-gray-600">{question.date}</TableCell>
                                <TableCell className="py-3 px-4 text-gray-600">
                                    {question.question.substring(0, 10)}...
                                </TableCell>
                                <TableCell className="py-3 px-4 text-gray-600">{question.category}</TableCell>
                                <TableCell className="py-3 px-4 text-gray-600">{question.postUs}</TableCell>
                                <TableCell className="py-4 px-6 border-0">
                                    <Badge
                                        className={`flex items-center justify-center w-[104px] h-[30px] gap-1 px-1 py-1 rounded-[6px] text-sm ${question.status === "Approved" ? "bg-[#52C41A33] text-green-800" : "bg-[#FF4D4F33] text-red-800"
                                            }`}
                                    >
                                        {question.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="py-3 px-4 flex">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-[72px] h-[30px] px-1 py-1 gap-1 rounded-[6px] bg-[#E6F2FE] text-blue-600 border border-blue-200 hover:text-blue-800 flex items-center justify-center text-sm"
                                        onClick={() => handleViewpost(question)}
                                    >
                                        View
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {modalOpen && selectedpost && (
                <PostViewModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    groupPosts={selectedpost}
                />
            )}

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

        </div>
    );
}
