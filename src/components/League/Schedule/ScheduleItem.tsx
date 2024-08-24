import Badge from '../../common/Badge';
import { TeamScheme } from '../../../types/TeamScheme';
import { BASEBALL_TEAMS } from '../../../constants/baseballTeams';

interface Props {
  time: string;
  home_team: number;
  away_team: number;
  stadium: string;
}

const ScheduleItem = ({ time, home_team, away_team, stadium }: Props) => {
  return (
    <div className="flex items-center justify-center gap-10 border-b py-6">
      <div>
        <Badge scheme={BASEBALL_TEAMS[home_team - 1].value as TeamScheme} />
      </div>
      <div className="text-center">
        <p className="font-bold">{time.slice(0, 5)}</p>
        <p>{stadium}</p>
      </div>
      <div>
        <Badge scheme={BASEBALL_TEAMS[away_team - 1].value as TeamScheme} />
      </div>
    </div>
  );
};
export default ScheduleItem;
