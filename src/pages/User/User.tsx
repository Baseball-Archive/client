import { useAuth } from '../../hooks/useAuth';
import Profile from '../../components/User/Profile';
import UserEditForm from '../../components/User/UserEditForm';

const dummyUserData = {
  profile:
    'https://firebasestorage.googleapis.com/v0/b/hotsix-blog-5f9b1.appspot.com/o/image%2F1723386154075?alt=media&token=04777f33-ef7b-4c50-bb0c-b748c2f6b8cf',
  email: 'bigfan@baseball.com',
  nickname: '닉네임',
  team: 'ssg',
};

const User = () => {
  const { profile, nickname, email, team } = dummyUserData;
  const { userProfile } = useAuth();

  return (
    <div className="mx-auto max-w-md">
      <Profile profile={profile} email={email} />
      <UserEditForm nickname={nickname} team={team} />
    </div>
  );
};
export default User;
