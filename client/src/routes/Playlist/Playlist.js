import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Playlist from './routes/Playlist';

const Playlists = () => (
  <Switch>
    <Route path="/playlist/:playlistId" component={Playlist} exact />
    <Redirect to="/playlist" />
  </Switch>
);

export default Playlists;
