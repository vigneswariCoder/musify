import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Typography,
  Card,
  CardMedia,
  Stack,
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
  ListMusic,
} from 'lucide-react';
import { Song } from '../../types/music';
import FullScreenPlayer from './FullScreenPlayer';
import PlayerProgress from './PlayerProgress';
import VolumeControl from './VolumeControl';
import Queue from './Queue';

interface MusicPlayerProps {
  song?: Song;
  isPlaying: boolean;
  onPlayPause: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({
  song,
  isPlaying,
  onPlayPause,
}) => {
  const [showFullScreen, setShowFullScreen] = useState(false);
  const [showQueue, setShowQueue] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 210; // Mock duration in seconds

  if (!song) return null;

  return (
    <>
      <Card
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.paper',
          borderTop: '1px solid',
          borderColor: 'divider',
          zIndex: 1300,
        }}
      >
        <PlayerProgress
          currentTime={currentTime}
          duration={duration}
          onSeek={setCurrentTime}
        />
        
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ p: 2 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <CardMedia
              component="img"
              sx={{
                width: 56,
                height: 56,
                borderRadius: 1,
                cursor: 'pointer',
                mr: 2,
              }}
              image={song.coverUrl}
              alt={song.title}
              onClick={() => setShowFullScreen(true)}
            />
            <Box>
              <Typography variant="subtitle1">{song.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {song.artist}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton size="small">
              <Shuffle />
            </IconButton>
            <IconButton size="small">
              <SkipBack />
            </IconButton>
            <IconButton
              onClick={onPlayPause}
              sx={{
                bgcolor: 'primary.main',
                '&:hover': { bgcolor: 'primary.dark' },
                p: 1,
              }}
            >
              {isPlaying ? <Pause /> : <Play />}
            </IconButton>
            <IconButton size="small">
              <SkipForward />
            </IconButton>
            <IconButton size="small">
              <Repeat />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1, justifyContent: 'flex-end' }}>
            <IconButton size="small" onClick={() => setShowQueue(!showQueue)}>
              <ListMusic />
            </IconButton>
            <VolumeControl />
            <IconButton size="small" onClick={() => setShowFullScreen(true)}>
              <Maximize2 />
            </IconButton>
          </Box>
        </Stack>
      </Card>

      {showFullScreen && song && (
        <FullScreenPlayer
          song={song}
          isPlaying={isPlaying}
          onPlayPause={onPlayPause}
          onClose={() => setShowFullScreen(false)}
          currentTime={currentTime}
          duration={duration}
          onSeek={setCurrentTime}
        />
      )}

      {showQueue && (
        <Queue
          onClose={() => setShowQueue(false)}
          currentSong={song}
        />
      )}
    </>
  );
};

export default MusicPlayer;