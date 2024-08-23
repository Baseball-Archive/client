import Archive from '../../components/Archive/Archive';
import { auth } from '../../service/firebase';
import { dummyData } from './dummyArchive';

const Archives = () => {
  return (
    <div className="container relative mb-32 pt-7">
      <Archive data={dummyData} />
      <Archive data={dummyData} />
      <Archive data={dummyData} />
      <Archive data={dummyData} isCommunityArchives={true} />
    </div>
  );
};
export default Archives;
