import React from 'react';
import { Box, Typography } from '@mui/material';

const WelcomeSection = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white' }}>
        {getGreeting()}
      </Typography>
    </Box>
  );
};

export default WelcomeSection;