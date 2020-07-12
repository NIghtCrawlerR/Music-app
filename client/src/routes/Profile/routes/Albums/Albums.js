import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';

import PropTypes from 'utils/propTypes';
import AlbumsList from 'components/AlbumsList';
import QUERY from './graphql/AlbumsQuery';

import { Heading1 } from 'styledComponents';

const Albums = ({ match: { params: { userId } } }) => {
  const albumsQuery = useQuery(QUERY, {
    variables: {
      userId,
    },
  });

  const albums = get(albumsQuery, 'data.albums', []);

  return (
    <>
      <Heading1>{`${albums.length} albums`}</Heading1>
      <AlbumsList albums={albums} />
    </>
  );
};

Albums.propTypes = {
  match: PropTypes.match.isRequired,
};

export default Albums;
