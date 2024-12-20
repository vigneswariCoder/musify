import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

interface GenreCardProps {
  title: string;
  color: string;
  image?: string;
}

const GenreCard: React.FC<GenreCardProps> = ({ title, color, image }) => {
  return (
    <Paper
      sx={{
        position: 'relative',
        height: 180,
        overflow: 'hidden',
        cursor: 'pointer',
        bgcolor: color,
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
          {title}
        </Typography>
      </Box>
      {image && (
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            position: 'absolute',
            bottom: -10,
            right: -10,
            width: 100,
            height: 100,
            transform: 'rotate(25deg)',
          }}
        />
      )}
    </Paper>
  );
};

export default GenreCard;