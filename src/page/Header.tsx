import React from 'react';
import Box from "@mui/material/Box";
import RootDomainButton from "../components/RootDomainButton";
import SearchField from "../components/SearchField";

function Header() {
  return (
      <div>
        <Box display="flex"
             alignItems="flex-start"
             p={1}
             m={1}
             bgcolor="background.paper"
             sx={{height: 100, justifyContent: 'center'}}>
          <Box>
            <RootDomainButton></RootDomainButton>
          </Box>
          <Box>
            <SearchField></SearchField>
          </Box>
        </Box>
      </div>
  );
}

export default Header;
