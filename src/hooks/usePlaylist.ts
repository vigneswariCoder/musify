import { useState } from 'react';
import { Playlist } from '../types/music';

export const usePlaylist = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  const createPlaylist = (name: string, description: string) => {
    const newPlaylist: Playlist = {
      id: `playlist-${Date.now()}`,
      name,
      description,
      coverUrl: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7',
      songs: [],
    };

    setPlaylists((prev) => [...prev, newPlaylist]);
    return newPlaylist;
  };

  return {
    playlists,
    createPlaylist,
  };
};

export default usePlaylist;