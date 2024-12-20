import { Song, Playlist, User } from '../types/music';
const ImageUser = "src/assets/images";


export const songs: Song[] = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: '3:20',
    coverUrl: `${ImageUser}/photo-1445985543470-41fba5c3144a.jpg`,
    audioUrl: '#',
    lyrics: "Yeah\nI've been tryin' to call\nI've been on my own for long enough...",
  },
  {
    id: '2',
    title: 'Bad Guy',
    artist: 'Billie Eilish',
    album: 'When We All Fall Asleep',
    duration: '3:14',
    coverUrl: `${ImageUser}/photo-1619983081563-430f63602796.jpg`,
    audioUrl: '#',
    lyrics: "White shirt now red, my bloody nose\nSleeping, you're on your tippy toes...",
  },
  {
    id: '3',
    title: 'Stay',
    artist: 'Kid LAROI & Justin Bieber',
    album: 'F*CK LOVE 3',
    duration: '2:21',
    coverUrl: `${ImageUser}/photo-1470225620780-dba8ba36b745.jpg`,
    audioUrl: '#',
    lyrics: "I do the same thing I told you that I never would\nI told you I'd change...",
  },
  // Add more songs...
];

// Create themed playlists
export const playlists: Record<string, Playlist[]> = {
  topHits: [
    {
      id: 'top-1',
      name: "Today's Top Hits",
      description: 'The hottest tracks right now',
      coverUrl: `${ImageUser}/photo-1445985543470-41fba5c3144a.jpg`,
      songs: songs.slice(0, 10),
    },
    {
      id: 'top-2',
      name: 'RapCaviar',
      description: "Hip-hop's heavyweight playlist",
      coverUrl: `${ImageUser}/photo-1571974599782-87624638275e.jpg`,
      songs: songs.slice(2, 12),
    },
  ],
  forYou: [
    {
      id: 'daily-1',
      name: 'Daily Mix 1',
      description: 'The Weeknd, Post Malone, Drake',
      coverUrl: `${ImageUser}/photo-1592339420310-e20dfbad29ff.jpg`,
      songs: songs.slice(1, 8),
    },
    {
      id: 'daily-2',
      name: 'Daily Mix 2',
      description: 'Billie Eilish, Lorde, Lana Del Rey',
      coverUrl: `${ImageUser}/photo-1686327139527-e8d0a9f67e44.jpg`,
      songs: songs.slice(3, 10),
    },
    {
      id: 'daily-3',
      name: 'Daily Mix 3',
      description: 'Kid LAROI, Justin Bieber, Ed Sheeran',
      coverUrl: `${ImageUser}/photo-1458560871784-56d23406c091.jpg`,
      songs: songs.slice(0, 7),
    },
  ],
  mood: [
    {
      id: 'mood-1',
      name: 'Chill Vibes',
      description: 'Kick back and relax',
      coverUrl: `${ImageUser}/photo-1514525253161-7a46d19cd819.jpg`,
      songs: songs.slice(1, 9),
    },
    {
      id: 'mood-2',
      name: 'Energy Boost',
      description: 'Music to get you going',
      coverUrl: `${ImageUser}/photo-1571019613454-1cb2f99b2d8b.jpg`,
      songs: songs.slice(2, 10),
    },
  ],
  recent: [
    {
      id: 'recent-1',
      name: 'Recently Played',
      description: 'Your most recent jams',
      coverUrl: `${ImageUser}/photo-1485278537138-4e8911a13c02.jpg`,
      songs: songs.slice(0, 6),
    },
    {
      id: 'recent-2',
      name: 'On Repeat',
      description: 'Songs you keep coming back to',
      coverUrl: `${ImageUser}/photo-1619983081563-430f63602796.jpg`,
      songs: songs.slice(1, 7),
    },
  ],
};

export const currentUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  avatarUrl: `${ImageUser}/photo-1535713875002-d1d0cf377fde.jpg`,
  playlists: Object.values(playlists).flat(),
};