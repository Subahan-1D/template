export type UserStatus = "Active" | "Banned"

export interface User {
  id: number
  name: string
  username: string
  email: string
  church: string
  status: UserStatus
}
