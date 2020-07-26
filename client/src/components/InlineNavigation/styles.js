import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.div`
  display: flex;
  margin-top: 70px;
  margin-bottom: 50px;
  border-bottom: 1px solid #e6e6e6;
`;

export const NavigationLink = styled(NavLink)`
  position: relative;
  display: block;
  padding: 20px;
  color: #777;
  font-size: 16px;
  transition: all .2s;

  &.active,
  &:hover {
    color: #007eff;

    &::before {
      content: '';
      position: absolute;
      height: 1px;
      width: 100%;
      bottom: 0;
      left: 0;
      background-color: #007eff;
    }
  }

  &:hover {
    text-decoration: none;
  }
`;
