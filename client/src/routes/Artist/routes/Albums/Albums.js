import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';

import PropTypes from 'utils/propTypes';
import AlbumsList from 'components/AlbumsList';
import QUERY from './graphql/ArtistAlbumsQuery';

const Albums = ({ match: { params: { artistId } } }) => {
  const albumsQuery = useQuery(QUERY, {
    variables: {
      artistId,
    },
  });

  const albums = get(albumsQuery, 'data.artistAlbums', []);

  return (<AlbumsList albums={albums} />);
};

Albums.propTypes = {
  match: PropTypes.match.isRequired,
};

export default Albums;
