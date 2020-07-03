import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistItem = ({
  playlist: {
    id,
    title,
    picture_medium,
  },
}) => (
    <div>
      <img src={picture_medium} />
      <Link to={`playlists/${id}`}>
        <h3>{title}</h3>
      </Link>
    </div>
  );

export default PlaylistItem;