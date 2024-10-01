import { useQuery } from '@tanstack/react-query';
import { IGetFiles } from '@/interfaces/file';
import { getFiles } from '@/app/api/files/file';

export const useGetFiles = () => {
  const { data: files, isLoading: isLoadingFiles } = useQuery<IGetFiles>({
    queryKey: ['get-files'],
    queryFn: () => getFiles(),
  });

  return {
    files,
    isLoadingFiles,
  };
};
