import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Overview from './routes/Overview';
import Albums from './routes/Albums';
import Artists from './routes/Artists';
import Playlists from './routes/Playlists';

const Profile = () => (
  <Switch>
    <Route path="/profile/:userId/playlists" component={Playlists} />
    <Route path="/profile/:userId/artists" component={Artists} />
    <Route path="/profile/:userId/albums" component={Albums} />
    <Route path="/profile/:userId" component={Overview} />
    <Redirect to="/profile/:userId" />
  </Switch>
);

export default Profile;
