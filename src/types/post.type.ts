export type Post = {
  id: number
  userName: string
  date: string
  post: string
  postUs: string
  status: "Approved" | "Blocked"
}