import React from 'react';

import TrackItem from './TrackItem';

const TrackList = ({ tracks }) => (
  <div>
    {tracks.map(track => (
      <TrackItem key={track.id} track={track} />
    ))}
  </div>
);
 
export default TrackList;