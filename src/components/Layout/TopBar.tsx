import React from 'react';
import { Box, IconButton, Typography, Avatar, Menu, MenuItem } from '@mui/material';
import { ChevronLeft, ChevronRight, Bell, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { currentUser } from '../../data/mockData';

const TopBar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 2,
        bgcolor: 'background.default',
        position: 'sticky',
        top: 0,
        zIndex: 1,
      }}
    >
      <Box sx={{ display: 'flex', gap: 1 }}>
        <IconButton onClick={() => navigate(-1)} sx={{backgroundColor: 'background.paper'}}>
          <ChevronLeft />
        </IconButton>
        <IconButton onClick={() => navigate(1)} sx={{backgroundColor: 'background.paper'}}>
          <ChevronRight />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton>
          <Bell />
        </IconButton>
        <IconButton onClick={handleProfileClick}>
          <Avatar
            src={currentUser.avatarUrl}
            alt={currentUser.name}
            sx={{ width: 32, height: 32 }}
          />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
          <MenuItem onClick={() => navigate('/settings')}>Settings</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default TopBar;