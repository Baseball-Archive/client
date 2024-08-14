import { useForm } from 'react-hook-form';
import InputText from '../../components/common/InputText';
import { useAuth } from '../../hooks/useAuth';
import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';
import { LoginProps } from './Login';

export interface SignupProps extends LoginProps {
  username: string;
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
    <div className="m-5 flex flex-col overflow-hidden bg-white">
      <div className="mx-auto my-0 max-w-screen-md">
        <div className="m:text-center font-title text-3xl font-bold md:block">
          회원가입
        </div>
        <div className="pt-6 text-center font-title font-light">
          SNS 계정으로 간편하게 로그인
        </div>
        <div className="flex pb-5 text-center">
          <div className="flex-1">구글</div>
          <div className="flex-1">애플</div>
          <div className="flex-1">페이스북</div>
        </div>
        <form className="border-t-4 pt-5" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="p-3">
            <p>
              이메일<span className="text-blue-600">*</span>
            </p>
            <InputText
              placeholder="이메일"
              inputType="email"
              inputSize="medium"
              scheme={errors.email ? 'danger' : 'primary'}
              {...register('email', {
                required: true,
              })}
            />
            {errors.email && (
              <p className="error-text">이메일을 입력해주세요.</p>
            )}
          </fieldset>
          <fieldset className="p-3">
            <p>
              비밀번호<span className="text-blue-600">*</span>
            </p>
            <InputText
              placeholder="비밀번호"
              inputType="password"
              inputSize="medium"
              scheme={errors.password ? 'danger' : 'primary'}
              {...register('password', {
                required: true,
              })}
            />
            {errors.password && (
              <p className="error-text">비밀번호을 입력해주세요.</p>
            )}
          </fieldset>
          <fieldset className="p-3">
            <p>
              비밀번호 확인<span className="text-blue-600">*</span>
            </p>
            <InputText
              placeholder="비밀번호 확인"
              inputType="password"
              inputSize="medium"
              scheme={errors.password ? 'danger' : 'primary'}
              {...register('password', {
                required: true,
              })}
            />
            {errors.password && (
              <p className="error-text">비밀번호을 입력해주세요.</p>
            )}
          </fieldset>
          <fieldset className="p-3">
            <p>닉네임</p>
            <InputText
              placeholder="닉네임"
              inputType="username"
              inputSize="medium"
              scheme={errors.username ? 'danger' : 'primary'}
              {...register('username', {
                required: true,
              })}
            />
            {errors.username && (
              <p className="error-text">닉네임을 입력해주세요.</p>
            )}
          </fieldset>

          <fieldset>
            <Button type="submit" size="medium" scheme="primary">
              회원가입
            </Button>
          </fieldset>
          <Link to={'/users/login'}>이미 아이디가 있으신가요? 로그인</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
