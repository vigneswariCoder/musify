import React, { useState } from 'react';
import { Box, Slider, IconButton } from '@mui/material';
import { Volume2, VolumeX, Volume1 } from 'lucide-react';

const VolumeControl = () => {
  const [volume, setVolume] = useState(100);
  const [previousVolume, setPreviousVolume] = useState(100);

  const handleVolumeChange = (_: Event, newValue: number | number[]) => {
    setVolume(newValue as number);
  };

  const toggleMute = () => {
    if (volume > 0) {
      setPreviousVolume(volume);
      setVolume(0);
    } else {
      setVolume(previousVolume);
    }
  };

  const VolumeIcon = () => {
    if (volume === 0) return <VolumeX size={20} />;
    if (volume < 50) return <Volume1 size={20} />;
    return <Volume2 size={20} />;
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 120 }}>
      <IconButton size="small" onClick={toggleMute}>
        <VolumeIcon />
      </IconButton>
      <Slider
        size="small"
        value={volume}
        onChange={handleVolumeChange}
        sx={{
          color: 'primary.main',
          '& .MuiSlider-thumb': {
            width: 12,
            height: 12,
          },
        }}
      />
    </Box>
  );
};

export default VolumeControl;