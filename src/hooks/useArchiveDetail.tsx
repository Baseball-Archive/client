import { useQuery } from '@tanstack/react-query';
import { getArchiveDetailWithComments } from '../apis/archive';
import { Archive } from '../types/Archive';
import { Comment } from '../types/Comment';

// export interface ArchiveDetailWithComments {
//   posts: Archive;
//   comments: Comment[];
// }

const useArchiveDetail = (id: string) => {
  const { data: getArchiveWithComments, error: getArchiveError } = useQuery<
    Archive,
    Error
  >({
    queryKey: ['ArchiveDetail', id],
    queryFn: () => getArchiveDetailWithComments(id),
  });
  return { getArchiveWithComments, getArchiveError };
};

export default useArchiveDetail;
