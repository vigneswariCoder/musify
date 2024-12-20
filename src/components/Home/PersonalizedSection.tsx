import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Playlist } from '../../types/music';

interface SectionProps {
  title: string;
  playlists: Playlist[];
}

const PersonalizedSection: React.FC<SectionProps> = ({ title, playlists }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {playlists.map((playlist) => (
          <Grid item key={playlist.id} xs={12} sm={6} md={3} lg={2.4}>
            <Card
              sx={{
                bgcolor: 'background.paper',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
              onClick={() => navigate(`/playlist/${playlist.id}`)}
            >
              <CardMedia
                component="img"
                height="160"
                image={playlist.coverUrl}
                alt={playlist.name}
              />
              <CardContent>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {playlist.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {playlist.songs.length} songs
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PersonalizedSection;