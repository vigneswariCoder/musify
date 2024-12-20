import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import GenreCard from './GenreCard';

const topGenres = [
  { title: 'Hip Hop', color: '#E8822C', image: 'https://images.unsplash.com/photo-1577648735394-9c41449a1f6f' },
  { title: 'Dance / Electronic', color: '#4B917D', image: 'https://images.unsplash.com/photo-1571173069043-82a7a13cee9f' },
  { title: 'Pop', color: '#DC148C', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819' },
];

const TopGenres = () => {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
        Your top genres
      </Typography>
      <Grid container spacing={2}>
        {topGenres.map((genre) => (
          <Grid item key={genre.title} xs={12} sm={6} md={4}>
            <GenreCard
              title={genre.title}
              color={genre.color}
              image={genre.image}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TopGenres;