import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';

export const SidebarWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItemChildren = styled.div`
  margin-left: 20px;
`;

export const Link = styled(ReactLink)`
  line-height: 30px;
  text-transform: ${(props) => (props.capitalize ? 'capitalize' : 'uppercase')};
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;
