import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from '@apollo/react-hooks';

import { USER_ID } from 'config';
import QUERY from './graphql/PlaylistsQuery';

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  console.log(typeof USER_ID);
  const playlistsQuery = useQuery(QUERY, {
    variables: {
      userId: USER_ID,
    },
  });
 
  // useEffect(() => {
  //   const request = {
  //     url: USER_PLAYLIST_URL,
  //     method: 'get',
  //   };

  //   axios(request)
  //     .then(({ data }) => setPlaylists(data))
  //     .catch(err => console.error(err));
  // }, []);
  console.log(playlistsQuery);

  return (
    <div>
      Playlists
    </div>
  );
}

export default Playlists;
