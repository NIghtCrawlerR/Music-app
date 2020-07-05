import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'routes/Home';
import Playlist from 'routes/Playlist';
import Artist from 'routes/Artist';
import Profile from 'routes/Profile';
import Layout from '../Layout';

const Root = () => (
  <Layout>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/playlist" component={Playlist} />
      <Route path="/profile" component={Profile} />
      <Route path="/artist/:artistId" component={Artist} />
    </Switch>
  </Layout>
);

export default Root;
