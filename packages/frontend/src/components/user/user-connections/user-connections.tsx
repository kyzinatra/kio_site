import { FC, PropsWithChildren, memo } from 'react';
import { NETWORK_IMAGES } from './constants';
import css from './user-connections.module.css';
const UserConnections: FC<PropsWithChildren> = memo(({ children }) => {
  // TODO
  return (
    <section>
      <h1 className={css['sign-in__title']}>{children}</h1>
      <ul className={css['sign-in__networks']}>
        {NETWORK_IMAGES.map((el, i) => (
          <li key={i}>
            <a href="#">
              <img src={`/networks/${el}-logo.png`} alt={el} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
});

UserConnections.displayName = 'memo(UserConnections)';

export default UserConnections;
