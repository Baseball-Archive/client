import { useEffect, useState } from 'react';
import { auth } from '../service/firebase';
import { getUser } from '../apis/auth';
import { BASEBALL_TEAMS, OptionsProps } from '../constants/baseballTeams';

interface IUserData {
  pic_url: string;
  email: string;
  nickname: string;
  my_team_id: number;
}

const useUserData = () => {
  const [userData, setUserData] = useState<IUserData | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [myTeam, setMyTeam] = useState<OptionsProps | undefined>(undefined);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const result = await getUser();
          setUserData({ ...user, ...result.data });
          setMyTeam(
            BASEBALL_TEAMS.find(
              (option) => option.key === result.data?.my_team_id,
            ),
          );
        } else {
          console.error('토큰이 없습니다.');
          setError('토큰이 없습니다.');
        }
      } catch (error) {
        console.error('회원정보 조회 실패:', error);
        setError('회원정보 조회 실패');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return { userData, loading, error, myTeam };
};

export default useUserData;
