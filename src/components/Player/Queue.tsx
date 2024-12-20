import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@mui/material';
import { X } from 'lucide-react';
import { Song } from '../../types/music';
import { songs } from '../../data/mockData';

interface QueueProps {
  onClose: () => void;
  currentSong: Song;
}

const Queue: React.FC<QueueProps> = ({ onClose, currentSong }) => {
  return (
    <Drawer
      anchor="right"
      open={true}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 400,
          bgcolor: 'background.paper',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Play Queue</Typography>
          <IconButton onClick={onClose}>
            <X />
          </IconButton>
        </Box>

        <Typography variant="subtitle2" sx={{ mb: 1 }}>Now Playing</Typography>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={currentSong.coverUrl} variant="rounded" />
            </ListItemAvatar>
            <ListItemText
              primary={currentSong.title}
              secondary={currentSong.artist}
            />
          </ListItem>
        </List>

        <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>Next Up</Typography>
        <List>
          {songs.map((song) => (
            <ListItem key={song.id}>
              <ListItemAvatar>
                <Avatar src={song.coverUrl} variant="rounded" />
              </ListItemAvatar>
              <ListItemText
                primary={song.title}
                secondary={song.artist}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Queue;