import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchField() {
  return (
      <Box sx={{'& > :not(style)': {m: 1}}}>
        <TextField
            id="searchField"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <SearchIcon/>
                </InputAdornment>
              ),
            }}
            variant="standard"
        />
      </Box>
  );
}