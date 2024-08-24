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

import { updateUser } from '../../apis/auth';
import { TeamScheme } from '../Community/Post';
import { BASEBALL_TEAMS, OptionsProps } from '../../constants/baseballTeams';

interface Props {
  nickname: string;
  myTeam: OptionsProps | undefined;
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

const UserEditForm = ({ nickname, myTeam }: Props) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      nickname,
      myTeam,
    },
  });

  const onSubmit: SubmitHandler<Props> = async (data) => {
    try {
      const result = await updateUser({
        nickname: data.nickname,
        myTeam: data.myTeam?.key,
      });
      window.alert(result.message);
    } catch (err) {
      console.error(err);
      throw err;
    }
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
            name="myTeam"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                id="myTeam"
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
