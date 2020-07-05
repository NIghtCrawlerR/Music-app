import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Artist = ({
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

Artist.propTypes = {
  artist: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    pictureMedium: PropTypes.string,
  }).isRequired,
};

export default Artist;
