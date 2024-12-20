import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Grid,
  Paper,
  Container,
} from '@mui/material';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Repeat,
  Shuffle,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { Song } from '../../types/music';

interface FullScreenPlayerProps {
  song: Song;
  isPlaying: boolean;
  onPlayPause: () => void;
  onClose: () => void;
}

const FullScreenPlayer: React.FC<FullScreenPlayerProps> = ({
  song,
  isPlaying,
  onPlayPause,
  onClose,
}) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgcolor: 'background.default',
        zIndex: 1300,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} sx={{ height: '100vh', py: 4 }}>
          {/* Left side - Album Cover */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={song.coverUrl}
              alt={song.title}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
              }}
            />
          </Grid>

          {/* Right side - Lyrics and Controls */}
          <Grid item xs={12} md={6}>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h4" gutterBottom>
                  {song.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {song.artist}
                </Typography>
              </Box>

              <Paper
                sx={{
                  flex: 1,
                  p: 3,
                  mb: 4,
                  bgcolor: 'background.paper',
                  overflowY: 'auto',
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ whiteSpace: 'pre-line' }}
                >
                  {song.lyrics}
                </Typography>
              </Paper>

              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <IconButton>
                  <Shuffle />
                </IconButton>
                <IconButton>
                  <SkipBack />
                </IconButton>
                <IconButton
                  onClick={onPlayPause}
                  sx={{
                    bgcolor: 'primary.main',
                    '&:hover': { bgcolor: 'primary.dark' },
                  }}
                >
                  {isPlaying ? <Pause /> : <Play />}
                </IconButton>
                <IconButton>
                  <SkipForward />
                </IconButton>
                <IconButton>
                  <Repeat />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', top: 16, right: 16 }}
        >
          <Minimize2 />
        </IconButton>
      </Container>
    </Box>
  );
};

export default FullScreenPlayer;