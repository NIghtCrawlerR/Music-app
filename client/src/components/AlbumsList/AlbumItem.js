import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  ListItem, Heading4, Heading4Sub, CoverWrap,
} from 'styledComponents';

const AlbumItem = ({
  album: {
    id,
    title,
    coverMedium,
    artist,
  },
}) => {
  const { id: artistId, name: artistName } = artist || {};

  return (
    <ListItem className="AlbumItem">
      <CoverWrap to={`/album/${id}`}>
        <img src={coverMedium} alt="" />
      </CoverWrap>
      <Heading4>
        <Link to={`/album/${id}`}>{title}</Link>
      </Heading4>
      <Heading4Sub>
        <Link to={`/artist/${artistId}`}>{artistName}</Link>
      </Heading4Sub>
    </ListItem>
  );
};

AlbumItem.propTypes = {
  album: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    coverMedium: PropTypes.string.isRequired,
    artist: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default AlbumItem;
