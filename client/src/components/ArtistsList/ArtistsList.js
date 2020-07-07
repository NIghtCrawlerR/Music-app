import React from 'react';
import PropTypes from 'prop-types';

import ArtistItem from './ArtistItem';

const ArtistsList = ({ artists }) => (
  <div>
    {artists.map((artist) => (
      <ArtistItem key={artist.id} artist={artist} />
    ))}
  </div>
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
