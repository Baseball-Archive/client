import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addCommunityComment } from '../../../apis/comment';
import { showToast } from '../../common/toast';

type FormValues = {
  comment: string;
};

const AddComment = ({ boardId }: { boardId: string }) => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newComment: string) => {
      return await addCommunityComment({ boardId, content: newComment });
    },
    onSuccess: (data) => {
      showToast(data.message, 'success');
      queryClient.invalidateQueries({ queryKey: ['communityComment'] });
      reset();
    },
    onError: (error) => {
      showToast(error.message, 'error');
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (data.comment.trim()) {
      mutation.mutate(data.comment);
    }
  };

  return (
    <div className="flex justify-center bg-white pt-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full overflow-hidden rounded-md border"
      >
        <input
          type="text"
          {...register('comment', { required: 'Comment is required' })}
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

export default AddComment;
