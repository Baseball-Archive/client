import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import InputText from '../../components/common/InputText';
import GithubButton from '../../components/User/GithubButton';
import GoogleButton from '../../components/User/GoogleButton';
import ROUTES from '../../constants/router';
import { useAuth } from '../../hooks/useAuth';
import { auth } from '../../service/firebase';

export interface LoginProps {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { userLogin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();

  const onSubmit = async (data: LoginProps) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate(ROUTES.HOME);
      userLogin({
        email: data.email,
        password: data.password,
      });
    } catch (err) {
      console.error('Login failed:', err);
      alert('비밀번호 또는 아이디가 틀립니다.');
    }
  };

  return (
    <div className="m-5 flex flex-col overflow-hidden bg-white">
      <div className="mx-auto my-0 max-w-screen-md">
        <div className="py-10 text-center font-logo text-3xl">야구볼램</div>

        <form
          className="flex flex-col items-center p-5 text-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset className="py-2">
            <InputText
              placeholder="이메일"
              inputType="email"
              inputSize="small"
              scheme={errors.email ? 'danger' : 'primary'}
              {...register('email', {
                required: true,
              })}
            />
            {errors.email && (
              <p className="error-text">이메일을 입력해주세요.</p>
            )}
          </fieldset>
          <fieldset className="py-2">
            <InputText
              placeholder="비밀번호"
              inputType="password"
              inputSize="small"
              scheme={errors.password ? 'danger' : 'primary'}
              {...register('password', {
                required: true,
              })}
            />
            {errors.password && (
              <p className="error-text">비밀번호를 입력해주세요.</p>
            )}
          </fieldset>
          <div className="flex flex-col items-center py-5 text-center">
            <Button size="large" scheme="primary">
              로그인
            </Button>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex gap-6">
              <Link to={ROUTES.RESET}>비밀번호 찾기 </Link>
              <Link to={ROUTES.JOIN}>회원가입</Link>
            </div>
            <div className="pt-20 text-center font-title font-light">
              SNS 계정으로 간편하게 로그인
            </div>
            <div className="flex justify-between pb-5 text-center">
              <div className="px-5">
                <GoogleButton />
              </div>
              <div className="px-5">
                <GithubButton />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
