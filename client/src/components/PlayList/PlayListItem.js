import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { CoverWrap, ListItem, Heading4 } from 'styledComponents';

const PlayListItem = ({
  playlist: {
    id,
    title,
    pictureMedium,
  },
}) => (
  <ListItem className="PlayListItem">
    <CoverWrap to={`/playlist/${id}`}>
      <img src={pictureMedium} alt="" />
    </CoverWrap>
    <Heading4>
      <Link to={`/playlist/${id}`}>{title}</Link>
    </Heading4>
  </ListItem>
);

PlayListItem.propTypes = {
  playlist: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    pictureMedium: PropTypes.string,
  }).isRequired,
};

export default PlayListItem;
