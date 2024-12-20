import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
} from '@mui/material';
import { Heart } from 'lucide-react';
import SongList from '../components/SongList/SongList';
import { Song } from '../types/music';
import { songs } from '../data/mockData';

interface LikedSongsProps {
  onSongSelect: (song: Song) => void;
  currentSong: Song[];
}

const LikedSongs: React.FC<LikedSongsProps> = ({ onSongSelect, currentSong }) => {
  const [likedSongs, setLikedSongs] = useState<Song[]>(songs.slice(0, 5));

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              background: 'linear-gradient(45deg, #450af5, #c4efd9)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Heart size={64} fill="white" stroke="white" />
            <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold' }}>
              Liked Songs
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'white' }}>
              {likedSongs.length} songs
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <SongList
            songs={likedSongs}
            onSongSelect={onSongSelect}
            currentSong={currentSong}
            showLikeAnimation
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LikedSongs;