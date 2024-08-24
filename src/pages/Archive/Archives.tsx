import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getArchives } from '../../apis/archive';
import Archive from '../../components/Archive/Archive';
import Loading from '../../components/common/Loading';
import type { Archive as ArchiveType } from '../../types/Archive';

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

  const sortedArchives = archivesQuery
    ?.slice()
    .sort(
      (a, b) =>
        new Date(b.matchDate as string).getTime() -
        new Date(a.matchDate as string).getTime(),
    );

  return (
    <div className="container mb-32 flex flex-col pt-7">
      {archivesQuery?.length ? (
        sortedArchives?.map((archive) => (
          <Archive
            key={archive.matchDate}
            isCommunityArchives={false}
            data={archive}
          />
        ))
      ) : (
        <div className="mt-16 flex w-full items-center justify-center text-2xl font-bold text-gray-400">
          아카이브를 작성해주세요
        </div>
      )}
      {archivesQuery?.length ? (
        <Archive isCommunityArchives={true} data={archivesQuery[0]} />
      ) : (
        <></>
      )}
    </div>
  );
};
export default Archives;
