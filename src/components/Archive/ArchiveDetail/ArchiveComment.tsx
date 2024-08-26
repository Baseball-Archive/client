import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
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
  const { id, nickname, picUrl, createdAt, content } = comment;
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm<{
    content: string;
  }>();
  const [isEdit, setIsEdit] = useState(false);

  const { mutate: editCommentMutation } = useMutation({
    mutationFn: editArchiveComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ArchiveCommnet'] });
    },
    onError: () => {
      showToast('댓글 수정 실패', 'error');
    },
  });

  const { mutate: deleteCommentMutation } = useMutation({
    mutationFn: deleteArchiveComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ArchiveCommnet'] });
    },
    onError: () => {
      showToast('댓글 삭제 실패', 'error');
    },
  });

  const onSubmit = (data: { content: string }) => {
    if (confirm('정말로 이 댓글을 수정하시겠습니까?')) {
      editCommentMutation({
        content: data.content,
        commentId: id,
        archiveId: archiveId,
      });
      setIsEdit(false);
      reset();
    }
  };
  return (
    <div className="flex justify-center overflow-hidden bg-white pt-4">
      {isEdit ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full overflow-hidden rounded-md border"
        >
          <input
            type="text"
            {...register('content', { required: true })}
            placeholder="댓글을 입력하세요"
            className="flex-grow border-none pl-4 focus:outline-none"
          />
          <button type="button" onClick={() => setIsEdit(false)}>
            취소
          </button>
          <button
            type="submit"
            className="border-none px-4 py-2 font-bold text-black focus:outline-none"
            style={{ minWidth: '60px' }}
          >
            수정
          </button>
        </form>
      ) : (
        <div className="flex w-full">
          <div className="pr-2 pt-1">
            <div className="w-12 overflow-hidden rounded-full">
              <img src={picUrl || DEFAULT_IMAGE} alt="commentUser" />
            </div>
          </div>
          <div>
            <div className="text-sm font-bold">{nickname}</div>

            <div className="pb-1 pt-1 text-sm leading-none">{content}</div>
            <div className="flex flex-row items-center space-x-[4px] text-[12px] text-gray-400">
              <div className="">{formatTimeDifference(createdAt)}</div>
              <div className="relative top-[-1px] text-[0.5rem]">•</div>
              <button type="button" onClick={() => setIsEdit(true)}>
                수정
              </button>
              <div className="relative top-[-1px] text-[0.5rem]">•</div>
              <button
                type="button"
                onClick={() => {
                  if (confirm('정말로 이 댓글을 삭제하시겠습니까?')) {
                    deleteCommentMutation({
                      archiveId: archiveId,
                      commentId: id,
                    });
                  }
                }}
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArchiveComment;
