import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { IDirectory } from '@/interfaces/directory';
import { IFile } from '@/interfaces/file';

export default function Dashboard() {
  const [directory, setDirectory] = useState<IDirectory>({ path: '', name: '', children: [] });
  const [child, setChild] = useState<Omit<IDirectory, 'children'>>({ path: '', name: '' });
  const [children, setChildren] = useState<IDirectory[]>([]);

  const [file, setFile] = useState<IFile>({ path: '', name: '', size: 0, directoryID: 0 });
  const [files, setFiles] = useState<IFile[]>([]);

  const addChildDirectory = () => {
    if (child.path && child.name) {
      setChildren([...children, { ...child, children: [] }]);
      setChild({ path: '', name: '' });
    }
  };

  const addFile = () => {
    if (file.path && file.name && file.size > 0 && file.directoryID) {
      setFiles([...files, { ...file }]);
      setFile({ path: '', name: '', size: 0, directoryID: 0 });
    }
  };

  const saveDirectory = () => {
    const directoryData: IDirectory = {
      ...directory,
      children: children,
    };

    files.forEach((file) => {
      const fileData = {
        path: file.path,
        name: file.name,
        size: file.size,
        directory: { id: file.directoryID },
      };
    });
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav className="grid gap-4 text-sm text-muted-foreground">
            <Link href="#" className="font-semibold text-primary">
              Geral
            </Link>
            <Link href="/directories">Diretórios</Link>
            <Link href="/files">Arquivos</Link>
          </nav>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Diretórios</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="text-sm">Caminho do Diretório Principal</label>
                      <Input
                        placeholder="Caminho do Diretório Principal"
                        value={directory.path}
                        onChange={(e) => setDirectory({ ...directory, path: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm">Nome do Diretório Principal</label>
                      <Input
                        placeholder="Nome do Diretório Principal"
                        value={directory.name}
                        onChange={(e) => setDirectory({ ...directory, name: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold">Adicionar Diretório Filho</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm">Caminho do Diretório Filho</label>
                        <Input
                          placeholder="Caminho do Diretório Filho"
                          value={child.path}
                          onChange={(e) => setChild({ ...child, path: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="text-sm">Nome do Diretório Filho</label>
                        <Input
                          placeholder="Nome do Diretório Filho"
                          value={child.name}
                          onChange={(e) => setChild({ ...child, name: e.target.value })}
                        />
                      </div>
                    </div>
                    <Button type="button" onClick={addChildDirectory} className="mt-4">
                      Adicionar Diretório Filho
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Arquivos</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="text-sm">Caminho do Arquivo</label>
                      <Input
                        placeholder="Caminho do Arquivo"
                        value={file.path}
                        onChange={(e) => setFile({ ...file, path: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm">Nome do Arquivo</label>
                      <Input
                        placeholder="Nome do Arquivo"
                        value={file.name}
                        onChange={(e) => setFile({ ...file, name: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="text-sm">Tamanho do Arquivo (em bytes)</label>
                      <Input
                        placeholder="Aqui é o tamanho do arquivo"
                        value={file.size}
                        type="number"
                        onChange={(e) => setFile({ ...file, size: Number(e.target.value) })}
                      />
                    </div>
                    <div>
                      <label className="text-sm">ID do Diretório</label>
                      <Input
                        placeholder="ID do Diretório"
                        value={file.directoryID}
                        type="number"
                        onChange={(e) => setFile({ ...file, directoryID: Number(e.target.value) })}
                      />
                    </div>
                  </div>
                  <Button type="button" onClick={addFile} className="mt-4">
                    Adicionar Arquivo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
