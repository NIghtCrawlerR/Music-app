import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../Sidebar';

import { Layout as LayoutWrap, MainContainer } from './styles';

const Layout = ({ children }) => (
  <LayoutWrap className="Layout">
    <Sidebar />
    <MainContainer className="MainContainer">
      {children}
    </MainContainer>
  </LayoutWrap>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
