import { useForm } from 'react-hook-form';
import InputText from '../../components/common/InputText';
import { Link, useNavigate } from 'react-router-dom';
import { LoginProps } from './Login';
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from 'firebase/auth';
import { ref, set } from 'firebase/database';

import firebaseApp, { db } from '../../service/firebase';
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import Badge from '../../components/common/Badge';
import { TeamScheme } from '../../types/TeamScheme';

interface OptionsProps {
  value: string;
  label: string;
}
const BASEBALL_TEAMS: OptionsProps[] = [
  { value: 'kia', label: '기아' },
  { value: 'samsung', label: '삼성' },
  { value: 'lg', label: 'LG' },
  { value: 'doosan', label: '두산' },
  { value: 'ssg', label: 'SSG' },
  { value: 'kt', label: 'KT' },
  { value: 'nc', label: 'NC' },
  { value: 'hanhwa', label: '한화' },
  { value: 'lotte', label: '롯데' },
  { value: 'kiwoom', label: '키움' },
];

export interface SignupProps extends LoginProps {
  passwordConfirm: string;
  nickname?: string;
  team: string;
}

const Signup = () => {
  const auth = getAuth(firebaseApp);
  const { userSignup } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [team, setTeam] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<SignupProps>({
    defaultValues: {
      nickname: '',
    },
  });

  const onSubmit = async (data: SignupProps) => {
    try {
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: data.nickname || '',
          photoURL:
            'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
        });

        await set(ref(db, `users/${createdUser.user.uid}`), {
          nickname: data.nickname || '',
          image: auth.currentUser.photoURL,
          team: team,
        });
        userSignup(data);

        navigate('/users/login');
      }
    } catch (err) {
      console.error('firebase Server failed:', err);
    }
  };
  const handleTeamSubmit = () => {
    if (team) {
      setIsOpen(false);
      handleSubmit(onSubmit)();
    } else {
      alert('팀을 선택해주세요!');
    }
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
                required: '비밀번호를 입력해주세요.',
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
          <fieldset className="p-3">
            <p>닉네임</p>
            <InputText
              placeholder="닉네임"
              inputType="nickname"
              inputSize="medium"
              scheme="primary"
              {...register('nickname')}
            />
          </fieldset>
          <fieldset className="flex flex-col text-center">
            <div
              onClick={handleValidate}
              className="h-16 place-content-center rounded-lg bg-black text-2xl not-italic text-white"
            >
              회원가입
            </div>
            <span className="flex place-content-center py-5">
              <p className="px-4 font-title font-light">
                이미 아이디가 있으신가요?
              </p>
              <Link to={'/users/login'}>로그인</Link>
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
                <div className="grid grid-cols-4 gap-4 py-10">
                  {BASEBALL_TEAMS.map((item) => (
                    <div
                      key={item.value}
                      onClick={() => setTeam(item.value)}
                      className={`cursor-pointer rounded-lg text-center`}
                    >
                      <Badge scheme={item.value as TeamScheme} />
                    </div>
                  ))}
                </div>
                <button
                  type="submit"
                  className="h-12 w-40 shrink-0 rounded-lg bg-black text-white"
                  onClick={handleTeamSubmit}
                >
                  선택완료
                </button>
                <button type="submit" onClick={handleTeamSubmit}>
                  다음에 하기
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
