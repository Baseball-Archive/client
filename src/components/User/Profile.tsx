import { CameraIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

export interface Props {
  profile: string;
  email: string;
}

const Profile = ({ profile, email }: Props) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('UPLOAD', event.target.files);
  };

  return (
    <>
      <div className="flex items-center gap-10 py-10">
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
      </div>
    </>
  );
};
export default Profile;
