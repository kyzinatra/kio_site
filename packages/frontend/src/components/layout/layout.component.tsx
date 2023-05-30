import React, { FC, PropsWithChildren } from 'react';
import { Header } from '../header/header.component';
import { Footer } from '../footer/footer.component';
import { useMeRequest } from '../../packages/hooks/use-query/use-me-request';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

export const Layout: FC<PropsWithChildren<ILayout>> = ({
  withNav,
  withHelp,
  withFooter,
  children,
  protectedFrom
}) => {
  const { isLoading, error, data } = useMeRequest();

  if (isLoading) return <h1>Loading...</h1>;

  if (
    (error?.name === 'UNAUTHORIZED' && protectedFrom === 'anonymous') ||
    (data && protectedFrom === 'authorized')
  ) {
    return <Navigate to={ROUTES.DEFAULT_ROUTE} />;
  }

  return (
    <>
      <Header withNav={withNav} withHelp={withHelp} />
      {children}
      {withFooter && <Footer />}
    </>
  );
};
