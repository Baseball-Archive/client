
import { auth } from '../service/firebase';
import { getUser } from '../apis/auth';
import { BASEBALL_TEAMS } from '../constants/baseballTeams';
import { useAuthStore } from '../store/authStore';
import { useQuery } from '@tanstack/react-query';

interface IUserData {
  pic_url: string;
  email: string;
  nickname: string;
  my_team_id: number;
}

const useUserData = () => {
  const { isloggedIn } = useAuthStore();

  const fetchUserData = async () => {
    if (!isloggedIn) {
      throw new Error('로그인 이력이 없습니다.');
    }

    const user = auth.currentUser;
    const result = await getUser();
    return { ...user, ...result.data };
  };

  const {
    data: userData,
    isLoading,
    error,
  } = useQuery<IUserData, Error>({
    queryKey: ['userData'],
    queryFn: () => fetchUserData(),
    enabled: isloggedIn,
  });

  const myTeam = userData
    ? BASEBALL_TEAMS.find((option) => option.key === userData.my_team_id)
    : undefined;

  return { userData, isLoading, error, myTeam };
};

export default useUserData;
