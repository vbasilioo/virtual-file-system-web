import { IApiRoot } from '.';

export interface IFile {
  id?: number;
  path: string;
  name: string;
  size: number;
  directoryID: number;
}

export interface IGetFiles extends IApiRoot {
  data: IFile[];
}
