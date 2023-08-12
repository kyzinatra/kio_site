import { FC, memo, useRef, useState } from 'react';
import { Nav } from './nav/nav.component';

import { Breadcrumbs } from '../ui-kit/breadcrumbs/breadcrumbs.component';

import css from './header.module.css';

import type { IHeader } from './header';
import { Modal } from '@components/ui-kit/modal/modal.comoponenxt';

export const Header: FC<IHeader> = memo(({ withNav, withHelp }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={css.header__breadcrumbs} onClick={() => setOpen(a => !a)}>
        <Breadcrumbs withHelp={withHelp} />
      </div>
      {withNav && (
        <div className={css.header__nav}>
          <Nav />
        </div>
      )}

      <Modal isOpen={isOpen} onClose={() => setOpen(a => !a)}>
        Хуй
      </Modal>
    </>
  );
});

Header.displayName = 'memo(Header)';
