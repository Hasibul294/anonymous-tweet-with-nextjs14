import { Tweet } from "@/model/user";

export interface ApiResponse {
  success: boolean;
  message: string;
  isAcceptingMessage?: boolean;
  tweets?: Array<Tweet>;
}
