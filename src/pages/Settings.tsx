import React from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Switch,
  Divider,
} from '@mui/material';
import {
  Volume2,
  Bell,
  Shield,
  Languages,
  HardDrive,
} from 'lucide-react';

const Settings = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>Settings</Typography>

      <Paper>
        <List>
          <ListItem>
            <ListItemIcon>
              <Volume2 />
            </ListItemIcon>
            <ListItemText
              primary="Audio Quality"
              secondary="High quality streaming"
            />
            <Switch defaultChecked />
          </ListItem>
          <Divider />
          
          <ListItem>
            <ListItemIcon>
              <Bell />
            </ListItemIcon>
            <ListItemText
              primary="Notifications"
              secondary="Enable push notifications"
            />
            <Switch defaultChecked />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemIcon>
              <Shield />
            </ListItemIcon>
            <ListItemText
              primary="Privacy"
              secondary="Manage your privacy settings"
            />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemIcon>
              <Languages />
            </ListItemIcon>
            <ListItemText
              primary="Language"
              secondary="English (US)"
            />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemIcon>
              <HardDrive />
            </ListItemIcon>
            <ListItemText
              primary="Storage"
              secondary="Clear cache and downloads"
            />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default Settings;