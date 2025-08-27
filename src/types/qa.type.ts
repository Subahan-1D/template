export interface Question {
  id: number
  userName: string;
  date: string;    
  question: string;
  category: string;
  postUs: string;
  status : "Approved" | "Blocked";
}