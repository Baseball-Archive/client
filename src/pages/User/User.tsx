import Select, {
  OptionProps,
  components,
  SingleValueProps,
  StylesConfig,
} from 'react-select';
import { useForm } from 'react-hook-form';
import { Cog6ToothIcon } from '@heroicons/react/20/solid';
import InputText from '../../components/common/InputText';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import { TeamScheme } from '../../components/Community/Post';
import { useAuth } from '../../hooks/useAuth';

export interface ProfileProps {
  profile: string;
  nickname: string;
  email: string;
  team: string;
}
interface teamOptionsProps {
  value: string;
  label: string;
}

const dummyUserData = {
  profile:
    'https://firebasestorage.googleapis.com/v0/b/hotsix-blog-5f9b1.appspot.com/o/image%2F1723386154075?alt=media&token=04777f33-ef7b-4c50-bb0c-b748c2f6b8cf',
  email: 'bigfan@baseball.com',
  nickname: '닉네임',
  team: 'ssg',
};

const BASEBALL_TEAMS = [
  { value: 'kia', label: '기아' },
  { value: 'samsung', label: '삼성' },
  { value: 'lg', label: 'LG' },
  { value: 'doosan', label: '두산' },
  { value: 'ssg', label: 'SSG' },
  { value: 'kt', label: 'KT' },
  { value: 'nc', label: 'NC' },
  { value: 'hanhwa', label: '한화' },
  { value: 'lotte', label: '롯데' },
  { value: 'kiwoom', label: '키움' },
];

const Option = (props: OptionProps<teamOptionsProps>) => {
  return (
    <div {...props.innerProps}>
      <Badge scheme={props.data.value as TeamScheme} />
    </div>
  );
};

const SingleValue = ({ ...props }: SingleValueProps<teamOptionsProps>) => (
  <components.SingleValue {...props}>
    <Badge scheme={props.data.value as TeamScheme} />
  </components.SingleValue>
);

const selectStyle: StylesConfig<teamOptionsProps> = {
  control: (base) => ({
    ...base,
    padding: '0.4rem',
  }),
  menuList: (base) => ({
    ...base,
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto',
    gap: 10,
    padding: '1rem',
  }),
};
const User = () => {
  const { register, handleSubmit } = useForm<ProfileProps>();
  const { profile, nickname, email, team } = dummyUserData;
  const { userProfile } = useAuth();

  return (
    <div className="mx-auto max-w-md">
      <div className="flex items-center gap-10 py-10">
        <div className="relative cursor-pointer">
          <img className="h-32 w-32 rounded-full" src={profile} />
          <Cog6ToothIcon className="absolute bottom-5 right-5 size-6 text-white" />
        </div>
        <div>
          <div className="text-lg">{email}</div>
          <div className="text-2xl font-bold">{nickname}</div>
        </div>
      </div>
      <form className="w-full">
        <fieldset className="">
          <p>닉네임</p>
          <InputText
            inputType="username"
            inputSize="large"
            scheme="primary"
            {...register('nickname', {
              required: true,
            })}
          />
        </fieldset>
        <fieldset className="">
          <p>응원팀</p>
          <Select
            options={BASEBALL_TEAMS}
            components={{ Option, SingleValue }}
            defaultValue={BASEBALL_TEAMS.find((item) => item.value === team)}
            styles={selectStyle}
          />
        </fieldset>
        <fieldset>
          <Button size="medium" scheme="primary">
            정보수정
          </Button>
        </fieldset>
      </form>
    </div>
  );
};
export default User;
