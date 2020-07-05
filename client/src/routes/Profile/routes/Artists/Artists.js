import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';

import PropTypes from 'utils/propTypes';
import Artist from 'components/Artist';
import QUERY from './graphql/ArtistsQuery';

const Artists = ({ match: { params: { userId } } }) => {
  const artistsQuery = useQuery(QUERY, {
    variables: {
      userId,
    },
  });

  const artists = get(artistsQuery, 'data.artists', []);
  console.log(artists);

  return (
    <div>
      {artists.map((artist) => (
        <Artist key={artist.id} artist={artist} />
      ))}
    </div>
  );
};

Artists.propTypes = {
  match: PropTypes.match.isRequired,
};

export default Artists;
