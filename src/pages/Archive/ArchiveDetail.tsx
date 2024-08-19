import Archive from '../../components/Archive/Archive';
import AddComment from '../../components/Community/Comment/AddComment';
import Comment from '../../components/Community/Comment/Comment';
import { ArchiveInfo } from '../../types/Archive';
import { dummyComment } from './dummyComment';

const dummyData: ArchiveInfo = {
  id: 1,
  title: '제목 요약ㅇㅇㅇㅇㅇ 관련된 내용',
  photo:
    'https://firebasestorage.googleapis.com/v0/b/hotsix-blog-5f9b1.appspot.com/o/image%2F1723386154075?alt=media&token=04777f33-ef7b-4c50-bb0c-b748c2f6b8cf',
  weather: 'cloud',
  review:
    '한화 연승?       한화연승!!!!    한화연승!     한화연승!    한화연승!    한화연승! \n     한화연승!    한화연승! \n     한화연승!    한화연승!    한화연승!    한화연승!    한화연승!\n',
  userId: 'baseball.lover',
  matchData: {
    homeTeam: 'hanhwa',
    awayTeam: 'nc',
    matchDate: '2023-08-01',
    stadium: '광주기아챔피언스필드',
  },
  result: { homeTeam: 7, awayTeam: 5 },
  isPublic: false,
};

const ArchiveDetail = () => {
  return (
    <div className="container relative mb-32 px-2 pt-7">
      <Archive data={dummyData} />
      <pre className="w-full whitespace-pre-wrap font-title text-sm">
        {dummyData.review}
      </pre>
      <div className="mt-8 border-t-2">
        {dummyComment.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
        <AddComment />
      </div>
    </div>
  );
};

export default ArchiveDetail;
