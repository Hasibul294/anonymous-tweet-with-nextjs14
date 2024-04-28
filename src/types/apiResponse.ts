import { Tweet } from "@/model/user";

export interface ApiResponse {
  success: boolean;
  message: string;
  isAcceptingMessage?: boolean;
  tweet?: Array<Tweet>;
}
