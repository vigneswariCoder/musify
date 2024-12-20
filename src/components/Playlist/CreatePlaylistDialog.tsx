import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
} from '@mui/material';
import { Music, Upload } from 'lucide-react';

interface CreatePlaylistDialogProps {
  open: boolean;
  onClose: () => void;
  onCreate: (name: string, description: string) => void;
}

const CreatePlaylistDialog: React.FC<CreatePlaylistDialogProps> = ({
  open,
  onClose,
  onCreate,
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (name.trim()) {
      onCreate(name, description);
      setName('');
      setDescription('');
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 'bold' }}>Create Playlist</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 3,
            mt: 2,
          }}
        >
          <Box
            sx={{
              width: 150,
              height: 150,
              bgcolor: 'background.paper',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 1,
              mb: 2,
              cursor: 'pointer',
              '&:hover': { bgcolor: 'action.hover' },
            }}
          >
            <Music size={40} />
            <Typography variant="caption" sx={{ mt: 1 }}>
              Choose a cover image
            </Typography>
          </Box>
        </Box>
        <TextField
          autoFocus
          margin="dense"
          label="Playlist Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          margin="dense"
          label="Description (optional)"
          fullWidth
          multiline
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} color="inherit">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          disabled={!name.trim()}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreatePlaylistDialog;