import { CameraIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { getAuth, signOut, updateProfile } from 'firebase/auth';
import firebaseApp from '../../service/firebase';

export interface Props {
  profile: string;
  email: string;
}

const Profile = ({ profile, email }: Props) => {
  const navigate = useNavigate();
  const auth = getAuth(firebaseApp);
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('UPLOAD', event.target.files);
    // try {
    //   if (auth.currentUser)
    //     updateProfile(auth.currentUser, {
    //       photoURL: `${event.target.files}`,
    //     });
    // } catch (err) {
    //   console.error(err);
    // }
  };

  const onSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="relative flex items-center gap-10 py-10">
        <form className="relative cursor-pointer">
          <fieldset>
            <label htmlFor="image" className="cursor-pointer">
              <img className="h-32 w-32 rounded-full" src={profile} />
              <CameraIcon className="absolute bottom-0 right-0 size-10 rounded-full border-[3px] bg-black p-1 text-white" />
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
          </fieldset>
        </form>
        <div>
          <div className="pb-1 text-lg">{email}</div>
          <Link
            to="/users/reset"
            className="flex items-center justify-between font-light"
          >
            <span>비밀번호 변경</span>
            <ChevronRightIcon className="size-6" />
          </Link>
        </div>
        <div className="absolute right-0 top-10">
          <Button onClick={onSignOut} size="small" scheme="secondary">
            로그아웃
          </Button>
        </div>
      </div>
    </>
  );
};
export default Profile;
