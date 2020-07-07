import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';

import PropTypes from 'utils/propTypes';
import ArtistsList from 'components/ArtistsList';
import QUERY from './graphql/ArtistsQuery';

const Artists = ({ match: { params: { userId } } }) => {
  const artistsQuery = useQuery(QUERY, {
    variables: {
      userId,
    },
  });

  const artists = get(artistsQuery, 'data.artists', []);

  return (<ArtistsList artists={artists} />);
};

Artists.propTypes = {
  match: PropTypes.match.isRequired,
};

export default Artists;
