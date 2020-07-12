import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CoverWrap = styled(Link)`
  display: block;
  width: 264px;
  height: 264px;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(25,25,34,.16);
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

  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 990px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ListItem = styled.div`
  max-width: 280px;
`;
