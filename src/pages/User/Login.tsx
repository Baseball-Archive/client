import { useForm } from 'react-hook-form';
import InputText from '../../components/common/InputText';
import { useAuth } from '../../hooks/useAuth';

export interface LoginProps {
  email: string;
  password: string;
}

const Login = () => {
  const { userLogin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();
  const onSubmit = (data: LoginProps) => {
    userLogin(data);
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <InputText
            placeholder="이메일"
            inputType="email"
            inputSize="medium"
            scheme="primary"
            {...register('email', {
              required: true,
            })}
          />
          {errors.email && <p className="error-text">이메일을 입력해주세요.</p>}
        </fieldset>
        <fieldset>
          <InputText
            placeholder="비밀번호"
            inputType="password"
            inputSize="medium"
            scheme="primary"
            {...register('password', {
              required: true,
            })}
          />
        </fieldset>
      </form>
    </>
  );
};

export default Login;
