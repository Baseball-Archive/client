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
    <div className="container mb-32 flex pt-7">
      {archivesQuery && archivesQuery.length > 0 ? (
        archivesQuery.map((archive) => (
          <Archive key={archive.id} data={archive} />
        ))
      ) : (
        <div className="mt-16 flex w-full items-center justify-center text-2xl font-bold text-gray-400">
          아카이브를 작성해주세요
        </div>
      )}
    </div>
  );
};
export default Archives;
