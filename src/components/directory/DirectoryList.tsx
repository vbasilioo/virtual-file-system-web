'use client';

import { IDirectory } from '@/interfaces/directory';
import { useGetDirectories } from '@/hooks/directories/directories';
import { DirectoryItem } from './DirectoryItem';

export default function DirectoryList() {
  const { directories, isLoadingDirectories } = useGetDirectories();

  if (isLoadingDirectories) return <div>Carregando...</div>;
  if (!directories || !directories.data) return <div>Erro ao carregar os diretórios.</div>;

  return (
    <div className="flex flex-col items-center pt-10">
      <h2 className="text-2xl font-bold mb-4">Diretórios</h2>
      <ul className="list-none">
        {directories.data.map((directory: IDirectory) => (
          <DirectoryItem key={directory.id} directory={directory} />
        ))}
      </ul>
    </div>
  );
}
