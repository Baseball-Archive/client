import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  deleteArchiveComment,
  editArchiveComment,
} from '../../../apis/comment';
import { DEFAULT_IMAGE } from '../../../constants/image';
import { Comment as CommentType } from '../../../types/Comment';
import formatTimeDifference from '../../../utils/formatTimeDifference';
import { showToast } from '../../common/Toast';
interface Props {
  comment: CommentType;
}

const ArchiveComment = ({ comment }: Props) => {
  const { id: archiveId } = useParams();
  const { id, userNickname, userPicUrl, createdAt, content } = comment;
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const { mutate: editCommentMutation } = useMutation({
    mutationFn: editArchiveComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ArchiveCommnet'] });
      setIsEditing(false);
    },
    onError: () => {
      showToast('댓글 수정 실패', 'error');
    },
  });

  const handleEdit = () => {
    if (isEditing) {
      editCommentMutation({ archiveId, commentId: id, content: editedContent });
    } else {
      setIsEditing(true); // 수정 모드로 전환
    }
  };

  const { mutate: deleteCommentMutation } = useMutation({
    mutationFn: deleteArchiveComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ArchiveCommnet'] });
    },
    onError: () => {
      showToast('댓글 삭제 실패', 'error');
    },
  });

  return (
    <div className="flex justify-center overflow-hidden bg-white pt-4">
      <div className="flex w-full">
        <div className="pr-2 pt-1">
          <div
            className="overflow-hidden rounded-full"
            style={{ minWidth: '32px', maxWidth: '32px' }}
          >
            <img src={userPicUrl || DEFAULT_IMAGE} alt="commentUser" />
          </div>
        </div>
        <div>
          <div className="text-sm font-bold">{userNickname}</div>
          {isEditing ? (
            <textarea
              className="w-full rounded border p-1 text-sm"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
          ) : (
            <div className="pb-1 pt-1 text-sm leading-none">{content}</div>
          )}
          <div className="flex flex-row items-center space-x-[4px] text-[12px] text-gray-400">
            <div className="">{formatTimeDifference(createdAt)}</div>
            <div className="relative top-[-1px] text-[0.5rem]">•</div>
            <button type="button" onClick={handleEdit}>
              {isEditing ? '저장' : '수정'}
            </button>
            <div className="relative top-[-1px] text-[0.5rem]">•</div>
            <button
              type="button"
              onClick={() =>
                deleteCommentMutation({ archiveId: archiveId, commentId: id })
              }
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchiveComment;
