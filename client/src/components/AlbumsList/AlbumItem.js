import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ListItem } from 'styledComponents';

const AlbumItem = ({
  album: {
    id,
    title,
    coverMedium,
  },
}) => (
  <ListItem className="AlbumItem">
    <img src={coverMedium} alt="" />
    <Link to={`/album/${id}`}>
      <h3>{title}</h3>
    </Link>
  </ListItem>
);

AlbumItem.propTypes = {
  album: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    coverMedium: PropTypes.string,
  }).isRequired,
};

export default AlbumItem;
