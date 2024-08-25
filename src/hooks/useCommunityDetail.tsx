import { useQuery } from '@tanstack/react-query';
import { getCommunityDetail } from '../apis/community';

const useCommunityDetail = (id: string | undefined) => {
  return useQuery({
    queryKey: ['communityDetail', id],
    queryFn: async () => {
      if (!id) {
        throw new Error('Board Id가 없습니다.');
      }
      const data = await getCommunityDetail(id);
      if (!data) {
        throw new Error('Data가 없습니다.');
      }
      return data;
    },
    enabled: !!id,
  });
};

export default useCommunityDetail;
