import React, { useState } from 'react';
import { Box } from '@mui/material';
import SearchBar from '../components/Search/SearchBar';
import TopGenres from '../components/Search/TopGenres';
import BrowseCategories from '../components/Search/BrowseCategories';
import SongList from '../components/SongList/SongList';
import { Song } from '../types/music';
import { songs } from '../data/mockData';

interface SearchProps {
  onSongSelect: (song: Song) => void;
  currentSong: Song[];
}

const Search: React.FC<SearchProps> = ({ onSongSelect, currentSong }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (query.trim()) {
      const filtered = songs.filter(
        song =>
          song.title.toLowerCase().includes(query) ||
          song.artist.toLowerCase().includes(query) ||
          song.album.toLowerCase().includes(query)
      );
      setFilteredSongs(filtered);
    } else {
      setFilteredSongs([]);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <SearchBar value={searchQuery} onChange={handleSearch} />
      
      {searchQuery ? (
        <Box sx={{ mt: 3 }}>
          <SongList songs={filteredSongs} onSongSelect={onSongSelect} currentSong={currentSong} />
        </Box>
      ) : (
        <>
          <TopGenres />
          <BrowseCategories />
        </>
      )}
    </Box>
  );
};

export default Search;