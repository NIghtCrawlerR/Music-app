import React from 'react';
import PropTypes from 'prop-types';

import AlbumItem from './AlbumItem';

const AlbumsList = ({ albums }) => (
  <div>
    {albums.map((album) => (
      <AlbumItem key={album.id} album={album} />
    ))}
  </div>
);

AlbumsList.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      coverMedium: PropTypes.string,
    }),
  ).isRequired,
};

export default AlbumsList;
