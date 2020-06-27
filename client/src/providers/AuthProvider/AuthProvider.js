import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
// import axios from 'axios';

import { authUrl } from 'config';

const AuthProvider = ({ children, location, history }) => {
  const getParams = (hash) => {
    const tokenRegExp = /access_token=(.*)&/;
    const expiresRegExp = /expires=(.*)/;

    const token = hash.match(tokenRegExp)[1];
    const expires = hash.match(expiresRegExp)[1];

    return { token, expires };
  }

  const isTokenExpired = () => {
    const expirationDate = localStorage.getItem('expirationDate');
    const currentDate = new Date().getTime();

    if (!expirationDate) return true;

    console.log({
      expirationDate: new Date(+expirationDate),
      currentDate: new Date(currentDate),
    })


    return +expirationDate < currentDate;
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    const { hash } = location || {};

    const tokenExpired = isTokenExpired();

    console.log({ tokenExpired })

    // let authWindow;
    // let checkConnect;

    if (tokenExpired || (!token && !hash)) {
      // authWindow = window.open(authUrl, "auth", "width=400,height=400");

      // checkConnect = setInterval(() => {
      //   const currentToken = localStorage.getItem('token');

      //   if (!currentToken || tokenExpired) return;

      //   clearInterval(checkConnect);
      //   authWindow.close();
      // }, 100);
      window.location.href = authUrl;
    }

    if (hash) {
      const { token, expires } = getParams(hash);
      const expirationDate = new Date().getTime() + expires * 1000;

      localStorage.setItem('token', token);
      localStorage.setItem('expirationDate', expirationDate);

      history.push('/home');
    }
  }, []);

  return (
    <>
      {children}
    </>
  );
};

export default withRouter(AuthProvider);
