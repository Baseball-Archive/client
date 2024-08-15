import InputText from '../../components/common/InputText';
import { useForm } from 'react-hook-form';
import { Cog6ToothIcon } from '@heroicons/react/20/solid';
import { ArchiveProps } from '../../components/Archive/Archive';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import { useAuth } from '../../hooks/useAuth';

type PropfileImageProps = Pick<ArchiveProps, 'photo'>;

export interface ProfileProps extends PropfileImageProps {
  profile: string;
  username: string;
  team: string;
  password: string;
}

const User: React.FC<ProfileProps> = ({ photo }) => {
  const { register, handleSubmit } = useForm<ProfileProps>();
  const { userProfile } = useAuth();

  return (
    <div className="m-5 flex flex-col overflow-hidden bg-white">
      <div className="mx-auto my-0 max-w-screen-md">
        <div className="flex justify-between pt-10 text-lg">
          <div className="relative mb-10">
            <div>
              <img
                className="mr-4 h-32 w-32 rounded-full bg-gray-200"
                src={
                  'https://firebasestorage.googleapis.com/v0/b/hotsix-blog-5f9b1.appspot.com/o/image%2F1723386154075?alt=media&token=04777f33-ef7b-4c50-bb0c-b748c2f6b8cf'
                }
              />
              <Cog6ToothIcon className="absolute bottom-5 right-10 h-6 w-6 text-white" />
            </div>
          </div>
          <div>
            <div>email</div>
            <div>직관 승률 99.9%</div>
          </div>
        </div>
        <form className="flex flex-col">
          <fieldset className="p-3">
            <p>닉네임</p>
            <InputText
              inputType="username"
              inputSize="large"
              scheme="primary"
              {...register('username', {
                required: true,
              })}
            />
            <p>응원팀</p>
            <div className="my-3 h-[45px] w-[359px] shrink-0 rounded border-2 border-[#A9A9A9] bg-white">
              <Badge scheme="hanhwa" />
              <Badge scheme="kia" />
              <Badge scheme="samsung" />
              <Badge scheme="lg" />
              <Badge scheme="ssg" />
              <Badge scheme="kt" />
              <Badge scheme="nc" />
              <Badge scheme="lotte" />
              <Badge scheme="kiwoom" />
            </div>

            <p>닉네임</p>
            <InputText
              inputType="password"
              inputSize="large"
              scheme="primary"
              {...register('password', {
                required: true,
              })}
            />
          </fieldset>
          <fieldset className="text-right">
            <Button size="large" scheme="primary">
              정보수정
            </Button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default User;
