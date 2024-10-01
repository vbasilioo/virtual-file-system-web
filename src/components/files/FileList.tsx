'use client';

import { IFile } from '@/interfaces/file';
import { useGetFiles } from '@/hooks/files/file';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Skeleton } from '../ui/skeleton';

export default function FileList() {
  const { files, isLoadingFiles } = useGetFiles();

  if (isLoadingFiles) return <div>Carregando...</div>;
  if (!files || !files.data) return <div>Erro ao carregar arquivos.</div>;

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-white text-center">#</TableHead>
            <TableHead className="text-white text-center">Nome</TableHead>
            <TableHead className="text-white text-center">Caminho</TableHead>
            <TableHead className="text-white text-center">Tamanho</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {files.data.length > 0
            ? files.data.map((file: IFile) => (
                <TableRow key={file.id}>
                  <TableCell className="text-center">{file.id}</TableCell>
                  <TableCell className="text-center">{file.name}</TableCell>
                  <TableCell className="text-center">{file.path}</TableCell>
                  <TableCell className="text-center">{file.size}</TableCell>
                </TableRow>
              ))
            : Array.from({ length: 10 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Skeleton className="h-4 w-full bg-gray-300" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-full bg-gray-300" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-full bg-gray-300" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-full bg-gray-300" />
                  </TableCell>
                </TableRow>
              ))}

          {files.data.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} className="text-center">Nenhum arquivo encontrado.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
