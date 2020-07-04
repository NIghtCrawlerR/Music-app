import React from 'react';
import PropTypes from 'prop-types';

const TrackItem = ({ track }) => (
  <div>
    <h3>{track.title}</h3>
  </div>
);

TrackItem.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default TrackItem;
