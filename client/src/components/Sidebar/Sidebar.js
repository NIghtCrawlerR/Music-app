import React from 'react';

import NAVIGATION from './config';
import {
  SidebarWrap,
  List,
  ListItem,
  Link,
  ListItemChildren,
} from './styles';

const renderList = (links, isChildLink = false) => links.map((link) => (
  <ListItem key={link.url} className="SidebarListItem">
    <Link to={link.url} capitalize={isChildLink}>{link.title}</Link>
    {link.children && (
      <ListItemChildren>
        {renderList(link.children, true)}
      </ListItemChildren>
    )}
  </ListItem>
));

const Sidebar = () => (
  <SidebarWrap className="Sidebar">
    <List className="SidebarList">
      {renderList(NAVIGATION)}
    </List>
  </SidebarWrap>
);

export default Sidebar;
