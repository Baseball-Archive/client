import dayjs from "dayjs";
import Badge from "../../common/Badge";
import { TeamScheme } from "../../../types/TeamScheme";

interface Props {
  match_date: string;
  home_team: string;
  away_team: string;
  stadium: string;
}

const ScheduleItem = ({ match_date, home_team, away_team, stadium }: Props) => {
  return (
    <div className="flex items-center justify-center gap-10 border-b py-6">
      <div>
        <Badge scheme={home_team as TeamScheme} />
      </div>
      <div className="text-center">
        <p className="font-bold">{dayjs(match_date).format("HH:mm")}</p>
        <p>{stadium}</p>
      </div>
      <div>
        <Badge scheme={away_team as TeamScheme} />
      </div>
    </div>
  );
};
export default ScheduleItem;
