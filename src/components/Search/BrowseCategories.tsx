import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import GenreCard from './GenreCard';

const categories = [
  { title: 'Hip Hop', color: '#E8822C', image: 'https://images.unsplash.com/photo-1577648735394-9c41449a1f6f' },
  { title: 'Dance / Electronic', color: '#4B917D', image: 'https://images.unsplash.com/photo-1571173069043-82a7a13cee9f' },
  { title: 'Pop', color: '#DC148C', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819' },
  { title: 'Charts', color: '#8D67AB', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4' },
  { title: 'Mood', color: '#477D95', image: 'https://images.unsplash.com/photo-1513682322455-ea8b2d81d418' },
  { title: 'New Releases', color: '#509BF5', image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae' },
  { title: 'Discover', color: '#B49BC8', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d' },
  { title: 'Party', color: '#E8115B', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819' },
  { title: 'Workout', color: '#777777', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438' },
];

const BrowseCategories = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
        Browse all
      </Typography>
      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid item key={category.title} xs={12} sm={6} md={4} lg={3}>
            <GenreCard
              title={category.title}
              color={category.color}
              image={category.image}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BrowseCategories;