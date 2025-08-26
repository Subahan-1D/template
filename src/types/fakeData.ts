import { NotificationItem } from "./me.type";
import { RiInstagramFill } from "react-icons/ri";
import { Mail } from "lucide-react";
import UserImg from "../assets/logo.png";
import { StaticImageData } from "next/image";
import { Users, Settings } from "lucide-react"
import { PiChurchLight } from "react-icons/pi";
import { BsSignpostSplit } from "react-icons/bs";
import { User } from "./user.type";
import { Post } from "./post.type";
// filepath: src/path/to/me.type.ts
export type Me = {
  id: string;
  name: string;
  email: string;
};
export const transactions = [
  {
    id: "TXN1001",
    date: "2025-07-01",
    description: "Payment received from client",
    amount: 1500.0,
    status: "Completed",
  },
  {
    id: "TXN1002",
    date: "2025-07-02",
    description: "Subscription renewal",
    amount: -49.99,
    status: "Completed",
  },
  {
    id: "TXN1003",
    date: "2025-07-03",
    description: "Payment Blocked from vendor",
    amount: 250.0,
    status: "Blocked",
  },
  {
    id: "TXN1004",
    date: "2025-07-04",
    description: "Refund processed",
    amount: -150.0,
    status: "Completed",
  },
  {
    id: "TXN1005",
    date: "2025-07-05",
    description: "Failed payment attempt",
    amount: -99.99,
    status: "Failed",
  },
  {
    id: "TXN1006",
    date: "2025-07-06",
    description: "Invoice payment received",
    amount: 1100.0,
    status: "Completed",
  },
  {
    id: "TXN1007",
    date: "2025-07-06",
    description: "Manual adjustment",
    amount: 100.0,
    status: "Blocked",
  },
  {
    id: "TXN1008",
    date: "2025-07-07",
    description: "Service fee deduction",
    amount: -25.0,
    status: "Completed",
  },
];

export const dashboardStats = [
  {
    id: "total-users",
    title: "Total Users",
    value: "1,250",
    icon: Users,
    color: "blue",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    textColor: "text-gray-600",
  },
  {
    id: "total-churches",
    title: "Total Churches",
    value: "25",
    icon: PiChurchLight,
    color: "green",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    textColor: "text-gray-600",
  },
  {
    id: "total-inspiration-posts",
    title: "Total Inspiration Posts",
    value: "154",
    icon: BsSignpostSplit,
    color: "yellow",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
    textColor: "text-gray-600",
  },
  {
    id: "total-questions",
    title: "Total Questions",
    value: "342",
    icon: Settings,
    color: "teal",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
    textColor: "text-gray-600",
  },
];

interface UserChatInterface {
  id: number;
  name: string;
  location: string;
  lastMessage: string;
  timestamp: string;
  avatar: string | StaticImageData;
}
export interface MessageInt {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isSent: boolean;
}

export const UserChat: UserChatInterface[] = [
  {
    id: 1,
    name: "Hasan Habib",
    location: "Dhaka, Bangladesh",
    lastMessage: "Lorem ipsum dolor sit amet,dolor...",
    timestamp: "12:38",
    avatar: UserImg,
  },
  {
    id: 2,
    name: "Hasan Habib",
    location: "Dhaka, Bangladesh",
    lastMessage: "Lorem ipsum dolor sit amet,dolor...",
    timestamp: "12:38",
    avatar: UserImg,
  },
  {
    id: 3,
    name: "Hasan Habib",
    location: "Dhaka, Bangladesh",
    lastMessage: "Lorem ipsum dolor sit amet,dolor...",
    timestamp: "12:38",
    avatar: UserImg,
  },
  {
    id: 4,
    name: "Hasan Habib",
    location: "Dhaka, Bangladesh",
    lastMessage: "Lorem ipsum dolor sit amet,dolor...",
    timestamp: "12:38",
    avatar: UserImg,
  },
];

export const chatmessage: MessageInt[] = [
  {
    id: 1,
    sender: "Hasan Habib",
    content:
      "Happy Weekend gauss see you on next week keep spirit and don't forget to chill",
    timestamp: "04:30 PM",
    isSent: false,
  },
  {
    id: 2,
    sender: "Hasan Habib",
    content:
      "Happy Weekend gauss see you on next week keep spirit and don't forget to chill",
    timestamp: "04:30 PM",
    isSent: false,
  },
  {
    id: 3,
    sender: "You",
    content:
      "Happy Weekend gauss see you on next week keep spirit next week keep spirit",
    timestamp: "04:30 PM",
    isSent: true,
  },
  {
    id: 4,
    sender: "Hasan Habib",
    content:
      "Happy Weekend gauss see you on next week keep spirit and don't forget to chill",
    timestamp: "04:30 PM",
    isSent: false,
  },
];

export const footerData = {
  companyInfo: {
    description:
      "ListMyCity does not charge booking fees or service fees. All property information is submitted directly by hosts or obtained through public channels. All transactions are handled independently between guest and host.",
    socialLinks: [
      { icon: RiInstagramFill, text: "@listmycity" },
      { icon: Mail, text: "inquiries@listmycity.us" },
    ],
  },
  navigationSections: [
    {
      title: "Quick Menu",
      links: [
        { text: "Home", href: "/" },
        { text: "Explore Stays", href: "/explore-stays" },
        // { text: "Refer & Earn", href: "/refer-earn" },
        { text: "List Your Property", href: "/property-list" },
        { text: "Help and Support", href: "/support" },
        // { text: "Messaging", href: "/messaging" },
        // { text: "Notification", href: "/notification" },
        // { text: "FAQs", href: "/faq" },
      ],
    },
    {
      title: "Information",
      links: [
        { text: "My Account", href: "/account" },
        { text: "Login", href: "/login" },
        { text: "My Properties", href: "/properties" },
        { text: "Save", href: "/saved" },
      ],
    },
    {
      title: "Service",
      links: [
        { text: "Basic Plan", href: "/pricing" },
        { text: "Standard Plan", href: "/pricing" },
        { text: "Premium Plan", href: "/pricing" },
        { text: "Privacy Policy", href: "/privacy-policy" },
        { text: "Terms & Conditions", href: "/terms" },
      ],
    },
  ],
  subscribe: {
    title: "Subscribe",
    description:
      "Enter your email below to be the first to know about new collections.",
  },
  copyright: "",
};

export const notificationData: NotificationItem[] = [
  {
    id: 1,
    title:
      "Please confirm your email address by clicking on the link we just emailed you. If you cannot find the email, you can request a new confirmation email or change your email address.",
    time: "1 days ago",
    read: false,
  },
  {
    id: 2,
    title: "Your order has been shipped",
    time: "2 days ago",
    read: false,
  },
  {
    id: 3,
    title: "Welcome to our platform!",
    time: "5 days ago",
    read: true,
  },
];



export const sampleInspirationPosts = [
  {
    id: 1,
    date: "01-08-2025",
    title: "Be Still and know...",
    description: "Even in our weakest mom...",
    status: "Published",
  },
  {
    id: 2,
    date: "02-08-2025",
    title: "The Lord is my shepherd...",
    description: "Even in our weakest mom...",
    status: "Published",
  },
  {
    id: 3,
    date: "03-08-2025",
    title: "You are the light of the wo...",
    description: "Even in our weakest mom...",
    status: "Published",
  },
  {
    id: 4,
    date: "04-08-2025",
    title: "Be Still and know...",
    description: "Even in our weakest mom...",
    status: "Published",
  },
  {
    id: 5,
    date: "05-08-2025",
    title: "You are the light of the wo...",
    description: "Even in our weakest mom...",
    status: "Published",
  },
  {
    id: 6,
    date: "06-08-2025",
    title: "-----------------------------",
    description: "-----------------------------",
    status: "Missing",
  },
  {
    id: 7,
    date: "07-08-2025",
    title: "Be Still and know...",
    description: "Even in our weakest mom...",
    status: "Published",
  },
  {
    id: 8,
    date: "08-08-2025",
    title: "The Lord is my shepherd...",
    description: "Even in our weakest mom...",
    status: "Published",
  },
  {
    id: 9,
    date: "09-08-2025",
    title: "-----------------------------",
    description: "-----------------------------",
    status: "Missing",
  },
  {
    id: 10,
    date: "10-08-2025",
    title: "Be Still and know...",
    description: "Even in our weakest mom...",
    status: "Published",
  },
  {
    id: 11,
    date: "11-08-2025",
    title: "The Lord is my shepherd...",
    description: "Even in our weakest mom...",
    status: "Published",
  },
]


export const users: User[] = [
  {
    id: 1,
    name: "Sarah Miller",
    username: "sarah48",
    email: "sarah.miller48@gmail.com",
    church: "Hillcrest Kent",
    status: "Active",
  },
  {
    id: 2,
    name: "John Smith",
    username: "johnny22",
    email: "john.smith22@gmail.com",
    church: "Grace Fellowship",
    status: "Banned",
  },
  {
    id: 3,
    name: "Emily Johnson",
    username: "emjay09",
    email: "emily.j09@gmail.com",
    church: "Hope Community",
    status: "Active",
  },
  {
    id: 4,
    name: "Michael Brown",
    username: "mike_b",
    email: "michael.brown@gmail.com",
    church: "Faith Center",
    status: "Banned",
  },
  {
    id: 5,
    name: "Olivia Davis",
    username: "olivia_d",
    email: "olivia.davis@gmail.com",
    church: "Trinity Chapel",
    status: "Active",
  },
  {
    id: 6,
    name: "Daniel Wilson",
    username: "danwils",
    email: "daniel.wilson@gmail.com",
    church: "New Life Church",
    status: "Active",
  },
  {
    id: 7,
    name: "Sophia Martinez",
    username: "sophiam",
    email: "sophia.martinez@gmail.com",
    church: "Kingdom Hall",
    status: "Banned",
  },
  {
    id: 8,
    name: "James Anderson",
    username: "james_a",
    email: "james.anderson@gmail.com",
    church: "Living Word",
    status: "Active",
  },
  {
    id: 9,
    name: "Isabella Thomas",
    username: "isathomas",
    email: "isabella.thomas@gmail.com",
    church: "Christ Embassy",
    status: "Active",
  },
  {
    id: 10,
    name: "William Taylor",
    username: "willt",
    email: "william.taylor@gmail.com",
    church: "Good Shepherd",
    status: "Banned",
  },
  {
    id: 11,
    name: "Ava Moore",
    username: "ava_m",
    email: "ava.moore@gmail.com",
    church: "Sacred Heart",
    status: "Active",
  },
  {
    id: 12,
    name: "Ethan Lee",
    username: "ethanl",
    email: "ethan.lee@gmail.com",
    church: "Harvest Church",
    status: "Active",
  },
];


export const sampleChurchPosts = [
  {
    "churchName": "Grace Community Church",
    "city": "New York",
    "createdDate": "2025-08-20",
    "createdBy": "Admin",
    "status": "Active"
  },
  {
    "churchName": "Hillcrest Baptist Church",
    "city": "Los Angeles",
    "createdDate": "2025-07-15",
    "createdBy": "Pastor John",
    "status": "Banned"
  },
  {
    "churchName": "Hope Fellowship",
    "city": "Chicago",
    "createdDate": "2025-06-10",
    "createdBy": "Sarah Miller",
    "status": "Active"
  },
  {
    "churchName": "St. Peter's Church",
    "city": "Houston",
    "createdDate": "2025-05-05",
    "createdBy": "Michael Brown",
    "status": "Banned"
  },
  {
    "churchName": "Faith Bible Church",
    "city": "Dallas",
    "createdDate": "2025-04-01",
    "createdBy": "Admin",
    "status": "Active"
  },
  {
    "churchName": "Grace Community Church",
    "city": "New York",
    "createdDate": "2025-08-20",
    "createdBy": "Admin",
    "status": "Active"
  },
  {
    "churchName": "Hillcrest Baptist Church",
    "city": "Los Angeles",
    "createdDate": "2025-07-15",
    "createdBy": "Pastor John",
    "status": "Banned"
  },
  {
    "churchName": "Hope Fellowship",
    "city": "Chicago",
    "createdDate": "2025-06-10",
    "createdBy": "Sarah Miller",
    "status": "Active"
  },
  {
    "churchName": "St. Peter's Church",
    "city": "Houston",
    "createdDate": "2025-05-05",
    "createdBy": "Michael Brown",
    "status": "Banned"
  },
  {
    "churchName": "Faith Bible Church",
    "city": "Dallas",
    "createdDate": "2025-04-01",
    "createdBy": "Admin",
    "status": "Active"
  },
  {
    "churchName": "St. Peter's Church",
    "city": "Houston",
    "createdDate": "2025-05-05",
    "createdBy": "Michael Brown",
    "status": "Banned"
  },
  {
    "churchName": "Faith Bible Church",
    "city": "Dallas",
    "createdDate": "2025-04-01",
    "createdBy": "Admin",
    "status": "Active"
  },
  {
    "churchName": "Grace Community Church",
    "city": "New York",
    "createdDate": "2025-08-20",
    "createdBy": "Admin",
    "status": "Active"
  },
  {
    "churchName": "Hillcrest Baptist Church",
    "city": "Los Angeles",
    "createdDate": "2025-07-15",
    "createdBy": "Pastor John",
    "status": "Banned"
  },
  {
    "churchName": "Hope Fellowship",
    "city": "Chicago",
    "createdDate": "2025-06-10",
    "createdBy": "Sarah Miller",
    "status": "Active"
  },
  {
    "churchName": "St. Peter's Church",
    "city": "Houston",
    "createdDate": "2025-05-05",
    "createdBy": "Michael Brown",
    "status": "Banned"
  },
  {
    "churchName": "Faith Bible Church",
    "city": "Dallas",
    "createdDate": "2025-04-01",
    "createdBy": "Admin",
    "status": "Active"
  }
]

export const groupManagementData = [
  {
    "id": 1,
    "groupName": "Youth Fellowship",
    "groupMember": 25,
    "createdDate": "2024-01-15",
    "createdBy": "John Doe",
    "status": "Active"
  },
  {
    "id": 2,
    "groupName": "Choir Group",
    "groupMember": 18,
    "createdDate": "2024-02-10",
    "createdBy": "Sarah Miller",
    "status": "Banned"
  },
  {
    "id": 3,
    "groupName": "Bible Study Group",
    "groupMember": 12,
    "createdDate": "2024-03-22",
    "createdBy": "Michael Brown",
    "status": "Active"
  },
  {
    "id": 4,
    "groupName": "Sunday School Teachers",
    "groupMember": 9,
    "createdDate": "2024-04-05",
    "createdBy": "Emily Johnson",
    "status": "Active"
  },
  {
    "id": 5,
    "groupName": "Prayer Warriors",
    "groupMember": 14,
    "createdDate": "2024-05-01",
    "createdBy": "Daniel Smith",
    "status": "Banned"
  },
  {
    "id": 6,
    "groupName": "Church Volunteers",
    "groupMember": 30,
    "createdDate": "2024-05-18",
    "createdBy": "Olivia White",
    "status": "Active"
  },
  {
    "id": 7,
    "groupName": "Youth Choir",
    "groupMember": 20,
    "createdDate": "2024-06-02",
    "createdBy": "James Anderson",
    "status": "Active"
  },
  {
    "id": 8,
    "groupName": "Community Outreach",
    "groupMember": 15,
    "createdDate": "2024-06-14",
    "createdBy": "Sophia Wilson",
    "status": "Banned"
  },
  {
    "id": 9,
    "groupName": "Men’s Fellowship",
    "groupMember": 22,
    "createdDate": "2024-07-01",
    "createdBy": "Robert Garcia",
    "status": "Active"
  },
  {
    "id": 10,
    "groupName": "Women’s Fellowship",
    "groupMember": 27,
    "createdDate": "2024-07-20",
    "createdBy": "Isabella Martinez",
    "status": "Active"
  },
  {
    "id": 11,
    "groupName": "Children’s Ministry",
    "groupMember": 40,
    "createdDate": "2024-08-05",
    "createdBy": "William Thomas",
    "status": "Banned"
  },
  {
    "id": 12,
    "groupName": "Drama Team",
    "groupMember": 10,
    "createdDate": "2024-08-25",
    "createdBy": "Charlotte Taylor",
    "status": "Active"
  },
  {
    "id": 13,
    "groupName": "Media Team",
    "groupMember": 7,
    "createdDate": "2024-09-10",
    "createdBy": "David Lee",
    "status": "Active"
  },
  {
    "id": 14,
    "groupName": "Hospital Ministry",
    "groupMember": 16,
    "createdDate": "2024-09-29",
    "createdBy": "Amelia Harris",
    "status": "Banned"
  },
  {
    "id": 15,
    "groupName": "Tech Support",
    "groupMember": 11,
    "createdDate": "2024-10-11",
    "createdBy": "Alexander Clark",
    "status": "Active"
  },
  {
    "id": 16,
    "groupName": "Worship Team",
    "groupMember": 13,
    "createdDate": "2024-10-27",
    "createdBy": "Mia Lewis",
    "status": "Active"
  },
  {
    "id": 17,
    "groupName": "Event Organizers",
    "groupMember": 8,
    "createdDate": "2024-11-05",
    "createdBy": "Benjamin Hall",
    "status": "Banned"
  },
  {
    "id": 18,
    "groupName": "Food Distribution",
    "groupMember": 19,
    "createdDate": "2024-11-20",
    "createdBy": "Evelyn Young",
    "status": "Active"
  },
  {
    "id": 19,
    "groupName": "Counseling Team",
    "groupMember": 6,
    "createdDate": "2024-12-02",
    "createdBy": "Henry King",
    "status": "Active"
  },
  {
    "id": 20,
    "groupName": "Missionary Support",
    "groupMember": 21,
    "createdDate": "2024-12-18",
    "createdBy": "Ella Scott",
    "status": "Banned"
  },
  {
    "id": 21,
    "groupName": "Library Committee",
    "groupMember": 5,
    "createdDate": "2025-01-03",
    "createdBy": "Samuel Green",
    "status": "Active"
  },
  {
    "id": 22,
    "groupName": "Music Band",
    "groupMember": 17,
    "createdDate": "2025-01-14",
    "createdBy": "Grace Adams",
    "status": "Active"
  },
  {
    "id": 23,
    "groupName": "Fundraising Team",
    "groupMember": 9,
    "createdDate": "2025-01-29",
    "createdBy": "Matthew Baker",
    "status": "Banned"
  },
  {
    "id": 24,
    "groupName": "Decoration Team",
    "groupMember": 4,
    "createdDate": "2025-02-10",
    "createdBy": "Chloe Nelson",
    "status": "Active"
  },
  {
    "id": 25,
    "groupName": "Transportation Team",
    "groupMember": 6,
    "createdDate": "2025-02-22",
    "createdBy": "Joseph Carter",
    "status": "Active"
  },
  {
    "id": 26,
    "groupName": "Security Team",
    "groupMember": 12,
    "createdDate": "2025-03-03",
    "createdBy": "Victoria Perez",
    "status": "Banned"
  },
  {
    "id": 27,
    "groupName": "Greeters",
    "groupMember": 14,
    "createdDate": "2025-03-15",
    "createdBy": "Andrew Roberts",
    "status": "Active"
  },
  {
    "id": 28,
    "groupName": "Cleaning Crew",
    "groupMember": 10,
    "createdDate": "2025-03-25",
    "createdBy": "Sofia Turner",
    "status": "Active"
  },
  {
    "id": 29,
    "groupName": "Pastoral Team",
    "groupMember": 3,
    "createdDate": "2025-04-07",
    "createdBy": "Christopher Phillips",
    "status": "Banned"
  },
  {
    "id": 30,
    "groupName": "Church Board",
    "groupMember": 7,
    "createdDate": "2025-04-20",
    "createdBy": "Abigail Evans",
    "status": "Active"
  }
]

export const samplePosts: Post[] = [
  { id: 1, userName: "Sarah Miller", date: "2025-08-01", post: "Church event update", postUs: "Hillcrest Kent", status: "Approved" },
  { id: 2, userName: "James Smith", date: "2025-08-02", post: "Sunday service announcement", postUs: "New Hope Church", status: "Blocked" },
  { id: 3, userName: "Emily Johnson", date: "2025-08-03", post: "Youth group activity", postUs: "Grace Fellowship", status: "Blocked" },
  { id: 4, userName: "Michael Brown", date: "2025-08-04", post: "Fundraising program", postUs: "Faith Community", status: "Blocked" },
  { id: 5, userName: "Olivia Wilson", date: "2025-08-05", post: "Volunteer meetup", postUs: "Unity Church", status: "Approved" },
  { id: 6, userName: "William Davis", date: "2025-08-06", post: "Bible study session", postUs: "Living Word Church", status: "Blocked" },
  { id: 7, userName: "Sophia Martinez", date: "2025-08-07", post: "Charity drive", postUs: "St. Peter Church", status: "Blocked" },
  { id: 8, userName: "Daniel Garcia", date: "2025-08-08", post: "Music ministry update", postUs: "Christ Community", status: "Approved" },
  { id: 9, userName: "Isabella Rodriguez", date: "2025-08-09", post: "Children’s camp", postUs: "Holy Spirit Church", status: "Blocked" },
  { id: 10, userName: "Ethan Martinez", date: "2025-08-10", post: "Prayer meeting", postUs: "Hope Church", status: "Blocked" },
  { id: 11, userName: "Mia Hernandez", date: "2025-08-11", post: "Community outreach", postUs: "Grace Chapel", status: "Approved" },
  { id: 12, userName: "Alexander Lopez", date: "2025-08-12", post: "Leadership training", postUs: "Faith Mission", status: "Blocked" },
  { id: 13, userName: "Charlotte Gonzalez", date: "2025-08-13", post: "Special guest speaker", postUs: "Christ Redeemer", status: "Blocked" },
  { id: 14, userName: "Benjamin Clark", date: "2025-08-14", post: "Gospel concert", postUs: "New Life Church", status: "Approved" },
  { id: 15, userName: "Amelia Lewis", date: "2025-08-15", post: "Marriage seminar", postUs: "St. Mary’s Church", status: "Blocked" },
  { id: 16, userName: "Lucas Walker", date: "2025-08-16", post: "Youth leadership camp", postUs: "Word of Faith", status: "Blocked" },
  { id: 17, userName: "Harper Hall", date: "2025-08-17", post: "Healing service", postUs: "Living Faith", status: "Blocked" },
  { id: 18, userName: "Henry Allen", date: "2025-08-18", post: "Christmas program", postUs: "St. John’s Church", status: "Approved" },
  { id: 19, userName: "Ella Young", date: "2025-08-19", post: "Mission trip", postUs: "Victory Chapel", status: "Blocked" },
  { id: 20, userName: "Jack King", date: "2025-08-20", post: "Easter service", postUs: "Holy Cross", status: "Blocked" },
  { id: 21, userName: "Avery Wright", date: "2025-08-21", post: "Family retreat", postUs: "Blessed Hope Church", status: "Blocked" },
  { id: 22, userName: "Sebastian Scott", date: "2025-08-22", post: "Gospel outreach", postUs: "Faith Revival", status: "Approved" },
  { id: 23, userName: "Grace Green", date: "2025-08-23", post: "Men’s fellowship", postUs: "Glory Church", status: "Blocked" },
  { id: 24, userName: "David Adams", date: "2025-08-24", post: "Women’s fellowship", postUs: "Peace Chapel", status: "Blocked" },
  { id: 25, userName: "Scarlett Baker", date: "2025-08-25", post: "Baptism ceremony", postUs: "Trinity Church", status: "Blocked" },
  { id: 26, userName: "Matthew Nelson", date: "2025-08-26", post: "Choir practice", postUs: "Redeemer Church", status: "Approved" },
  { id: 27, userName: "Chloe Carter", date: "2025-08-27", post: "Community dinner", postUs: "Grace Mission", status: "Blocked" },
  { id: 28, userName: "Samuel Mitchell", date: "2025-08-28", post: "Leadership summit", postUs: "New Covenant", status: "Blocked" },
  { id: 29, userName: "Lily Perez", date: "2025-08-29", post: "Pastor’s anniversary", postUs: "House of Prayer", status: "Blocked" },
  { id: 30, userName: "Daniel Roberts", date: "2025-08-30", post: "Church picnic", postUs: "Grace Family Church", status: "Approved" },
]

