import { sendPasswordResetEmail } from 'firebase/auth';
import InputText from './InputText';
import { auth } from '../../service/firebase';
import { useForm } from 'react-hook-form';

interface Props {
  email: string;
}

const ResetPW = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>();

  const handlePasswordReset = async (data: Props) => {
    try {
      if (data.email) {
        await sendPasswordResetEmail(auth, data.email);
        alert('해당 메일로 비밀번호 재설정 링크를 보냈습니다!');
      } else {
        alert('이메일을 입력해주세요.');
      }
    } catch (err) {
      console.error(err);
      alert('비밀번호 재설정 이메일 발송 실패.');
    }
  };

  return (
    <div className="m-5 flex flex-col overflow-hidden bg-white">
      <div className="mx-auto my-0 max-w-screen-md">
        <div className="py-16 font-title text-3xl font-bold">
          비밀번호 재설정
        </div>
        <form
          className="flex flex-col"
          onSubmit={handleSubmit(handlePasswordReset)}
        >
          <fieldset>
            <p>이메일</p>
            <InputText
              scheme={errors.email ? 'danger' : 'primary'}
              inputSize="large"
              inputType="email"
              {...register('email', {
                required: true,
              })}
            />
            {errors.email && (
              <p className="error-text">이메일을 입력해주세요.</p>
            )}
          </fieldset>
          <fieldset className="py-10">
            <button
              type="submit"
              className="h-16 w-[359px] shrink-0 rounded-lg bg-black text-2xl not-italic text-white"
            >
              이메일인증
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ResetPW;
