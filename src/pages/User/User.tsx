import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import Profile from '../../components/User/Profile';
import UserEditForm from '../../components/User/UserEditForm';
import useUserData from '../../hooks/useUserData';
import ROUTES from '../../constants/router';

const User = () => {
  const { userData, loading, error, myTeam } = useUserData();

  if (loading) {
    return <p>로딩 중</p>;
  }

  if (error || !userData) {
    return (
      <div className="mx-auto flex h-[calc(100vh-200px)] max-w-md flex-col items-center justify-center">
        <p className="pb-3">유저 정보가 없습니다.</p>
        <Button scheme="primary" size="medium">
          <Link to={ROUTES.LOGIN}>다시 로그인</Link>
        </Button>
      </div>
    );
  }

  if (userData) {
    return (
      <div className="mx-auto max-w-md">
        <Profile
          profile={userData.pic_url ? userData.pic_url : ''}
          email={userData.email ? userData.email : ''}
          nickname={userData.nickname ? userData.nickname : ''}
          myTeam={myTeam}
        />
        <UserEditForm
          nickname={userData.nickname ? userData.nickname : ''}
          myTeam={myTeam}
        />
      </div>
    );
  }
};

export default User;
