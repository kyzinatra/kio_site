import { FC, PropsWithChildren } from 'react';
import { NETWORK_IMAGES } from './constants';
import css from './user-connections.module.css';
const UserConnections: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section>
      <h1 className={css['sign-in__title']}>{children}</h1>
      <ul className={css['sign-in__networks']}>
        {NETWORK_IMAGES.map((el, i) => (
          <li key={i}>
            <img src={`/networks/${el}-logo.png`} alt={el} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UserConnections;
