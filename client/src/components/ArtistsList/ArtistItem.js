import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Heading4 } from 'styledComponents';
import { ArtistCover, ArtistWrap } from './style';

const ArtistItem = ({
  artist: {
    id,
    name,
    pictureMedium,
  },
}) => (
  <ArtistWrap className="ArtistItem">
    <ArtistCover to={`/artist/${id}`}>
      <img src={pictureMedium} alt="" />
    </ArtistCover>
    <Heading4>
      <Link to={`/artist/${id}`}>{name}</Link>
    </Heading4>
  </ArtistWrap>
);

ArtistItem.propTypes = {
  artist: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    pictureMedium: PropTypes.string,
  }).isRequired,
};

export default ArtistItem;
