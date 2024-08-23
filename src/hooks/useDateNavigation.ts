import { useState } from 'react';
import dayjs from 'dayjs';

const useDateNavigation = (
  initialDate: string,
  setSearchParams: (params: URLSearchParams) => void,
  searchParams: URLSearchParams,
) => {
  const [date, setDate] = useState<string>(initialDate);

  const handlePreviousDate = () => {
    const newSearchParms = new URLSearchParams(searchParams);

    const dateNumber = dayjs(date).day() === 2 ? 2 : 1;
    const previousDate = dayjs(date)
      .subtract(dateNumber, 'day')
      .format('YYYYMMDD');

    newSearchParms.set('date', previousDate);
    setSearchParams(newSearchParms);
    setDate(previousDate);
  };

  const handleNextDate = () => {
    const newSearchParms = new URLSearchParams(searchParams);

    const dateNumber = dayjs(date).day() === 0 ? 2 : 1;
    const nextDate = dayjs(date).add(dateNumber, 'day').format('YYYYMMDD');

    newSearchParms.set('date', nextDate);
    setSearchParams(newSearchParms);
    setDate(nextDate);
  };

  return { date, handlePreviousDate, handleNextDate };
};

export default useDateNavigation;
