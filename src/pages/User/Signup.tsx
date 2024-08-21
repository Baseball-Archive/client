import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { LoginProps } from './Login';
import { AuthErrorCodes, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../service/firebase';
import { useAuth } from '../../hooks/useAuth';
import InputText from '../../components/common/InputText';
import Badge from '../../components/common/Badge';
import GoogleButton from '../../components/User/GoogleButton';
import GithubButton from '../../components/User/GithubButton';
import ROUTES from '../../constants/router';
import { DEFAULT_IMAGE } from '../../constants/image';
import { FirebaseError } from 'firebase/app';
import { toast } from 'react-toastify';
import { TeamScheme } from '../../types/TeamScheme';
import { BASEBALL_TEAMS } from '../../constants/baseballTeams';

export interface User {
  nickname: string;
  profileImageUrl: string;
  myTeam: number | null;
}

export interface SignupProps extends LoginProps {
  passwordConfirm: string;
  nickname: string;
}

const Signup = () => {
  const { userSignup } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [team, setTeam] = useState<number | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<SignupProps>();

  const onSubmit = async (data: SignupProps) => {
    try {
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      if (auth.currentUser) {
        const userData: User = {
          nickname: data.nickname || '',
          profileImageUrl: DEFAULT_IMAGE,
          myTeam: team || null,
        };
        userSignup(userData);
        navigate(ROUTES.LOGIN);
        return userData;
      }
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        switch (err.code) {
          case AuthErrorCodes.INVALID_EMAIL:
            toast.error('잘못된 이메일 형식입니다.');
            break;
          case AuthErrorCodes.EMAIL_EXISTS:
            toast.error('이미 사용 중인 이메일입니다.');
            break;
          case AuthErrorCodes.WEAK_PASSWORD:
            toast.error('비밀번호는 6글자 이상이어야 합니다.');
            break;
          case AuthErrorCodes.NETWORK_REQUEST_FAILED:
            toast.error('네트워크 연결에 실패하였습니다.');
            break;
          case AuthErrorCodes.USER_DISABLED:
            toast.error('해당 계정은 비활성화되었습니다.');
            break;
          default:
            toast.error('회원가입에 실패했습니다.');
            break;
        }
      } else {
        toast.error('회원가입중 예기치 않은 오류가 발생했습니다.');
      }
    }
  };

  const handleTeamSubmit = () => {
    setIsOpen(false);
    handleSubmit(onSubmit)();
  };

  const handleValidate = async () => {
    const isValid = await trigger(['email', 'password', 'passwordConfirm']);
    if (isValid) {
      setIsOpen(true);
    } else {
      alert('정보를 입력하세요');
    }
  };

  return (
    <div className="m-5 flex flex-col overflow-hidden bg-white">
      <div className="mx-auto my-0 max-w-screen-md">
        <div className="m:text-center font-title text-3xl font-bold md:block">
          회원가입
        </div>
        <div className="pt-6 text-center font-title font-light">
          SNS 계정으로 간편하게 로그인
          <div className="flex pb-3 text-center">
            <div className="px-5">
              <GoogleButton />
            </div>
            <div className="px-5">
              <GithubButton />
            </div>
          </div>
        </div>
        <form
          className="border-t-4 pt-5 text-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset className="flex flex-col items-center p-3">
            <p className="w-80 text-left">
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
          <fieldset className="flex flex-col items-center p-3">
            <p className="w-80 text-left">
              비밀번호<span className="text-blue-600">*</span>
            </p>
            <InputText
              placeholder="비밀번호"
              inputType="password"
              inputSize="medium"
              scheme={errors.password ? 'danger' : 'primary'}
              {...register('password', {
                required: '비밀번호를 입력해주세요.',
              })}
            />
            {errors.password && (
              <p className="error-text">비밀번호을 입력해주세요.</p>
            )}
          </fieldset>
          <fieldset className="flex flex-col items-center p-3">
            <p className="w-80 text-left">
              비밀번호 확인<span className="text-blue-600">*</span>
            </p>
            <InputText
              placeholder="비밀번호 확인"
              inputType="password"
              inputSize="medium"
              scheme={errors.password ? 'danger' : 'primary'}
              {...register('passwordConfirm', {
                required: '비밀번호 확인을 입력해주세요.',
                validate: (value) =>
                  value === watch('password') ||
                  '비밀번호가 일치하지 않습니다.',
              })}
            />
            {errors.passwordConfirm && (
              <p className="error-text">비밀번호 확인을 입력해주세요.</p>
            )}
          </fieldset>
          <fieldset className="flex flex-col items-center p-3">
            <p className="w-80 text-left">닉네임</p>
            <InputText
              placeholder="닉네임"
              inputType="nickname"
              inputSize="medium"
              scheme="primary"
              {...register('nickname')}
            />
          </fieldset>
          <fieldset className="flex flex-col items-center">
            <div
              onClick={handleValidate}
              className="h-16 w-80 place-content-center rounded-lg bg-black text-2xl not-italic text-white"
            >
              회원가입
            </div>
            <span className="flex place-content-center py-5">
              <p className="px-4 font-title font-light">
                이미 아이디가 있으신가요?
              </p>
              <Link to={ROUTES.LOGIN}>로그인</Link>
            </span>
          </fieldset>
          {isOpen && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="flex w-80 flex-col items-center rounded-lg bg-white p-5">
                <div className="text-center">
                  <span className="text-2xl font-black not-italic">
                    응원하는 구단
                  </span>
                  <span className="text-2xl font-light not-italic">
                    을<br /> 선택해주세요
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2 py-5">
                  {BASEBALL_TEAMS.map((item) => (
                    <div
                      key={item.key}
                      onClick={() => {
                        setTeam(item.key);
                      }}
                      className={`cursor-pointer rounded-lg text-center ${team === item.key ? 'border-8 bg-gray-600' : ''}`}
                    >
                      <Badge scheme={item.value as TeamScheme} />
                    </div>
                  ))}
                </div>
                <div
                  onClick={handleTeamSubmit}
                  className="flex h-11 w-40 flex-col justify-center rounded-lg bg-black text-center align-middle text-white"
                >
                  선택완료
                </div>
                <div onClick={handleTeamSubmit}>다음에 하기</div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
