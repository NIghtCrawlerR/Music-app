import React from 'react';

import useStorage from 'hooks/useStorage';
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

const Sidebar = () => {
  const [{ userId }] = useStorage(['userId']);

  return (
    <SidebarWrap className="Sidebar">
      {renderList(NAVIGATION(userId))}
    </SidebarWrap>
  );
};

export default Sidebar;
