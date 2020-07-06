import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';

import PropTypes from 'utils/propTypes';
import Album from 'components/Album';
import QUERY from './graphql/ArtistAlbumsQuery';

const Albums = ({ match: { params: { artistId } } }) => {
  const albumsQuery = useQuery(QUERY, {
    variables: {
      artistId,
    },
  });

  const albums = get(albumsQuery, 'data.artistAlbums', []);

  return (
    <div>
      {albums.map((album) => (
        <Album key={album.id} album={album} />
      ))}
    </div>
  );
};

Albums.propTypes = {
  match: PropTypes.match.isRequired,
};

export default Albums;
