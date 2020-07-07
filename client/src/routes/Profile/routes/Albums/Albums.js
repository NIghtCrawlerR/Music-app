import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';

import PropTypes from 'utils/propTypes';
import AlbumsList from 'components/AlbumsList';
import QUERY from './graphql/AlbumsQuery';

const Albums = ({ match: { params: { userId } } }) => {
  const albumsQuery = useQuery(QUERY, {
    variables: {
      userId,
    },
  });

  const albums = get(albumsQuery, 'data.albums', []);

  return (<AlbumsList albums={albums} />);
};

Albums.propTypes = {
  match: PropTypes.match.isRequired,
};

export default Albums;
