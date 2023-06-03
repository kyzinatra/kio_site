import React, { FC, PropsWithChildren } from 'react';
import { Header } from '../header/header.component';
import { Footer } from '../footer/footer.component';

export const Layout: FC<PropsWithChildren<ILayout>> = ({ withNav, withFooter, children }) => {
  return (
    <>
      <Header withNav={withNav} />
      {children}
      {withFooter && <Footer />}
    </>
  );
};
