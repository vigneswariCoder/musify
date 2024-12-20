import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { currentUser } from '../data/mockData';

const Profile = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 4, mb: 4 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item>
            <Avatar
              src={currentUser.avatarUrl}
              alt={currentUser.name}
              sx={{ width: 150, height: 150 }}
            />
          </Grid>
          <Grid item xs>
            <Typography variant="overline">Profile</Typography>
            <Typography variant="h4" sx={{ mb: 1 }}>{currentUser.name}</Typography>
            <Typography variant="body1" color="text.secondary">
              {currentUser.email}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Your Activity</Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Playlists Created"
                  secondary={currentUser.playlists.length}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Following"
                  secondary="0 artists"
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Followers"
                  secondary="0 followers"
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Recent Activity</Typography>
            <Typography variant="body2" color="text.secondary">
              No recent activity to show.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;