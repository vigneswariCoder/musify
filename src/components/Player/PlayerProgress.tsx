import React from 'react';
import { Box, Slider, Typography } from '@mui/material';

interface PlayerProgressProps {
  currentTime: number;
  duration: number;
  onSeek: (value: number) => void;
}

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const PlayerProgress: React.FC<PlayerProgressProps> = ({
  currentTime,
  duration,
  onSeek,
}) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography variant="caption">{formatTime(currentTime)}</Typography>
      <Slider
        size="small"
        value={currentTime}
        max={duration}
        onChange={(_, value) => onSeek(value as number)}
        sx={{
          color: 'primary.main',
          height: 4,
          '& .MuiSlider-thumb': {
            width: 8,
            height: 8,
            transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
            '&:hover': {
              width: 12,
              height: 12,
            },
          },
        }}
      />
      <Typography variant="caption">{formatTime(duration)}</Typography>
    </Box>
  );
};

export default PlayerProgress;