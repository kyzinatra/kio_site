import React, { FC, PropsWithChildren } from 'react';
import { Header } from '../header/header.component';
import { Footer } from '../footer/footer.component';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { useMeRequest } from '../../api';
import { Toast } from '../toast/toast.component';

/**
 * @description Layout HOC for base settings for all pages
 * @param {boolean} withNav - if true, renders the navigation bar
 * @param {boolean} withHelp - if true, renders the help button
 * @param {boolean} withFooter - if true, renders the footer
 * @param {string} protectedFrom - if 'anonymous', redirects to default route if user is not logged in, if 'authorized', redirects to default route if user is logged in
 */
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
      <Toast />
    </>
  );
};
