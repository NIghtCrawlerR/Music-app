import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../Sidebar';

import { Layout as LayoutWrap, MainContainer, ContentWrap } from './styles';

const Layout = ({ children }) => (
  <LayoutWrap className="Layout">
    <Sidebar />
    <ContentWrap className="ContentWrap">
      <MainContainer className="MainContainer">
        {children}
      </MainContainer>
    </ContentWrap>
  </LayoutWrap>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
