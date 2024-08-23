import { useState, useEffect } from 'react';
import { getSchedule } from '../apis/league';

interface ScheduleItem {
  away_team_id: number;
  home_team_id: number;
  match_date: string;
  stadium: string;
  time: string;
}

const useSchedule = (date: string) => {
  const [scheduleData, setScheduleData] = useState<ScheduleItem[]>([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const result = await getSchedule(date);
        setScheduleData(result);
      } catch (err) {
        setScheduleData([]);
        console.error(err);
      }
    };

    fetchSchedule();
  }, [date]);

  return { scheduleData };
};

export default useSchedule;
