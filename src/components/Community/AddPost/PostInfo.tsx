import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import PostInfoSection from './PostInfoSection';
import PostPickDate from './PostPickDate';
import PostPickMatch from './PostPickMatch';
import { CommunityData, postCommunity } from '../../../apis/community';
import InputText from '../../common/InputText';
import Button from '../../common/Button';
import dayjs from 'dayjs';
import useSchedule from '../../../hooks/useSchedule';

const PostInfo = () => {
  const { handleSubmit, register } = useForm<CommunityData>();
  const [date, setDate] = useState<string>(dayjs().format('YYYYMMDD'));
  const [match, setMatch] = useState<number | null>(null);
  const { data: scheduleData } = useSchedule(date);

  useEffect(() => {
    setMatch(null);
  }, [date, scheduleData]);

  const onSubmit: SubmitHandler<CommunityData> = async (data) => {
    if (!match) {
      return;
    }
    try {
      const result = await postCommunity({
        scheduleId: match,
        title: data.title,
        content: data.content,
      });
    } catch (error) {
      console.error('Error adding document: ', error);
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
        <PostPickDate onSelectDate={setDate} />
      </PostInfoSection>

      <PostInfoSection label="홈 vs 원정" name="match">
        <PostPickMatch
          onSelectMatch={setMatch}
          {...register('scheduleId')}
          scheduleData={scheduleData || []}
        />
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
          게시글 등록
        </Button>
      </fieldset>
    </form>
  );
};

export default PostInfo;
