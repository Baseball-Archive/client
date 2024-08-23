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
  const [searchParams] = useSearchParams();
  const [date, setDate] = useState('');
  const today = dayjs().format('YYYY.MM.DD');

  useEffect(() => {
    if (searchParams.size === 0) {
      setDate(today);
    } else {
      const queryDate = dayjs(searchParams.get('date')).format('YYYY.MM.DD');
      setDate(queryDate);
    }
  }, [searchParams, today]);

  return (
    <>
      <DateNavigator date={date} />
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
