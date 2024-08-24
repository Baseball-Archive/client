import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CameraIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { signOut } from 'firebase/auth';
import { auth } from '../../service/firebase';
import { removeToken, useAuthStore } from '../../store/authStore';
import ROUTES from '../../constants/router';
import Button from '../common/Button';
import { DEFAULT_IMAGE } from '../../constants/image';
import { uploadImage } from '../../apis/uploadImage';
import { updateUser } from '../../apis/auth';
import { OptionsProps } from '../../constants/baseballTeams';

export interface Props {
  profile: string;
  email: string;
  nickname: string;
  myTeam: OptionsProps | undefined;
}

const Profile = ({ profile, email, nickname, myTeam }: Props) => {
  const { isloggedIn } = useAuthStore();
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(profile);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files;

    if (!file) {
      window.alert('선택된 파일이 없습니다.');
      console.error('선택된 파일이 없습니다.');
      return;
    }
    try {
      if (isloggedIn) {
        const formData = new FormData();
        formData.append('profileImage', file[0]);
        const result = await uploadImage(formData);

        if (result.fileUrl) {
          setProfileImage(result.fileUrl);
          const updateResult = await updateUser({
            picURL: result.fileUrl,
            nickname,
            myTeam: myTeam?.key,
          });
          window.alert(updateResult.message);
        }
      } else {
        console.error('토큰이 없습니다.');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onSignOut = async () => {
    try {
      await signOut(auth);
      removeToken();
      navigate(ROUTES.LOGIN);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="relative flex items-center gap-10 py-10">
        <form className="relative cursor-pointer">
          <fieldset>
            <label htmlFor="image" className="cursor-pointer">
              <img
                className="h-32 w-32 rounded-full"
                src={profileImage || DEFAULT_IMAGE}
              />
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
