import React from 'react';
import PropTypes from 'prop-types';

import TrackItem from './TrackItem';

const TrackList = ({ tracks }) => (
  <div>
    {tracks.map((track) => (
      <TrackItem key={track.id} track={track} />
    ))}
  </div>
);

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
};

export default TrackList;
