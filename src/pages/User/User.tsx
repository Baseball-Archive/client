import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import Profile from '../../components/User/Profile';
import UserEditForm from '../../components/User/UserEditForm';
import ROUTES from '../../constants/router';
import { auth } from '../../service/firebase';

const User = () => {
  try {
    const user = auth.currentUser;

    if (user) {
      return (
        <div className="mx-auto max-w-md">
          <Profile
            profile={user.photoURL ? user.photoURL : ''}
            email={user.email ? user.email : ''}
          />

          <UserEditForm
            nickname={user.displayName ? user.displayName : ''}
            team={''}
          />
        </div>
      );
    } else {
      return (
        <div className="mx-auto flex h-[calc(100vh-200px)] max-w-md flex-col items-center justify-center">
          <p className="pb-3">유저 정보가 없습니다.</p>
          <Button scheme="primary" size="medium">
            <Link to={ROUTES.LOGIN}>다시 로그인</Link>
          </Button>
        </div>
      );
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
export default User;
