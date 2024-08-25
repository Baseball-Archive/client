import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { editArchive } from '../../../apis/archive';
import { MatchData } from '../../../types/MatchData';
import { Weather } from '../../../types/Weather';
import { showToast } from '../../common/Toast';
import InfoSection from '../AddArchive/InfoSection';
import MatchReview from '../AddArchive/MatchReview';
import PickDate from '../AddArchive/PickDate';
import PickMatch from '../AddArchive/PickMatch';
import PickScore from '../AddArchive/PickScore';
import PickWeather from '../AddArchive/PickWeather';
import PublicPrivateToggle from '../AddArchive/PublicPrivateToggle';
import EditPhotoButton from './EditPhotoButton';
import type { Archive } from '../../../types/Archive';

const ArchiveInfo = () => {
  const { id: archiveId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [matchData, setMatchData] = useState<MatchData | null>(null);
  const cachedArchive = queryClient.getQueryData<Archive[]>(['Archives']);
  const { register, handleSubmit, setValue, watch } = useForm<Archive>({
    defaultValues: {
      title: '',
      weather: null,
      homeTeamScore: 0,
      awayTeamScore: 0,
      picUrl: '',
      content: '',
      isPublic: null,
      matchDate: new Date().toISOString().split('T')[0],
      scheduleId: 0,
    },
  });

  useEffect(() => {
    if (cachedArchive) {
      const archive = cachedArchive.find(
        (item: Archive) => item.id === Number(archiveId),
      );
      console.log(archive);

      if (archive) {
        setValue('title', archive.title);
        setValue('weather', archive.weather);
        setValue('homeTeamScore', archive.homeTeamScore);
        setValue('awayTeamScore', archive.awayTeamScore);
        setValue('picUrl', archive.picUrl);
        setValue('content', archive.content);
        setValue('isPublic', archive.isPublic);
        setValue('matchDate', archive.matchDate);
        setValue('scheduleId', archive.scheduleId);
      }
    }
  }, [cachedArchive]);

  const handleMatchData = (match: MatchData | null) => {
    setMatchData(match);
  };
  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue('content', e.target.value);
  };
  const handlePicUrl = (picUrl: string) => {
    setValue('picUrl', picUrl);
  };
  const handleDate = (date: string) => {
    setValue('matchDate', date);
  };
  const handleWeather = (weather: Weather | null) => {
    setValue('weather', weather);
  };
  const handleOptionClick = (option: boolean | null) => {
    setValue('isPublic', option);
  };
  const handleHomeScore = (homeTeamScore: number) => {
    setValue('homeTeamScore', homeTeamScore);
  };
  const handleAwayScore = (awayTeamScore: number) => {
    setValue('awayTeamScore', awayTeamScore);
  };
  const handleScheduleId = (scheduleId: number) => {
    setValue('scheduleId', scheduleId);
  };

  const onSubmit: SubmitHandler<Archive> = async (archiveData) => {
    try {
      await editArchive({
        id: Number(archiveId),
        archiveData: {
          schedule_id: archiveData.scheduleId,
          weather: archiveData.weather,
          home_team_score: archiveData.homeTeamScore,
          away_team_score: archiveData.awayTeamScore,
          title: archiveData.title,
          content: archiveData.content,
          pic_url: archiveData.picUrl,
          is_public: archiveData.isPublic,
        },
      });
      showToast('기록이 성공적으로 수정되었습니다.', 'success');
      navigate('/');
    } catch (error) {
      if (error instanceof Error) {
        showToast('모든 항목을 입력해주세요', 'error');
      } else {
        showToast('에러발생:' + 'An unknown error occurred.', 'error');
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="scrollbar-hide container pt-6"
    >
      <InfoSection label="제목 ">
        <input
          className="w-full px-4 outline-none"
          placeholder="제목을 입력하세요."
          {...register('title')}
        />
      </InfoSection>
      <div className="flex space-x-2">
        <InfoSection half={true} label="직관한 날짜">
          <PickDate
            selectedDate={watch('matchDate') as string}
            handleDate={handleDate}
          />
        </InfoSection>
        <InfoSection half={true} label="날씨">
          <PickWeather
            selectedWeather={watch('weather')}
            handleWeather={handleWeather}
          />
        </InfoSection>
      </div>
      <InfoSection label="경기 선택">
        <PickMatch
          selectedDate={watch('matchDate') as string}
          selectedMatch={matchData}
          handleMatchData={handleMatchData}
          handleScheduleId={handleScheduleId}
        />
      </InfoSection>
      <div className="flex flex-col">
        <label className="mb-1 text-base">경기 결과</label>
      </div>
      <PickScore
        homeScore={watch('homeTeamScore')}
        awayScore={watch('awayTeamScore')}
        handleHomeScore={handleHomeScore}
        handleAwayScore={handleAwayScore}
        selectedMatch={matchData}
      />
      <MatchReview
        content={watch('content')}
        onChangeReview={onChangeContent}
      />
      <EditPhotoButton picUrl={watch('picUrl')} handlePicUrl={handlePicUrl} />
      <div className="mt-4 flex flex-col">
        <label className="mb-2 text-base">공개 설정</label>
        <PublicPrivateToggle
          isPublic={watch('isPublic')}
          handleOptionClick={handleOptionClick}
        />
        <button
          type="submit"
          className="mt-6 h-20 rounded-[10px] bg-black text-2xl font-medium text-white"
        >
          기록하기
        </button>
      </div>
    </form>
  );
};

export default ArchiveInfo;
