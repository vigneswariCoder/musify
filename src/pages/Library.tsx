import React, { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import { currentUser } from '../data/mockData';
import SongList from '../components/SongList/SongList';
import { Song } from '../types/music';
import { useNavigate } from 'react-router-dom';

interface LibraryProps {
  onSongSelect: (song: Song) => void;
}

const Library: React.FC<LibraryProps> = ({ onSongSelect }) => {
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Your Library</Typography>

      <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab label="Playlists" />
        <Tab label="Liked Songs" />
        <Tab label="Albums" />
      </Tabs>

      {tabValue === 0 && (
        <Grid container spacing={3}>
          {currentUser.playlists.map((playlist) => (
            <Grid item key={playlist.id} xs={12} sm={6} md={4} lg={3}>
              <Card 
                sx={{ cursor: 'pointer' }}
                onClick={() => navigate(`/playlist/${playlist.id}`)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={playlist.coverUrl}
                  alt={playlist.name}
                />
                <CardContent>
                  <Typography variant="h6">{playlist.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {playlist.songs.length} songs
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {tabValue === 1 && (
        <SongList songs={currentUser.playlists[0].songs} onSongSelect={onSongSelect} />
      )}

      {tabValue === 2 && (
        <Typography variant="body1" color="text.secondary">
          No albums added yet.
        </Typography>
      )}
    </Box>
  );
};

export default Library;