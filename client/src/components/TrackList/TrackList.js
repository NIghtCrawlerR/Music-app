import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Preloader from 'components/Preloader';
import {
  Table, TableHead, TableBody, TableRow, TableCell,
} from './styles';

const TrackList = ({ tracks, showArtist, showAlbum, loading }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>#</TableCell>
        <TableCell>Title</TableCell>
        {showArtist && <TableCell>Artist</TableCell>}
        {showAlbum && <TableCell>Album</TableCell>}
      </TableRow>
    </TableHead>
    <TableBody>
      {loading && (
        <TableRow>
          <TableCell colSpan="4">
            <Preloader />
          </TableCell>
        </TableRow>
      )}
      {tracks.map((track, i) => (
        <TableRow key={track.id}>
          <TableCell>{i + 1}</TableCell>
          <TableCell>{track.title}</TableCell>
          {showArtist && (
            <TableCell>
              {track.artist && <Link to={`/artist/${track.artist.id}`}>{track.artist.name}</Link>}
            </TableCell>
          )}
          {showAlbum && (
            <TableCell>
              {track.album && <Link to={`/album/${track.album.id}`}>{track.album.title}</Link>}
            </TableCell>
          )}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
  showArtist: PropTypes.bool,
  showAlbum: PropTypes.bool,
  loading: PropTypes.bool,
};

TrackList.defaultProps = {
  showAlbum: true,
  showArtist: true,
  loading: false,
};

export default TrackList;
