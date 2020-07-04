import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Overview from './routes/Overview';
import Albums from './routes/Albums';
import Artists from './routes/Artists';
import Playlists from './routes/Playlists';

const Profile = () => (
  <Switch>
    <Route path="/profile/playlists" component={Playlists} />
    <Route path="/profile/artists" component={Artists} />
    <Route path="/profile/albums" component={Albums} />
    <Route path="/profile" component={Overview} />
    <Redirect to="/profile" />
  </Switch>
);

export default Profile;
