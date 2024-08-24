import { getSchedule } from '../apis/league';
import { useQuery } from '@tanstack/react-query';
import { ScheduleItem } from '../types/MatchData';

const useSchedule = (date: string) => {
  return useQuery<ScheduleItem[], Error>({
    queryKey: ['schedule', date],
    queryFn: () => getSchedule(date),
  });
};

export default useSchedule;
