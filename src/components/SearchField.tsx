import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

export default function SearchField() {
  return (
    <Box sx={{'& > :not(style)': {m: 1}}}>
      <TextField
          variant='standard'
          InputProps={{
            startAdornment: (
              <InputAdornment position='end'>
                <SearchIcon/>
              </InputAdornment>
            )
          }}
      />
    </Box>
  );
}