import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <TextField
      fullWidth
      placeholder="What do you want to listen to?"
      value={value}
      onChange={onChange}
      sx={{
        marginBottom: 2,
        '& .MuiOutlinedInput-root': {
          bgcolor: 'background.paper',
          borderRadius: 2,
          '&:hover': {
            bgcolor: 'action.hover',
          },
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;