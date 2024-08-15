import { useForm } from 'react-hook-form';
import InputText from '../../components/common/InputText';
import { useAuth } from '../../hooks/useAuth';
import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';

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
    <div className="m-5 flex flex-col overflow-hidden bg-white">
      <div className="mx-auto my-0 max-w-screen-md">
        <div className="py-10 text-center font-logo text-3xl">야구볼램</div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="p-3">
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
          <fieldset className="p-3">
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
          <div className="flex flex-col items-center text-center">
            {/* <button className='w-64 h-16 flex shrink-0 rounded bg-black text-white bg-center'> */}
            <Button size="large" scheme="primary">
              로그인
            </Button>
            {/* </button> */}

            <div className="pt-6">
              <div className="flex gap-6">
                <Link to="/users/reset">비밀번호 찾기 </Link>
                <Link to="/users/signup">회원가입</Link>
              </div>
              <div className="pt-20 text-center font-title font-light">
                SNS 계정으로 간편하게 로그인
              </div>
              <div className="flex pb-5 text-center">
                <div className="flex-1">구글</div>
                <div className="flex-1">애플</div>
                <div className="flex-1">페이스북</div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
