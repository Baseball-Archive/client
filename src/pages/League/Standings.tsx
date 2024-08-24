import { getStandings } from '../../apis/league';
import Badge from '../../components/common/Badge';
import { TeamScheme } from '../../types/TeamScheme';
import { BASEBALL_TEAMS } from '../../constants/baseballTeams';
import { useQuery } from '@tanstack/react-query';

interface Standings {
  rank: number;
  baseball_team_id: number;
  games: number;
  wins: number;
  losses: number;
  draws: number;
  winning_rate: number;
}

const Standings = () => {
  const { data: leagueStandings } = useQuery<Standings[], Error>({
    queryKey: ['standings'],
    queryFn: () => getStandings(),
  });

  return (
    <>
      <h1 className="bg-gray-100 py-4 text-center text-2xl font-bold">2024</h1>
      <table className="min-w-full">
        <tbody>
          {leagueStandings &&
            leagueStandings.map((item) => (
              <tr className="border-b">
                <td className="py-4 text-center font-bold">{item.rank}</td>
                <td className="text-center">
                  <Badge
                    scheme={
                      BASEBALL_TEAMS[item.baseball_team_id - 1]
                        .value as TeamScheme
                    }
                  />
                </td>
                <td className="text-center font-light">
                  <span className="font-normal">{item.wins}</span>승
                  <span className="pl-2 font-normal">{item.draws}</span>무
                  <span className="pl-2 font-normal">{item.losses}</span>패
                </td>
                <td className="text-center font-light">
                  승률
                  <span className="pl-2 font-normal">{item.winning_rate}</span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
export default Standings;
