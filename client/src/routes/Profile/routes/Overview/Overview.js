import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';

import PropTypes from 'utils/propTypes';
import PLAYLISTS_QUERY from '../Playlists/graphql/PlaylistsQuery';
import ARTISTS_QUERY from '../Artists/graphql/ArtistsQuery';
import ALBUMS_QUERY from '../Albums/graphql/AlbumsQuery';

const Overview = ({ match: { params: { userId } } }) => {
  const playlistsQuery = useQuery(PLAYLISTS_QUERY, {
    variables: { userId },
  });
  const albumsQuery = useQuery(ALBUMS_QUERY, {
    variables: { userId },
  });
  const artistsQuery = useQuery(ARTISTS_QUERY, {
    variables: { userId },
  });

  const allPlaylists = get(playlistsQuery, 'data.playlists', []);
  const playlists = allPlaylists.filter(({ isLovedTrack }) => !isLovedTrack);

  const artists = get(artistsQuery, 'data.artists', []);

  const albums = get(albumsQuery, 'data.albums', []);

  return (
    <div>
      Overview
    </div>
  );
};

Overview.propTypes = {
  match: PropTypes.match.isRequired,
};

export default Overview;
