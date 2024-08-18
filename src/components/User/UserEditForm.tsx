import Select, {
  OptionProps,
  components,
  SingleValueProps,
  StylesConfig,
} from 'react-select';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import InputText from '../../components/common/InputText';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';

// 공통 type으로 수정 예정
type TeamScheme =
  | 'kia'
  | 'samsung'
  | 'lg'
  | 'doosan'
  | 'ssg'
  | 'kt'
  | 'nc'
  | 'hanhwa'
  | 'lotte'
  | 'kiwoom';

interface Props {
  nickname: string;
  team: string;
}
interface OptionsProps {
  value: string;
  label: string;
}
interface Form {
  nickname: string | null;
  team: OptionsProps | null;
}

const BASEBALL_TEAMS: OptionsProps[] = [
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

const Option = (props: OptionProps<OptionsProps>) => {
  return (
    <div {...props.innerProps}>
      <Badge scheme={props.data.value as TeamScheme} />
    </div>
  );
};
const SingleValue = ({ ...props }: SingleValueProps<OptionsProps>) => (
  <components.SingleValue {...props}>
    <Badge scheme={props.data.value as TeamScheme} />
  </components.SingleValue>
);
const selectStyle: StylesConfig<OptionsProps> = {
  control: (base) => ({
    ...base,
    padding: '0.4rem',
    border: '1px solid #A9A9A9',
  }),
  menuList: (base) => ({
    ...base,
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto',
    gap: 10,
    padding: '1rem',
  }),
};

const UserEditForm = ({ nickname, team }: Props) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      nickname,
      team: BASEBALL_TEAMS.find((option) => option.value === team) || null,
    },
  });
  const onSubmit: SubmitHandler<Form> = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <fieldset className="flex flex-col pb-6">
          <label htmlFor="nickname">닉네임</label>
          <Controller
            name="nickname"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <InputText
                {...field}
                id="nickname"
                inputType="nickname"
                inputSize="large"
                scheme="primary"
                placeholder="닉네임을 입력해주세요."
              />
            )}
          />
        </fieldset>
        <fieldset className="pb-6">
          <label htmlFor="team">응원팀</label>
          <Controller
            name="team"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                id="team"
                options={BASEBALL_TEAMS}
                components={{ Option, SingleValue }}
                styles={selectStyle}
              />
            )}
          />
        </fieldset>
        <fieldset className="py-10 text-center">
          <Button type="submit" size="medium" scheme="primary">
            정보수정
          </Button>
        </fieldset>
      </form>
    </>
  );
};
export default UserEditForm;
