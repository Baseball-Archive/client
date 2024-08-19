import Archive from '../../components/Archive/Archive';
import { dummyData } from './dummyArchive';

const Archives = () => {
  return (
    <div className="container relative mb-32 px-2 pt-7">
      <Archive data={dummyData} />
      <Archive data={dummyData} />
      <Archive data={dummyData} />
      <Archive data={dummyData} />
    </div>
  );
};
export default Archives;
