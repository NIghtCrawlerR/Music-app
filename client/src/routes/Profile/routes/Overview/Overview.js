import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';
import { Link } from 'react-router-dom';

import PropTypes from 'utils/propTypes';
import Slider from 'components/Slider';
import AlbumItem from 'components/AlbumsList/AlbumItem';
import ArtistItem from 'components/ArtistsList/ArtistItem';
import Playlist from 'components/PlayList/PlayListItem';
import { Heading2 } from 'styledComponents/headings';
import PLAYLISTS_QUERY from '../Playlists/graphql/PlaylistsQuery';
import ARTISTS_QUERY from '../Artists/graphql/ArtistsQuery';
import ALBUMS_QUERY from '../Albums/graphql/AlbumsQuery';

const ITEMS_LIMIT = 10;

const Overview = ({ match: { params: { userId } } }) => {
  const playlistsQuery = useQuery(PLAYLISTS_QUERY, {
    variables: { userId, limit: ITEMS_LIMIT },
  });
  const albumsQuery = useQuery(ALBUMS_QUERY, {
    variables: { userId, limit: ITEMS_LIMIT },
  });
  const artistsQuery = useQuery(ARTISTS_QUERY, {
    variables: { userId, limit: ITEMS_LIMIT },
  });

  const {
    data: playlistData,
    loading: playlistLoading,
  } = playlistsQuery;

  const {
    data: artistData,
    loading: artistLoading,
  } = artistsQuery;

  const {
    data: albumsData,
    loading: albumsLoading,
  } = albumsQuery;

  const allPlaylists = get(playlistData, 'playlists', []);
  const playlists = allPlaylists.filter(({ isLovedTrack }) => !isLovedTrack);

  const artists = get(artistData, 'artists', []);

  const albums = get(albumsData, 'albums', []);

  return (
    <div>
      <Slider items={playlists} component={Playlist} loading={playlistLoading} propName="playlist">
        <Link to={`/profile/${userId}/playlists`}>
          <Heading2>Playlists</Heading2>
        </Link>
      </Slider>

      <Slider items={albums} component={AlbumItem} loading={artistLoading} propName="album">
        <Link to={`/profile/${userId}/albums`}>
          <Heading2>Albums</Heading2>
        </Link>
      </Slider>

      <Slider items={artists} component={ArtistItem} loading={albumsLoading} propName="artist">
        <Link to={`/profile/${userId}/artists`}>
          <Heading2>Artists</Heading2>
        </Link>
      </Slider>
    </div>
  );
};

Overview.propTypes = {
  match: PropTypes.match.isRequired,
};

export default Overview;
