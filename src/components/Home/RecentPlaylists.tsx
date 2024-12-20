import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import PlaylistCard from './PlaylistCard';
import { useNavigate } from 'react-router-dom';
import { Playlist } from '../../types/music';

interface RecentPlaylistsProps {
  playlists: Playlist[];
}

const RecentPlaylists: React.FC<RecentPlaylistsProps> = ({ playlists }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ mb: 4 }}>
      <Grid container spacing={2}>
        {playlists.map((playlist) => (
          <Grid item key={playlist.id} xs={12} sm={6} md={4}>
            <PlaylistCard
              playlist={playlist}
              onClick={() => navigate(`/playlist/${playlist.id}`)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RecentPlaylists;