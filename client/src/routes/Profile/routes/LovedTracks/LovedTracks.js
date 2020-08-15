import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';

import PropTypes from 'utils/propTypes';
import TrackList from 'components/TrackList';
import { Heading1 } from 'styledComponents';
import QUERY from './graphql/LovedTracksQuery';

const LovedTracks = ({ match: { params: { userId } } }) => {
  const lovedTracksQuery = useQuery(QUERY, {
    variables: {
      userId,
    },
  });

  const { data, loading } = lovedTracksQuery;
  const lovedTracks = get(data, 'loved.data', []);
  const count = get(lovedTracksQuery, 'data.loved.count', []);

  return (
    <>
      <Heading1>{`${count} tracks`}</Heading1>
      <TrackList tracks={lovedTracks} loading={loading} />
    </>
  );
};

LovedTracks.propTypes = {
  match: PropTypes.match.isRequired,
};

export default LovedTracks;
