import { FC } from 'react';
import { ISwapper } from './swapper';

const Swapper: FC<ISwapper> = ({ children, view }) => {
  return <>{children[view]}</>;
};

export default Swapper;
