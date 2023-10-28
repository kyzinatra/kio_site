import { useMeRequest } from '@api/index';
import { Badge } from '@components/ui-kit/badge/badge.component';

import css from './profile-popup.module.css';
import { PROFILE_CONTENT } from './constant';
import { Link } from '@components/ui-kit/link/link.component';
import { ROUTES } from '@constants/routes';
import { Hr } from '@components/ui-kit/hr/hr';
import { Select } from '@components/ui-kit/select/select.component';
import { Option } from '@components/ui-kit/select/option/option.component';
import { useAtom } from 'jotai';
import { themeAtom } from '@atoms/theme/theme.store';
import { Button } from '@components/ui-kit/button/button.component';

export const ProfilePopup = () => {
  const { data } = useMeRequest();
  const [theme, setTheme] = useAtom(themeAtom);

  if (!data) return null;
  const { avatarUrl, email } = data;

  return (
    <section className={css.popup}>
      <Badge
        to={ROUTES.PROFILE_ROUTE}
        src={avatarUrl || '/default-avatar.svg'}
        className={css.popup__badge}
        width={25}
        height={25}
      >
        {email}
      </Badge>
      <ul className={css.popup__list}>
        {PROFILE_CONTENT.map(el => (
          <li className={css.popup__item} key={el.path}>
            <Link to={el.path} theme="block-hover">
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
      <Hr />
      <ul className={css.popup__list}>
        <li className={css.popup__item}>
          <Link to={ROUTES.HELP_ROUTE} theme="block-hover">
            Поддрежка
          </Link>
        </li>
        <li className={css['popup__nolink-item']}>
          <p>Тема сайта</p>
          <Select isInPopup value={theme} onChange={title => setTheme(title)}>
            <Option name="light">Светлая</Option>
            <Option name="dark">Темная</Option>
            <Option name="system">Системная</Option>
          </Select>
        </li>
      </ul>
      <Hr />
      <ul className={css.popup__list}>
        <li className={css.popup__item}>
          <Link to={ROUTES.DEFAULT_ROUTE} theme="block-hover">
            Домашняя страница
          </Link>
        </li>
        <li className={css.popup__item}>
          <Link to={ROUTES.DEFAULT_ROUTE} theme="block-hover" isAlert>
            Выйти
          </Link>
        </li>
      </ul>

      <Button className={css.popup__subscribe} theme="accent" size="long">
        Оплатить подписку
      </Button>
    </section>
  );
};
