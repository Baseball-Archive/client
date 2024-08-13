import { useForm } from 'react-hook-form';
import InputText from '../../components/common/InputText';
import { useAuth } from '../../hooks/useAuth';
import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';

export interface SignupProps {
  email: string;
  username: string;
  password: string;
}

const Signup = () => {
  const { userSignup } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupProps>();

  const onSubmit = (data: SignupProps) => {
    userSignup(data);
  };

  return (
    <>
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
            placeholder="유저닉네임"
            inputType="username"
            inputSize="medium"
            scheme="primary"
            {...register('username', {
              required: true,
            })}
          />
          {errors.username && (
            <p className="error-text">닉네임을 입력해주세요.</p>
          )}
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
          {errors.password && (
            <p className="error-text">비밀번호을 입력해주세요.</p>
          )}
        </fieldset>
        <fieldset>
          <Button type="submit" size="medium" scheme="primary">
            회원가입
          </Button>
        </fieldset>
        <div className="info">
          <Link to="/reset">비밀번호 초기화</Link>
        </div>
      </form>
    </>
  );
};

export default Signup;
