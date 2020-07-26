import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';

import PropTypes from 'utils/propTypes';
import InlineNavigation from 'components/InlineNavigation';
import navigationItems from './config';
import TopTracks from './routes/TopTracks';
import Albums from './routes/Albums';
import QUERY from './graphql/ArtistQuery';

const Artist = ({ match: { params: { artistId } } }) => {
  const artistQuery = useQuery(QUERY, {
    variables: {
      artistId,
    },
  });

  const artist = get(artistQuery, 'data.artist', {});
  const { name, pictureMedium } = artist;

  return (
    <>
      <h3>{name}</h3>
      <img src={pictureMedium} alt="" />
      <InlineNavigation navigation={navigationItems({ path: `/artist/${artistId}` })} />

      <Switch>
        <Route path="/artist/:artistId" exact />
        <Route path="/artist/:artistId/top_tracks" component={TopTracks} exact />
        <Route path="/artist/:artistId/albums" component={Albums} exact />
        <Redirect to="/artist/:artistId" />
      </Switch>
    </>
  );
};

Artist.propTypes = {
  match: PropTypes.match.isRequired,
};

export default Artist;
