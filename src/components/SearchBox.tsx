<<<<<<< HEAD
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchField() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <TextField
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </Box>
  );
}
=======
import React from 'react';
import SearchBar from '@mui/material';

>>>>>>> 4b692ee6fbc23f71fdf198e7808e07fcc76adb36
