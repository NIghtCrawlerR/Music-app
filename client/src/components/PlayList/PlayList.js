import React from 'react';
import PropTypes from 'prop-types';

import { List } from 'styledComponents';
import PlayListItem from './PlayListItem';

const PlayList = ({ playlists }) => (
  <List className="PlayList">
    {playlists.map((playlist) => (
      <PlayListItem key={playlist.id} playlist={playlist} />
    ))}
  </List>
);

PlayList.propTypes = {
  playlists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      pictureMedium: PropTypes.string,
    }),
  ).isRequired,
};

export default PlayList;
