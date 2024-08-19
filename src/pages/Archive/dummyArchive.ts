import type { Archive } from '../../types/Archive';

export const dummyData: Archive = {
  id: 1,
  title: '제목 요약ㅇㅇㅇㅇㅇ 관련된 내용',
  photo:
    'https://firebasestorage.googleapis.com/v0/b/hotsix-blog-5f9b1.appspot.com/o/image%2F1723386154075?alt=media&token=04777f33-ef7b-4c50-bb0c-b748c2f6b8cf',
  weather: 'cloud',
  review:
    '한화 연승? 🔥🔥                🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥',
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
