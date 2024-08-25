import { useQuery } from '@tanstack/react-query';
import { getSchedule } from '../apis/league';

interface ScheduleItem {
  away_team_id: number;
  home_team_id: number;
  match_date: string;
  stadium: string;
  time: string;
}


const useSchedule = (date: string) => {
  return useQuery<ScheduleItem[], Error>({
    queryKey: ['schedule', date],
    queryFn: () => getSchedule(date),
  });
};

export default useSchedule;
