import React from 'react';
import PropTypes from 'prop-types';

import { List } from 'styledComponents';
import ArtistItem from './ArtistItem';

const ArtistsList = ({ artists }) => (
  <List className="ArtistsList">
    {artists.map((artist) => (
      <ArtistItem key={artist.id} artist={artist} />
    ))}
  </List>
);

ArtistsList.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      pictureMedium: PropTypes.string,
    }),
  ).isRequired,
};

export default ArtistsList;
