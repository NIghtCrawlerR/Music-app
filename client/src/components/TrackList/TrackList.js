import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Table, TableHead, TableBody, TableRow, TableCell,
} from './styles';

const TrackList = ({ tracks, showArtist, showAlbum }) => (
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
};

TrackList.defaultProps = {
  showAlbum: true,
  showArtist: true,
};

export default TrackList;
