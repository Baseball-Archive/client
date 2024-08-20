import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Select, {
  OptionProps,
  components,
  SingleValueProps,
  StylesConfig,
} from 'react-select';

import InputText from '../../components/common/InputText';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';

import { TeamScheme } from '../Community/Post';
import { BASEBALL_TEAMS } from '../../constants/baseballTeams';

interface Props {
  nickname: string;
  team: string;
}
export interface OptionsProps {
  value: string;
  label: string;
}
interface Form {
  nickname: string | null;
  team: OptionsProps | null;
}

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
