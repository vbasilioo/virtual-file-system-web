'use client';

import { IDirectory } from '@/interfaces/directory';

export function DirectoryItem({ directory }: { directory: IDirectory }) {
  return (
    <li className="mb-2">
      <div className="flex items-center">
        <span className="font-medium">{directory.name}</span>
      </div>
      {directory.children && directory.children.length > 0 && (
        <ul className="pl-4 mt-2 border-l border-gray-300">
          {directory.children.map((child: IDirectory) => (
            <DirectoryItem key={child.id} directory={child} />
          ))}
        </ul>
      )}
    </li>
  );
}
