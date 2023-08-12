import { ROUTES } from '@constants/routes';

export interface IRoutesElement {
  icon: string;
  title: string;
}

export type TRoutesResult = {
  icon: string;
  title: string;
  path: string;
}[];

export type TRoutesNames = (typeof ROUTES)[keyof typeof ROUTES];

export type TRoutesData = {
  [key in TRoutesNames]?: IRoutesElement;
};
