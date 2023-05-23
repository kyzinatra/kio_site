import type { DEFAULT_ROUTE } from '../constants/routes';

export interface IRoutesElement {
  icon: string;
  title: string;
};

export type TRoutesResult = {
  icon: string;
  title: string;
  path: string;
}[];

export type TRoutesNames = typeof DEFAULT_ROUTE;

export type TRoutesData = {
  [key in TRoutesNames]: IRoutesElement;
};
