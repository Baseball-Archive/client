export interface Comment {
  userId?: number;
  commentId?: number;
  content: string;
  updatedAt?: string;
  picUrl?: string;
  nickname?: string;
}
export interface AddComment {
  archive_id: number;
  user_id: number;
  content: string;
  created_at: string;
}
