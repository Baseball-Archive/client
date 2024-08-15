import Badge from "../../components/common/Badge";
import { TeamScheme } from "../../components/Community/Post";
import { calculateWinPercentage } from "../../utils/baseballStats";

interface Standings {
  team_id: number;
  team_name: TeamScheme;
  wins: number;
  losses: number;
  draws: number;
  points: number;
  position: number;
}
const dummyDataList: Standings[] = [
  {
    team_id: 1,
    team_name: "lg",
    wins: 55,
    losses: 30,
    draws: 8,
    points: 118,
    position: 1,
  },
  {
    team_id: 2,
    team_name: "doosan",
    wins: 52,
    losses: 33,
    draws: 8,
    points: 112,
    position: 2,
  },
  {
    team_id: 3,
    team_name: "nc",
    wins: 50,
    losses: 35,
    draws: 8,
    points: 108,
    position: 3,
  },
  {
    team_id: 4,
    team_name: "kia",
    wins: 47,
    losses: 38,
    draws: 8,
    points: 102,
    position: 4,
  },
  {
    team_id: 5,
    team_name: "lotte",
    wins: 45,
    losses: 40,
    draws: 8,
    points: 98,
    position: 5,
  },
  {
    team_id: 6,
    team_name: "samsung",
    wins: 42,
    losses: 43,
    draws: 8,
    points: 92,
    position: 6,
  },
  {
    team_id: 7,
    team_name: "hanhwa",
    wins: 40,
    losses: 45,
    draws: 8,
    points: 88,
    position: 7,
  },
  {
    team_id: 8,
    team_name: "kia",
    wins: 38,
    losses: 47,
    draws: 8,
    points: 84,
    position: 8,
  },
  {
    team_id: 9,
    team_name: "kiwoom",
    wins: 35,
    losses: 50,
    draws: 8,
    points: 78,
    position: 9,
  },
  {
    team_id: 10,
    team_name: "ssg",
    wins: 30,
    losses: 55,
    draws: 8,
    points: 68,
    position: 10,
  },
];

const Standings = () => {
  return (
    <>
      <h1 className="border-b border-black pb-3 text-center text-2xl font-bold">
        2024
      </h1>
      <table className="min-w-full">
        <tbody>
          {dummyDataList.map((item) => (
            <tr className="border-b">
              <td className="w-2/12 py-4 text-center font-bold">
                {item.position}
              </td>
              <td>
                <Badge scheme={item.team_name} />
              </td>
              <td className="font-light">
                <span className="font-normal">{item.wins}</span>승
                <span className="pl-2 font-normal">{item.draws}</span>무
                <span className="pl-2 font-normal">{item.losses}</span>패
              </td>
              <td className="font-light">
                승률
                <span className="pl-2 font-normal">
                  {calculateWinPercentage(item.wins, item.losses, item.draws)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Standings;
