import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { addArchiveComment } from '../../../apis/archive';

const ArchiveAddComment = () => {
  const queryClient = useQueryClient();
  const { id: archiveId } = useParams<{ id: string }>();
  const { register, handleSubmit, reset } = useForm<{
    content: string;
  }>();

  const { mutate: addArchiveCommentMutation } = useMutation({
    mutationFn: addArchiveComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['archiveWithComments'] });
      reset();
    },
    onError: () => {
      alert('댓글 추가 실패');
    },
  });

  const onSubmit = (data: { content: string }) => {
    const user_id = 1;
    addArchiveCommentMutation({
      archive_id: Number(archiveId),
      content: data.content,
      user_id,
      created_at: new Date().toISOString(),
    });
  };
  // TODO : 로그인 할 때 전역 상태로 user 정보 받아서 처리 , api 확정되면 수정(userid,createdat 필요한지)

  return (
    <div className="flex justify-center bg-white pt-4">
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
        <button
          type="submit"
          className="border-none px-4 py-2 font-bold text-black focus:outline-none"
          style={{ minWidth: '60px' }}
        >
          등록
        </button>
      </form>
    </div>
  );
};
export default ArchiveAddComment;
