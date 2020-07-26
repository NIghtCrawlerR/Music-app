import React from 'react';
import {
  Switch, Route, Redirect, withRouter,
} from 'react-router-dom';

import PropTypes from 'utils/propTypes';
import InlineNavigation from 'components/InlineNavigation';
import navigationItems from './config';
import Overview from './routes/Overview';
import Albums from './routes/Albums';
import Artists from './routes/Artists';
import Playlists from './routes/Playlists';
import LovedTracks from './routes/LovedTracks';

const Profile = ({ match: { params: { userId } } }) => (
  <>
    <InlineNavigation navigation={navigationItems({ path: `/profile/${userId}` })} />
    <Switch>
      <Route path="/profile/:userId/loved" component={LovedTracks} />
      <Route path="/profile/:userId/playlists" component={Playlists} />
      <Route path="/profile/:userId/artists" component={Artists} />
      <Route path="/profile/:userId/albums" component={Albums} />
      <Route path="/profile/:userId/overview" component={Overview} />
      <Redirect to="/profile/:userId/overview" />
    </Switch>
  </>
);

Profile.propTypes = {
  match: PropTypes.match.isRequired,
};

export default withRouter(Profile);
