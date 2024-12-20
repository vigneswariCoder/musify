import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Sidebar from './components/Layout/Sidebar';
import TopBar from './components/Layout/TopBar';
import MusicPlayer from './components/Player/MusicPlayer';
import Home from './pages/Home';
import Search from './pages/Search';
import Library from './pages/Library';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import PlaylistDetails from './pages/PlaylistDetails';
import { Song } from './types/music';
import { songs } from './data/mockData';
import LikedSongs from './pages/LikedSongs';
import CreatePlaylist from './components/Playlist/CreatePlaylist';

export default function App() {
  const [currentSong, setCurrentSong] = useState<Song>(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSongSelect = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
          <Sidebar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              // ml: '240px',
              mb: '120px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <TopBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search onSongSelect={handleSongSelect} currentSong={currentSong} />} />
              <Route path="/library" element={<Library onSongSelect={handleSongSelect} />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/liked-songs" element={<LikedSongs onSongSelect={handleSongSelect} currentSong={currentSong} />} />
              <Route path="/create-playlist" element={<CreatePlaylist />} />
              <Route path="/playlist/:id" element={<PlaylistDetails onSongSelect={handleSongSelect} currentSong={currentSong} />} />
            </Routes>
          </Box>
          <MusicPlayer
            song={currentSong}
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
          />
        </Box>
      </Router>
    </ThemeProvider>
  );
}