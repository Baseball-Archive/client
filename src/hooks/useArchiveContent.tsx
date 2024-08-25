import { useQuery } from '@tanstack/react-query';
import { getArchiveContent } from '../apis/archive';
import { ArchiveContent } from '../types/Archive';

const useArchiveContent = (id: string) => {
  const {
    data: archiveContent,
    isError,
    isLoading,
    refetch,
  } = useQuery<ArchiveContent>({
    queryKey: ['ArchiveContent', id],
    queryFn: () => getArchiveContent(id),
  });
  return { archiveContent, isError, isLoading, refetch };
};

export default useArchiveContent;
