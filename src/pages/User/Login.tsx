import { useForm } from 'react-hook-form';
import InputText from '../../components/common/InputText';
import { useAuth } from '../../hooks/useAuth';

const dummyLogin : LoginProps[] = [
  {
    email : "1234@gmail.com",
    password: "1234"
  }
]


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
    <div className="mb-6 flex flex-col overflow-hidden bg-white">
      <div className="w-full max-w-lg">
        <p>야구볼램</p>
        <p>슬로건을 작성하세요.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className='p-3'>
         {errors.email ? <InputText
            inputType="email"
            inputSize="medium"
            scheme="danger"
            {...register('email', {
              required: true,
            })}  /> : <InputText
            placeholder="이메일"
            inputType="email"
            inputSize="medium"
            scheme="primary"
            {...register('email', {
              required: true,
            })} />} 
         
        </fieldset>
        <fieldset className='p-3'>
          <InputText
            placeholder="비밀번호"
            inputType="password"
            inputSize="medium"
            scheme="primary"
            {...register('password', {
              required: true,
            })}
            />
            {errors.password && <p className='error-text'>비밀번호를 입력해주세요.</p>}
        </fieldset>
        <div className='flex flex-col text-center'>
        <button>
          로그인
        </button>
        <button>
          계정이 없으신가요? 회원가입
        </button>
        <p>SNS계정으로 간편하게 로그인</p>
        </div>
      </form>
      </div>
    </div>

  );
};

export default Login;
