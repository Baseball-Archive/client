import InputText from './InputText';

const ResetPW = () => {
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
