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
    <div className="ml-6 mr-6 flex justify-center overflow-hidden bg-white">
      <div className="w-full max-w-lg">
        <Link to={`/posts/40`}>
          <div className="border-t border-gray-300 py-5">
            <div className="flex items-center">
              <p>
                <Badge scheme={BASEBALL_TEAMS[home - 1].value as TeamScheme} />
                <span className="px-2">vs</span>
                <Badge scheme={BASEBALL_TEAMS[away - 1].value as TeamScheme} />
              </p>
              <div className="w-64 overflow-hidden text-ellipsis whitespace-nowrap pl-6 font-bold">
                {title}
              </div>
              <div className="ml-auto">
                <div className="text-sm font-thin text-gray-400">
                  {dayjs(createdAt).format('YYYY.MM.DD')}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Post;
