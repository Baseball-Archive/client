import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getArchives } from '../../apis/archive';
import Archive from '../../components/Archive/Archive';
import type { Archive as ArchiveType } from '../../types/Archive';
import Loading from '../../components/common/Loading';

const Archives = () => {
  const {
    data: archivesQuery,
    error,
    isLoading,
  } = useQuery<ArchiveType[]>({
    queryKey: ['Archives'],
    queryFn: getArchives,
  });
  if (isLoading) return <Loading />;
  if (error) return <div>error:{error.message}</div>;

  return (
    <div className="container relative mb-32 pt-7">
      {archivesQuery ? (
        archivesQuery.map((archive) => (
          <Archive key={archive.id} data={archive} />
        ))
      ) : (
        <div>데이터가 없습니다.</div>
      )}
    </div>
  );
};
export default Archives;
