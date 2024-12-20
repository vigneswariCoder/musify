import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
} from '@mui/material';
import { Home, Search, Library, PlusSquare, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
});

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'Search', icon: <Search />, path: '/search' },
    { text: 'Your Library', icon: <Library />, path: '/library' },
    { text: 'Create Playlist', icon: <PlusSquare />, path: '/create-playlist' },
    { text: 'Liked Songs', icon: <Heart />, path: '/liked-songs' },
  ];

  return (
    <StyledDrawer variant="permanent" anchor="left">
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, letterSpacing: 3, display: 'flex', alignItems: 'center', fontSize: '30px' }}>
          <img src={Logo} alt="logo" width="50px" style={{ marginRight: '7px' }}/>Musify
        </Typography>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
              sx={{ borderRadius: 1 }}
            >
              <ListItemIcon sx={{ color: 'text.primary' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </StyledDrawer>
  );
};

export default Sidebar;