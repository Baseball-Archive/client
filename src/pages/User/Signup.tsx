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

export interface SignupProps extends LoginProps {
  passwordConfirm: string;
  nickname: string;
}

const Signup = () => {
  const auth = getAuth(firebaseApp);
  const { userSignup } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupProps>();

  const onSubmit = async (data: SignupProps) => {
    try {
      // 사용자 생성
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      // Firebase 사용자 프로필 업데이트
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: data.nickname,
          photoURL:
            'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
        });

        // 사용자 정보를 Firebase Realtime Database에 저장
        await set(ref(db, `users/${createdUser.user.uid}`), {
          nickname: data.nickname, // SignupProps에서 nickname 가져오기
          image: auth.currentUser.photoURL,
        });
        userSignup(data);
        // 로그인 페이지로 리디렉션
        navigate('/users/login');
        console.log('createdUser', createdUser);
      }
    } catch (err) {
      console.error('firebase Server failed:', err);
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
              scheme={errors.nickname ? 'danger' : 'primary'}
              {...register('nickname', {
                required: true,
              })}
            />
            {errors.nickname && (
              <p className="error-text">닉네임을 입력해주세요.</p>
            )}
          </fieldset>

          <fieldset className="text-center">
            <button
              type="submit"
              className="h-16 w-80 shrink-0 rounded-lg bg-black text-2xl not-italic text-white"
            >
              회원가입
            </button>
            <span className="flex place-content-center py-5">
              <p className="px-4 font-title font-light">
                이미 아이디가 있으신가요?
              </p>
              <Link to={'/users/login'}>로그인</Link>
            </span>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Signup;
