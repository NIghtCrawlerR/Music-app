import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';

import PropTypes from 'utils/propTypes';
import TrackList from 'components/TrackList';
import TRACKS_QUERY from './graphql/AlbumTracksQuery';
import ALBUM_QUERY from './graphql/AlbumQuery';

const Album = ({ match: { params: { albumId } } }) => {
  const albumTracksQuery = useQuery(TRACKS_QUERY, {
    variables: {
      albumId,
    },
  });

  const albumQuery = useQuery(ALBUM_QUERY, {
    variables: {
      albumId,
    },
  });

  const { data: tracksData, loading } = albumTracksQuery;

  const album = get(albumQuery, 'data.album', {});
  const tracks = get(tracksData, 'albumTracks', []);

  return (
    <>
      <h3>{album.title}</h3>
      <img src={album.coverMedium} alt="" />

      <TrackList tracks={tracks} showArtist={false} showAlbum={false} loading={loading} />
    </>
  );
};

Album.propTypes = {
  match: PropTypes.match.isRequired,
};

export default Album;
