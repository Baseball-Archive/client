import { useEffect, useState } from 'react';
import { auth } from '../service/firebase';
import { getUser } from '../apis/auth';
import { BASEBALL_TEAMS, OptionsProps } from '../constants/baseballTeams';
import { useAuthStore } from '../store/authStore';

interface IUserData {
  pic_url: string;
  email: string;
  nickname: string;
  my_team_id: number;
}

const useUserData = () => {
  const { isloggedIn } = useAuthStore();
  const [userData, setUserData] = useState<IUserData | undefined>(undefined);
  const [myTeam, setMyTeam] = useState<OptionsProps | undefined>(undefined);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (isloggedIn) {
          const user = auth.currentUser;
          const result = await getUser();
          setUserData({ ...user, ...result.data });
          setMyTeam(
            BASEBALL_TEAMS.find(
              (option) => option.key === result.data?.my_team_id,
            ),
          );
        } else {
          console.error('로그인 이력이 없습니다.');
          setError('로그인 이력이 없습니다.');
        }
      } catch (error) {
        console.error('회원정보 조회 실패:', error);
        setError('회원정보 조회 실패');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [isloggedIn]);

  return { userData, loading, error, myTeam };
};

export default useUserData;
