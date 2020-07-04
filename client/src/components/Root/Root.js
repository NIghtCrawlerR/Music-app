import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from 'routes/Home';
import Playlists from 'routes/Playlists';

const Root = () => (
  <div>
    Root

    <p><Link to="/home">Home</Link></p>
    <p><Link to="/playlists">Playlists</Link></p>

    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/playlists" component={Playlists} />
    </Switch>
  </div>
);

export default Root;
