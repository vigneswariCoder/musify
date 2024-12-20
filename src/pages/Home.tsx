import React from 'react';
import { Box } from '@mui/material';
import WelcomeSection from '../components/Home/WelcomeSection';
import RecentPlaylists from '../components/Home/RecentPlaylists';
import PersonalizedSection from '../components/Home/PersonalizedSection';
import { playlists } from '../data/mockData';

const Home = () => {
  return (
    <Box sx={{ p: 3 }}>
      <WelcomeSection />
      <RecentPlaylists playlists={playlists.topHits} />
      
      <PersonalizedSection
        title="Made For You"
        playlists={playlists.forYou}
      />
      
      <PersonalizedSection
        title="Your Mood"
        playlists={playlists.mood}
      />
      
      <PersonalizedSection
        title="Recently Played"
        playlists={playlists.recent}
      />
    </Box>
  );
};

export default Home;