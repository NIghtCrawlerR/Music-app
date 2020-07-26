import styled from 'styled-components';
import { NavLink as ReactLink } from 'react-router-dom';

export const SidebarWrap = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100%;
  padding: 15px;
  border-right: 1px solid #f1f1f1;
  box-sizing: border-box;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Link = styled(ReactLink)`
  line-height: 34px;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  transition: all .2s;

  &.active {
    color: #007eff;
  }

  &:hover {
    color: #007eff;
    text-decoration: none;
  }
`;

export const LinkChild = styled(Link)`
  margin-left: 20px;
  line-height: 28px;
  font-size: 14px;
  font-weight: 400;
  text-transform: capitalize;
`;
