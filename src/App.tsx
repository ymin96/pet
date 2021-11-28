import { Skeleton } from '@mui/material';
import React from 'react';
import CustomHeader from './components/common/Header/CustomHeader';

function App() {
  return (
      <>
        <CustomHeader/>
        <Skeleton variant="rectangular" height={350}/>
      </>
  );
}

export default App;
