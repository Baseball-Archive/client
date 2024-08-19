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

interface ArchiveData {
  title: string;
  selectedDate: Date | null;
  selectedWeather: Weather | null;
  selectedMatch: MatchData | null;
  result: { homeScore: number; awayScore: number };
  review: string;
  isPublic: boolean | null;
}

const ArchiveInfo = () => {
  const { register, handleSubmit, setValue, watch } = useForm<ArchiveData>({
    defaultValues: {
      title: '',
      selectedDate: new Date(),
      selectedWeather: null,
      selectedMatch: null,
      result: { homeScore: 0, awayScore: 0 },
      review: '',
      isPublic: null,
    },
  });

  const onChangeReview = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue('review', e.target.value);
  };
  const handleDate = (date: Date | null) => {
    setValue('selectedDate', date);
  };
  const handleWeather = (weather: Weather) => {
    setValue('selectedWeather', weather);
  };
  const handleMatch = (match: MatchData | null) => {
    setValue('selectedMatch', match);
  };
  const handleOptionClick = (option: boolean | null) => {
    setValue('isPublic', option);
  };
  const handleHomeScore = (score: number) => {
    setValue('result', { ...watch('result'), homeScore: score });
  };
  const handleAwayScore = (score: number) => {
    setValue('result', { ...watch('result'), awayScore: score });
  };

  const onSubmit: SubmitHandler<ArchiveData> = (archiveData) => {
    console.log(archiveData);
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
          <PickDate
            selectedDate={watch('selectedDate')}
            handleDate={handleDate}
          />
        </InfoSection>
        <InfoSection half={true} label="날씨">
          <PickWeather
            selectedWeather={watch('selectedWeather')}
            handleWeather={handleWeather}
          />
        </InfoSection>
      </div>
      <InfoSection label="경기 선택">
        <PickMatch
          selectedMatch={watch('selectedMatch')}
          handleMatch={handleMatch}
        />
      </InfoSection>
      <div className="flex flex-col">
        <label className="mb-1 text-base">경기 결과</label>
      </div>
      <PickScore
        homeScore={watch('result').homeScore}
        awayScore={watch('result').awayScore}
        handleHomeScore={handleHomeScore}
        handleAwayScore={handleAwayScore}
        selectedMatch={watch('selectedMatch')}
      />
      <MatchReview review={watch('review')} onChangeReview={onChangeReview} />
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
