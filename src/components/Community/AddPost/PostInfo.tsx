import { useMutation, useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';
import React, { startTransition } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  CommunityData,
  postCommunity,
  updateCommunity,
} from '../../../apis/community';
import useSchedule from '../../../hooks/useSchedule';
import { getTeamLabelByKey } from '../../../utils/getTeamValueByKey';
import Button from '../../common/Button';
import InputText from '../../common/InputText';
import { Post } from '../PostDetail';
import PostInfoSection from './PostInfoSection';
import PostPickDate from './PostPickDate';

interface Props {
  communityDetail?: Post;
}

const PostInfo = ({ communityDetail }: Props) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { handleSubmit, register, control, setValue, watch } =
    useForm<CommunityData>({
      defaultValues: {
        title: communityDetail?.title || '',
        content: communityDetail?.content || '',
        date: communityDetail?.match_date || dayjs().format('YYYY-MM-DD'),
        // scheduleId: communityDetail?.scheduleId || '',
      },
    });

  const date = watch('date');

  const { data: scheduleData } = useSchedule(dayjs(date).format('YYYYMMDD'));

  const mutation = useMutation({
    mutationFn: async (data: CommunityData) => {
      if (communityDetail) {
        return await updateCommunity(communityDetail.id, {
          scheduleId: data.scheduleId,
          title: data.title,
          content: data.content,
        });
      } else {
        return await postCommunity({
          scheduleId: data.scheduleId,
          title: data.title,
          content: data.content,
        });
      }
    },
    onSuccess: () => {
      startTransition(() => {
        queryClient.invalidateQueries({ queryKey: ['community'] });
        navigate('/posts');
      });
    },
    onError: (error) => {
      console.error('Error:', error);
    },
  });

  const onSubmit: SubmitHandler<CommunityData> = async (data) => {
    const action = communityDetail ? '수정' : '등록';
    if (window.confirm(`게시글을 ${action} 하시겠습니까?`)) {
      mutation.mutate(data);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <PostInfoSection label="제목" name="title">
        <InputText
          id="title"
          inputType="text"
          inputSize="large"
          scheme="primary"
          placeholder="제목 입력해주세요."
          {...register('title', { required: true })}
        />
      </PostInfoSection>

      <PostInfoSection label="경기 날짜" name="date">
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <PostPickDate
              {...field}
              onSelectDate={(date) => setValue('date', date)}
            />
          )}
        />
      </PostInfoSection>

      <PostInfoSection label="경기 선택" name="scheduleId">
        <select
          id="scheduleId"
          className="h-[40px] rounded border border-[#A9A9A9] p-2"
          {...register('scheduleId', { required: true })}
        >
          <option value="">
            {scheduleData?.length
              ? '경기를 선택하세요'
              : '해당일에 경기가 없습니다.'}
          </option>
          {scheduleData?.map((game) => (
            <option key={game.id} value={game.id}>
              {`[${game.stadium}] ${getTeamLabelByKey(game.home_team_id)} vs ${getTeamLabelByKey(game.away_team_id)}`}
            </option>
          ))}
        </select>
      </PostInfoSection>

      <PostInfoSection label="내용" name="content">
        <textarea
          id="content"
          className="h-[200px] rounded border border-[#A9A9A9] p-3"
          placeholder="내용을 입력하세요."
          {...register('content', { required: true })}
        />
      </PostInfoSection>

      <fieldset className="py-10 text-center">
        <Button type="submit" size="medium" scheme="primary">
          {`게시글 ${communityDetail ? '수정' : '등록'}`}
        </Button>
      </fieldset>
    </form>
  );
};

export default PostInfo;
