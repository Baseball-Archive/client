// import { db, collection, addDoc } from './firebaseConfig';
import { useState } from 'react';
import PostInfoSection from './PostInfoSection';
import PostPickWeather from './PostPickWeather';
import PostPickDate from './PostPickDate';
import PostPickMatch from './PostPickMatch';
import PostMatchReview from './PostMatchReview';

const PostInfo = () => {
  const [title, setTitle] = useState('');
  const [weather, setWeather] = useState<string | null>(null);
  const [date, setDate] = useState<string>('');
  const [match, setMatch] = useState<{ home: string; away: string }>({ home: '', away: '' });
  const [winningTeam, setWinningTeam] = useState<string>('kia');
  const [review, setReview] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = {
      title,
      weather,
      date,
      match,
      winningTeam,
      review,
    };

    try {
      // const docRef = await addDoc(collection(db, 'posts'), formData);
      // console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <form className="container pt-6 scrollbar-hide" onSubmit={handleSubmit}>
      <PostInfoSection label="제목">
        <input
          className="w-full px-4 outline-none"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </PostInfoSection>

      <PostInfoSection label="날씨">
        <PostPickWeather onSelectWeather={setWeather} />
      </PostInfoSection>

      <PostInfoSection label="경기 날짜">
        <PostPickDate onSelectDate={setDate} />
      </PostInfoSection>

      <PostInfoSection label="홈 vs 원정">
        <PostPickMatch onSelectMatch={setMatch} />
      </PostInfoSection>

      <div className="mt-2">
        <label className="mb-2 block text-base font-medium">승리 팀</label>
        <div className="relative">
          <select
            name="승리 팀"
            className="w-full h-12 px-4 appearance-none rounded-[4px] border text-lg"
            value={winningTeam}
            onChange={(e) => setWinningTeam(e.target.value)}
          >
            <option value="kia">KIA 타이거즈</option>
            <option value="samsung">삼성 라이온즈</option>
            <option value="lg">LG 트윈스</option>
            <option value="doosan">두산 베어스</option>
            <option value="ssg">SSG 랜더스</option>
            <option value="kt">KT 위즈</option>
            <option value="nc">NC 다이노스</option>
            <option value="hanhwa">한화 이글스</option>
            <option value="lotte">롯데 자이언츠</option>
            <option value="kiwoom">키움 히어로즈</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <PostMatchReview onSetReview={setReview} />

      <div className="mb-10 mt-6 flex flex-col">
        <button type="submit" className="my-10 h-20 rounded-[10px] bg-black text-2xl font-medium text-white">
          게시글 등록
        </button>
      </div>
    </form>
  );
};

export default PostInfo;
