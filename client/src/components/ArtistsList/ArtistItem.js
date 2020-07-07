import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ArtistItem = ({
  artist: {
    id,
    name,
    pictureMedium,
  },
}) => (
  <div>
    <img src={pictureMedium} alt="" />
    <Link to={`/artist/${id}`}>
      <h3>{name}</h3>
    </Link>
  </div>
);

ArtistItem.propTypes = {
  artist: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    pictureMedium: PropTypes.string,
  }).isRequired,
};

export default ArtistItem;
