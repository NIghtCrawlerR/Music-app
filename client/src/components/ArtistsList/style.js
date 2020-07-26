import styled from 'styled-components';

import { CoverWrap, ListItem } from 'styledComponents';

export const ArtistCover = styled(CoverWrap)`
  border-radius: 50%;
`;

export const ArtistWrap = styled(ListItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
