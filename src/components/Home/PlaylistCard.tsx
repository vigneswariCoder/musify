import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import { Playlist } from '../../types/music';

interface PlaylistCardProps {
  playlist: Playlist;
  onClick: () => void;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist, onClick }) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        display: 'flex',
        bgcolor: 'background.paper',
        cursor: 'pointer',
        transition: 'all 0.3s',
        '&:hover': {
          bgcolor: 'action.hover',
          transform: 'scale(1.02)',
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 80, height: 80 }}
        image={playlist.coverUrl}
        alt={playlist.name}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <CardContent sx={{ flex: '1 0 auto', p: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {playlist.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {playlist.description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default PlaylistCard;