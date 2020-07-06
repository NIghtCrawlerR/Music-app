import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';

import PropTypes from 'utils/propTypes';
import TrackList from 'components/TrackList';
import QUERY from './graphql/AlbumTracksQuery';

const Album = ({ match: { params: { albumId } } }) => {
  const albumTracksQuery = useQuery(QUERY, {
    variables: {
      albumId,
    },
  });

  const tracks = get(albumTracksQuery, 'data.albumTracks', []);

  return (
    <TrackList tracks={tracks} />
  );
};

Album.propTypes = {
  match: PropTypes.match.isRequired,
};

export default Album;
