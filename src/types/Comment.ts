export interface Comment {
  id: string;
  userNickname: string;
  userPicUrl: string;
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
