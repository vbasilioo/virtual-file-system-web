import { IApiRoot } from '.';

export interface IDirectory {
  id?: number;
  path: string;
  name: string;
  children?: IDirectory[];
}

export interface IGetDirectory extends IApiRoot {
  data: IDirectory[];
}
