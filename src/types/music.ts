export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  coverUrl: string;
  audioUrl: string;
  lyrics?: string;
}

export interface Playlist {
  id: string;
  name: string;
  coverUrl: string;
  songs: Song[];
  description?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  playlists: Playlist[];
}