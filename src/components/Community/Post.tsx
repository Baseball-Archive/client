import { Link } from 'react-router-dom';

import { TeamScheme } from '../../types/TeamScheme';
import dayjs from 'dayjs';
import { BASEBALL_TEAMS } from '../../constants/baseballTeams';
import Badge from '../common/Badge';


interface Props {
  away: number;
  createdAt: string;
  home: number;
  title: string;
}


const Post = ({ away, createdAt, home, title }: Props) => {
  return (
    <tr className="border-b">
      <Link to={`/posts/40`} className="flex w-full items-center">
        <td className="w-[30%] py-4 text-center">
          <Badge scheme={BASEBALL_TEAMS[home - 1].value as TeamScheme} />
          <span className="px-2">vs</span>
          <Badge scheme={BASEBALL_TEAMS[away - 1].value as TeamScheme} />
        </td>
        <td className="w-[50%] font-bold">{title}</td>
        <td className="w-[20%] font-light">
          {dayjs(createdAt).format('YYYY.MM.DD')}
        </td>
      </Link>
    </tr>

  );
};

export default Post;
