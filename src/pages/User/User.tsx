import InputText from '../../components/common/InputText';
import { useForm } from 'react-hook-form';
import { SignupProps } from './Signup';

export interface ProfileProps {
  username: string;
  team: string;
  password: string;
}

const User = () => {
  const { register, handleSubmit } = useForm<SignupProps>();
  return (
    <form className="border-t-4 pt-5">
      <fieldset className="p-3">
        <p>
          이메일<span className="text-blue-600">*</span>
        </p>
        <InputText
          placeholder="이메일"
          inputType="email"
          inputSize="medium"
          scheme="primary"
          {...register('username', {
            required: true,
          })}
        />
      </fieldset>
    </form>
  );
};

export default User;
