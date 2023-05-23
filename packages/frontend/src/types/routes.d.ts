import type { DEFAULT_ROUTE } from '../constants/routes';

export type IRoutesElement = {
  icon: string;
  title: string;
};

export type IRoutesResult = {
  icon: string;
  title: string;
  path: string;
}[];

export type TRoutesNames = typeof DEFAULT_ROUTE;

export type IRoutesData = {
  [key in TRoutesNames]: IRoutesElement;
};
