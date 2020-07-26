import React from 'react';

import NAVIGATION from './config';
import {
  SidebarWrap,
  List,
  Link,
  LinkChild,
} from './styles';

const renderChildren = (children) => children.map(({ url, title }) => (
  <LinkChild
    to={url}
    key={url}
    activeClassName="active"
  >
    {title}
  </LinkChild>
));

const renderList = (links) => links.map(({ url, title, children }) => (
  <List key={url} className="SidebarList">
    <Link to={url} activeClassName="active">{title}</Link>

    {children && (
      <List className="SidebarListChildren">
        {renderChildren(children)}
      </List>
    )}
  </List>
));

const Sidebar = () => (
  <SidebarWrap className="Sidebar">
    {renderList(NAVIGATION)}
  </SidebarWrap>
);

export default Sidebar;
