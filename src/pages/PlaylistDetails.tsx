import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import { playlists } from '../data/mockData';
import SongList from '../components/SongList/SongList';
import { Song } from '../types/music';

interface PlaylistDetailsProps {
  onSongSelect: (song: Song) => void;
  currentSong: Song[];
}

const PlaylistDetails: React.FC<PlaylistDetailsProps> = ({ onSongSelect, currentSong }) => {
  const { id } = useParams();
  const flattenedPlaylists = Object.values(playlists).flat();
  const playlist = flattenedPlaylists.find(p => p.id === id);

  if (!playlist) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography>Playlist not found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
        <img
          src={playlist.coverUrl}
          alt={playlist.name}
          style={{
            width: '100%',
            height: '100%',
            maxWidth: 300,
            maxHeight: 300,
            backgroundSize: 'cover',
            borderRadius: 8,
          }}
        />
        <Box>
          <Typography variant="body1" color="text.light">
            PLAYLIST
          </Typography>
          <Typography variant="h2" sx={{ mt: 2 }}>
            {playlist.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {playlist.songs.length} songs
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {playlist.description} songs
          </Typography>
        </Box>
      </Box>
      <SongList
        songs={playlist.songs}
        onSongSelect={onSongSelect}
        currentSong={currentSong}
      />
    </Box>
  );
};

export default PlaylistDetails;