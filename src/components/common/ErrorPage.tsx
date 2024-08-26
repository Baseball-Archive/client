import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import Icon from '/images/icon.png';
import ROUTES from '../../constants/router';
import Button from './Button';

const ErrorPage = () => {
  return (
    <>
      <div className="flex h-[80vh] flex-col items-center justify-center gap-3 text-2xl">
        <img className="w-[50px]" src={Icon} alt="야구볼램 아이콘" />
        <h1>문제가 발생했습니다!</h1>
        <p>{'예기치 않은 오류가 발생했습니다.'}</p>
        <Link
          to={ROUTES.HOME}
          className="flex w-full justify-center gap-10 font-bold"
        >
          홈으로 <ChevronRightIcon className="size-8" />
        </Link>
        <Button scheme="primary" size="medium">
          <Link to={ROUTES.LOGIN}>다시 로그인하기</Link>
        </Button>
      </div>
    </>
  );
};
export default ErrorPage;
