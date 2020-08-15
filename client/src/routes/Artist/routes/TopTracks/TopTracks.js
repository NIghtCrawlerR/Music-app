import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';

import PropTypes from 'utils/propTypes';
import TrackList from 'components/TrackList';
import QUERY from './graphql/ArtistTopTracksQuery';

const TopTracks = ({ match: { params: { artistId } } }) => {
  const tracksQuery = useQuery(QUERY, {
    variables: {
      artistId,
    },
  });

  const { data, loading } = tracksQuery;
  const tracks = get(data, 'artistTopTracks', []);

  return (
    <TrackList tracks={tracks} loading={loading} />
  );
};

TopTracks.propTypes = {
  match: PropTypes.match.isRequired,
};

export default TopTracks;
