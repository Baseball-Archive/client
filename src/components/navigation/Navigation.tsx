import { Link } from 'react-router-dom';
import Button from '../common/Button';

// 홈 오늘의야구 커뮤니티 실시간채팅 알림 내정보

const Navigation = () => {
  return (
    <>
      <nav>
        <ul className="flex flex-row md:flex-col">
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/">오늘의 야구</Link>
          </li>
          <li>
            <Link to="/">커뮤니티</Link>
          </li>
          <li>
            <Link to="/">실시간 채팅</Link>
          </li>
          <li>
            <Link to="/">알림</Link>
          </li>
          <li>
            <Link to="/">내 정보</Link>
          </li>
        </ul>
        <Button size="large" scheme="primary">
          경기 기록하기
        </Button>
      </nav>
    </>
  );
};
export default Navigation;
