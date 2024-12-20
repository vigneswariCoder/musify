import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import { Pause, Play } from 'lucide-react';
import { Song } from '../../types/music';
import LikeButton from './LikeButton';

interface SongListProps {
  songs: Song[];
  onSongSelect: (song: Song) => void;
  showLikeAnimation?: boolean;
  currentSong: Song[];
}

const SongList: React.FC<SongListProps> = ({
  songs,
  onSongSelect,
  showLikeAnimation = false,
  currentSong
}) => {
  const [likedSongs, setLikedSongs] = useState<Record<string, boolean>>({});
  const handleLikeToggle = (songId: string) => {
    setLikedSongs((prev) => ({
      ...prev,
      [songId]: !prev[songId],
    }));
  };

  return (
    <TableContainer component={Paper} sx={{ backgroundColor: 'background.default' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: 'text.secondary' }}>#</TableCell>
            <TableCell sx={{ color: 'text.secondary' }}>Title</TableCell>
            <TableCell sx={{ color: 'text.secondary' }}>Artist</TableCell>
            <TableCell sx={{ color: 'text.secondary' }}>Album</TableCell>
            <TableCell sx={{ color: 'text.secondary' }}>Duration</TableCell>
            <TableCell sx={{ color: 'text.secondary' }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {songs.map((song, index) => (
            <TableRow
              key={song.id}
              sx={{
                '&:hover': {
                  bgcolor: 'action.hover',
                },
                '& .MuiTableCell-root': {
                  border: 'none',
                },
                cursor: 'pointer',
              }}
            >

              <TableCell>{index + 1}</TableCell>
              <TableCell
                sx={{ alignItems: 'center', gap: 1 }}
              >
                <IconButton size="small" onClick={() => onSongSelect(song)}>
                  {currentSong?.id === song.id ? <Pause /> : <Play />}
                </IconButton>
                {song.title}
              </TableCell>
              <TableCell>{song.artist}</TableCell>
              <TableCell>{song.album}</TableCell>
              <TableCell>{song.duration}</TableCell>
              <TableCell>
                <LikeButton
                  liked={likedSongs[song.id]}
                  onToggle={() => handleLikeToggle(song.id)}
                  showAnimation={showLikeAnimation}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SongList;