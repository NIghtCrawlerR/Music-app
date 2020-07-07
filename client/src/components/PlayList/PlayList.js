import React from 'react';
import PropTypes from 'prop-types';

import PlayListItem from './PlayListItem';

const PlayList = ({ playlists }) => (
  <div>
    {playlists.map((playlist) => (
      <PlayListItem key={playlist.id} playlist={playlist} />
    ))}
  </div>
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
