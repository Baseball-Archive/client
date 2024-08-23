import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import dayjs from 'dayjs';
import DateNavigator from '../../components/League/Schedule/DateNavigator';
import ScheduleItem from '../../components/League/Schedule/ScheduleItem';

const dummyDataList = [
  {
    match_date: '202408151800',
    home_team: 'doosan',
    away_team: 'lg',
    stadium: '잠실',
  },
  {
    match_date: '202408151800',
    home_team: 'lotte',
    away_team: 'kt',
    stadium: '사직',
  },
  {
    match_date: '202408151800',
    home_team: 'kia',
    away_team: 'samsung',
    stadium: '광주',
  },
];

const Schedule = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [date, setDate] = useState('');

  useEffect(() => {
    const queryDate = searchParams.get('date');
    const displayDate = queryDate
      ? dayjs(queryDate).format('YYYY.MM.DD')
      : dayjs().format('YYYY.MM.DD');
    setDate(displayDate);
  }, [searchParams]);

  const handlePreviousDate = () => {
    const newSearchParms = new URLSearchParams(searchParams);

    const previousDate = dayjs(date).subtract(1, 'day').format('YYYYMMDD');

    newSearchParms.set('date', previousDate);
    setSearchParams(newSearchParms);
  };

  const handleNextDate = () => {
    const newSearchParms = new URLSearchParams(searchParams);

    const NextDate = dayjs(date).add(1, 'day').format('YYYYMMDD');

    newSearchParms.set('date', NextDate);
    setSearchParams(newSearchParms);
  };

  return (
    <>
      <DateNavigator
        date={date}
        onPreviousDate={handlePreviousDate}
        onNextDate={handleNextDate}
      />
      {dummyDataList.map((item, index) => (
        <ScheduleItem
          key={index}
          match_date={item.match_date}
          home_team={item.home_team}
          away_team={item.away_team}
          stadium={item.stadium}
        />
      ))}
    </>
  );
};
export default Schedule;
