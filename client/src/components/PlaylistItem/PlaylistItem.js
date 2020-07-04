import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PlaylistItem = ({
  playlist: {
    id,
    title,
    pictureMedium,
  },
}) => (
  <div>
    <img src={pictureMedium} alt="" />
    <Link to={`playlists/${id}`}>
      <h3>{title}</h3>
    </Link>
  </div>
);

PlaylistItem.propTypes = {
  playlist: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    pictureMedium: PropTypes.string,
  }).isRequired,
};

export default PlaylistItem;
