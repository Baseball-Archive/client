import { sendPasswordResetEmail } from 'firebase/auth';
import InputText from './InputText';
import { auth } from '../../service/firebase';

const ResetPW = () => {
  const handlePasswordReset = () => {
    const user = auth.currentUser;
    try {
      if (user && user.email) {
        sendPasswordResetEmail(auth, user.email);
        console.log(user.email);

        alert('해당 메일로 메시지를 보냈습니다!');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="m-5 flex flex-col overflow-hidden bg-white">
      <div className="mx-auto my-0 max-w-screen-md">
        <div className="py-16 font-title text-3xl font-bold">
          비밀번호 재설정
        </div>
        <form className="flex flex-col">
          <fieldset>
            <p>이메일</p>
            <InputText
              scheme="primary"
              inputSize="large"
              inputType="email"
            ></InputText>
          </fieldset>
          <fieldset className="py-10">
            <button
              onClick={handlePasswordReset}
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
