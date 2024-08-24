import { useSearchParams } from 'react-router-dom';
import dayjs from 'dayjs';

import DateNavigator from '../../components/League/Schedule/DateNavigator';
import ScheduleItem from '../../components/League/Schedule/ScheduleItem';

import useSchedule from '../../hooks/useSchedule';
import useDateNavigation from '../../hooks/useDateNavigation';
import Loading from '../../components/common/Loading';

const Schedule = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryDate = searchParams.get('date') || dayjs().format('YYYYMMDD');

  const { date, handlePreviousDate, handleNextDate } = useDateNavigation(
    queryDate,
    setSearchParams,
    searchParams,
  );
  const { data: scheduleData, isLoading, error } = useSchedule(date);

  if (isLoading) return <Loading />;
  if (error) return <div>데이터를 가져오는 데 실패했습니다.</div>;

  return (
    <>
      <DateNavigator
        date={dayjs(date).format('YYYY-MM-DD (ddd)')}
        onPreviousDate={handlePreviousDate}
        onNextDate={handleNextDate}
      />
      {scheduleData && scheduleData.length > 0 ? (
        scheduleData.map((item, index) => (
          <ScheduleItem
            key={index}
            time={item.time}
            home_team={item.home_team_id}
            away_team={item.away_team_id}
            stadium={item.stadium}
          />
        ))
      ) : (
        <div className="pt-20 text-center">
          <p>아쉽게도 이 날에는 경기가 없습니다.</p>
          <p>이전이나 다음 날짜를 확인해보세요!</p>
        </div>
      )}
    </>
  );
};
export default Schedule;
