import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import useStorage from 'hooks/useStorage';
import PropTypes from 'utils/propTypes';
import { AUTH_URL, GET_USER_URL } from 'config';

const AuthProvider = ({ children, location, history }) => {
  const [{ expirationDate }, storage] = useStorage(['expirationDate']);

  const getParams = (hash) => {
    const tokenRegExp = /access_token=(.*)&/;
    const expiresRegExp = /expires=(.*)/;

    const token = hash.match(tokenRegExp)[1];
    const expires = hash.match(expiresRegExp)[1];

    return { token, expires };
  };

  const isTokenExpired = () => {
    const currentDate = new Date().getTime();

    if (!expirationDate) return true;

    return +expirationDate < currentDate;
  };

  const getUserId = (token) => {
    const request = GET_USER_URL(token);

    axios.get(request)
      .then(({ data }) => {
        if (data.id) {
          storage.set('userId', data.id);
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const { hash } = location || {};

    const tokenExpired = isTokenExpired();

    if (token && !tokenExpired) {
      getUserId(token);
    }

    let authWindow;
    let checkConnect;

    if (tokenExpired || (!token && !hash)) {
      authWindow = window.open(AUTH_URL, 'auth', 'width=400,height=400');

      if (authWindow) {
        checkConnect = setInterval(() => {
          const currentToken = localStorage.getItem('token');

          if (currentToken) {
            getUserId(currentToken);

            clearInterval(checkConnect);
            authWindow.close();
          }

          if (!currentToken || tokenExpired) return false;
        }, 100);
      } else {
        const currentToken = localStorage.getItem('token');
        // if popup window is blocked by browser
        // than redirect to auth url
        if (!currentToken) {
          window.location.href = AUTH_URL;
        }
      }
    }

    if (hash) {
      const { token: hashToken, expires } = getParams(hash);
      const newExpirationDate = new Date().getTime() + expires * 1000;

      localStorage.setItem('token', hashToken);
      localStorage.setItem('expirationDate', newExpirationDate);

      history.push('/home');
    }
  }, []);

  return children;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
  history: PropTypes.history.isRequired,
  location: PropTypes.location.isRequired,
};

export default withRouter(AuthProvider);
