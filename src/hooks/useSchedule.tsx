import { useQuery } from '@tanstack/react-query';
import { getSchedule } from '../apis/league';

interface ScheduleItem {
  id: number;
  away_team_id: number;
  home_team_id: number;
  match_date: string;
  stadium: string;
  time: string;
}

const useSchedule = (date: string) => {
  return useQuery<ScheduleItem[], Error>({
    queryKey: ['schedule', date],
    queryFn: async () => {
      try {
        const response = await getSchedule(date);
        return response;
      } catch (error) {
        if (error instanceof Error && error.message.includes('404')) {
          return [];
        }
        throw error;
      }
    },
    initialData: [],
  });
};

export default useSchedule;
