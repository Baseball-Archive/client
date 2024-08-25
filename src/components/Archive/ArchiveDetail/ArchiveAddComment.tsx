import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { addArchiveComment } from '../../../apis/comment';

const ArchiveAddComment = () => {
  const queryClient = useQueryClient();
  const { id: archiveId } = useParams<{ id: string }>();
  const { register, handleSubmit, reset } = useForm<{
    content: string;
  }>();

  const { mutate: addArchiveCommentMutation } = useMutation({
    mutationFn: addArchiveComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ArchiveCommnet'] });
      reset();
    },
    onError: () => {
      alert('댓글 추가 실패');
    },
  });

  const onSubmit = (data: { content: string }) => {
    addArchiveCommentMutation({
      archiveId: archiveId,
      content: data.content,
      userId: localStorage.getItem('userId') as string,
      createdAt: new Date().toISOString(),
    });
  };
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
