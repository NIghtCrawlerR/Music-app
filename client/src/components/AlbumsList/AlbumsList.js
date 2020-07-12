import React from 'react';
import PropTypes from 'prop-types';

import { List } from 'styledComponents';
import AlbumItem from './AlbumItem';

const AlbumsList = ({ albums }) => (
  <List className="AlbumsList">
    {albums.map((album) => (
      <AlbumItem key={album.id} album={album} />
    ))}
  </List>
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
