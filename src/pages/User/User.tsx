import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import Profile from '../../components/User/Profile';
import UserEditForm from '../../components/User/UserEditForm';
import { auth } from '../../service/firebase';
import ROUTES from '../../constants/router';

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
        <div className="mx-auto flex max-w-md flex-col">
          유저 정보가 없습니다.
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
