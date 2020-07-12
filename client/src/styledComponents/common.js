import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CoverWrap = styled(Link)`
  display: block;
  width: 264px;
  height: 264px;
  border-radius: 4px;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const List = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  width: 100%;
`;

export const ListItem = styled.div`
  max-width: 280px;
`;
