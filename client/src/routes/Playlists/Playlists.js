import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { USER_PLAYLIST_URL } from 'config';

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);
 
  useEffect(() => {
    const request = {
      url: USER_PLAYLIST_URL,
      method: 'get',
    };

    axios(request)
      .then(({ data }) => setPlaylists(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      Playlists
    </div>
  );
}

export default Playlists;
