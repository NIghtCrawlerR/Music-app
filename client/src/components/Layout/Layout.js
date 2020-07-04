import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../Sidebar';

import LayoutWrap from './styles';

const Layout = ({ children }) => (
  <LayoutWrap>
    <Sidebar />
    {children}
  </LayoutWrap>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
