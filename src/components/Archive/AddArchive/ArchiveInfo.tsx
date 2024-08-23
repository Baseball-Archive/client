import { useForm, SubmitHandler } from 'react-hook-form';
import PickWeather from './PickWeather';
import InfoSection from './InfoSection';
import PickDate from './PickDate';
import MatchReview from './MatchReview';
import PickMatch from './PickMatch';
import UploadPhotoButton from './UploadPhotoButton';
import PickScore from './PickScore';
import { Weather } from '../../../types/Weather';
import { MatchData } from '../../../types/MatchData';
import PublicPrivateToggle from './PublicPrivateToggle';
import { postArchive } from '../../../apis/archive';
import { useNavigate } from 'react-router-dom';

interface Archive {
  title: string;
  scheduleId: number;
  homeTeamId?: number;
  awayTeamId?: number;
  matchDate: string;
  weather: Weather | null;
  homeTeamScore: number;
  awayTeamScore: number;
  content: string;
  picUrl: string;
  isPublic: boolean | null;
  matchData: MatchData | null;
}

const ArchiveInfo = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, watch } = useForm<Archive>({
    defaultValues: {
      title: '',
      weather: null,
      homeTeamScore: 0,
      awayTeamScore: 0,
      picUrl: '',
      content: '',
      isPublic: null,
      matchData: null,
      matchDate: new Date().toISOString().split('T')[0],
    },
  });

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue('content', e.target.value);
  };
  const handleDate = (date: string) => {
    setValue('matchDate', date);
  };
  const handleMatchData = (match: MatchData | null) => {
    setValue('matchData', match);
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

  const onSubmit: SubmitHandler<Archive> = async (archiveData) => {
    try {
      await postArchive({
        schedule_id: archiveData.matchData?.scheduleId ?? 0,
        weather: archiveData.weather,
        home_team_score: archiveData.homeTeamScore,
        away_team_score: archiveData.awayTeamScore,
        title: archiveData.title,
        content: archiveData.content,
        pic_url: archiveData.picUrl,
        is_public: archiveData.isPublic,
      });
      alert('Archive submitted successfully!');
      navigate('/');
    } catch (error) {
      if (error instanceof Error) {
        alert('Error submitting archive: ' + error.message);
      } else {
        alert('An unknown error occurred.');
      }
      //TODO: toast나 모달 추가
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container pt-6 scrollbar-hide"
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
          <PickDate selectedDate={watch('matchDate')} handleDate={handleDate} />
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
          selectedDate={watch('matchDate')}
          selectedMatch={watch('matchData')}
          handleMatchData={handleMatchData}
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
        selectedMatch={watch('matchData')}
      />
      <MatchReview
        content={watch('content')}
        onChangeReview={onChangeContent}
      />
      <UploadPhotoButton />
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
