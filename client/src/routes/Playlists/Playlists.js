import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Playlist from './routes/Playlist';
import PlaylistsList from './routes/PlaylistsList';

const Playlists = () => (
  <Switch>
    <Route path="/playlists" component={PlaylistsList} exact />
    <Route path="/playlists/:playlistId" component={Playlist} exact />
    <Redirect to="/playlists" />
  </Switch>
);

export default Playlists;
