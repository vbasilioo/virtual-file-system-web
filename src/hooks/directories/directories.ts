'use client';

import { useQuery } from '@tanstack/react-query';
import { IGetDirectory } from '@/interfaces/directory';
import { getDirectories } from '@/app/api/directories/directories';

export const useGetDirectories = () => {
  const { data: directories, isLoading: isLoadingDirectories } =
    useQuery<IGetDirectory>({
      queryKey: ['get-directories'],
      queryFn: () => getDirectories(),
    });

  return {
    directories,
    isLoadingDirectories,
  };
};
