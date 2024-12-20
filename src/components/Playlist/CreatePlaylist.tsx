import { Create } from '@mui/icons-material';
import { Button, Container } from '@mui/material';
import React from 'react';
import CreatePlaylistDialog from './CreatePlaylistDialog';

interface Props {

}

const CreatePlaylist: React.FC<Props> = ({ }) => {

    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Container maxWidth='sm' sx={{ mt: 4 }} >
                <Button variant='contained' onClick={() => {setOpen(true)}} startIcon={<Create />}>Create Playlist</Button>
            </Container>
            
            <CreatePlaylistDialog open={open} onClose={() => setOpen(false)} onCreate={() => {}}/>
        </>
    );
};

export default CreatePlaylist;