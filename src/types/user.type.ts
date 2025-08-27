export type UserStatus = "Active" | "Banned"




export interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
}
export interface User {
  id: number
  name: string
  username: string
  email: string
  church: string
  status: UserStatus
}
