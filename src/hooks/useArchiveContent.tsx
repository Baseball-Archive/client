import { useQuery } from '@tanstack/react-query';
import { getArchiveContent } from '../apis/archive';
import { ArchiveContent } from '../types/Archive';

const useArchiveContent = (id: string | undefined) => {
  return useQuery({
    queryKey: ['ArchiveContent', id],
    queryFn: async () => {
      if (!id) {
        throw new Error('Board Id가 없습니다.');
      }
      const data = await getArchiveContent(id);
      if (!data) {
        throw new Error('Data가 없습니다.');
      }
      return data;
    },
    enabled: !!id,
  });
};

export default useArchiveContent;
