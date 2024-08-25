export interface Comment {
  id: string;
  nickname: string;
  picUrl: string;
  content: string;
  createdAt: string;
}
export interface PostComment {
  userId?: string;
  archiveId?: string;
  createdAt?: string;
  content?: string;
  commentId?: string;
}
