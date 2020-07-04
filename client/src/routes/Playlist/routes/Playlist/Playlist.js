import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';
import PropTypes from 'prop-types';

import TrackList from 'components/TrackList';
import QUERY from './graphql/PlaylistTracksQuery';

const Playlist = ({ match: { params: { playlistId } } }) => {
  const playlistTracksQuery = useQuery(QUERY, {
    variables: {
      playlistId,
    },
  });

  const tracks = get(playlistTracksQuery, 'data.playlistTracks', []);

  return (
    <div>
      <TrackList tracks={tracks} />
    </div>
  );
};

Playlist.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      playlistId: PropTypes.string,
    }),
  }).isRequired,
};

export default Playlist;
