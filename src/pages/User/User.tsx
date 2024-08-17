import InputText from '../../components/common/InputText';
import { useForm } from 'react-hook-form';
import { Cog6ToothIcon } from '@heroicons/react/20/solid';
import { ArchiveProps } from '../../components/Archive/Archive';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import { Link } from 'react-router-dom';

type PropfileImageProps = Pick<ArchiveProps, 'photo'>;

export interface ProfileProps extends PropfileImageProps {
  profile: string;
  email: string;
  nickname: string;
  team: string;
  password: string;
}

const userEX = [
  {
    profile:
      'https://firebasestorage.googleapis.com/v0/b/hotsix-blog-5f9b1.appspot.com/o/image%2F1723386154075?alt=media&token=04777f33-ef7b-4c50-bb0c-b748c2f6b8cf',
    email: 'test@test.com',
    nickname: 'test',
    team: 'kia',
    password: '123',
  },
];

const User: React.FC<ProfileProps> = () => {
  const { register, handleSubmit } = useForm<ProfileProps>();

  return (
    <div className="m-5 flex flex-col overflow-hidden bg-white">
      <div className="mx-auto my-0 max-w-screen-md">
        <div className="flex pt-10 text-lg">
          <div className="relative mb-10">
            <div>
              <img
                className="mr-4 h-32 w-32 rounded-full bg-gray-200"
                src={`${userEX.map((item) => item.profile)}`}
              />
              <Cog6ToothIcon className="absolute bottom-5 right-10 h-6 w-6 text-white" />
            </div>
          </div>
          <div className="flex flex-col py-10">
            <p>{userEX.map((item) => item.email)}</p>
            <p>{userEX.map((item) => item.nickname)}</p>
          </div>
        </div>
        <form className="flex flex-col">
          <fieldset className="p-3">
            <p>닉네임</p>
            <InputText
              inputType="nickname"
              inputSize="large"
              scheme="primary"
              {...register('nickname', {
                required: true,
              })}
            />
            <p>응원팀</p>
            <div className="my-3 h-[45px] w-[359px] shrink-0 rounded border-2 border-[#A9A9A9] bg-white"></div>
          </fieldset>
          <fieldset className="flex flex-col items-end">
            <Button size="medium" scheme="primary">
              정보수정
            </Button>
            <Link to="/users/reset">비밀번호 변경</Link>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default User;
