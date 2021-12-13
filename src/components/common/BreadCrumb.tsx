import { Grid, Typography } from '@mui/material';
import React from 'react';

export type BreadCrombProps = {
    contents: string;
}

function BreadCrumb({contents}: BreadCrombProps) {

    return (
        <Grid container sx={{height:"50px", borderBottom:"1px solid #cccccc"}} direction="column" justifyContent="center" alignItems="flex-start" mb={5}>
            <Typography sx={{fontWeight:"bold", color:"gray", fontSize:"1.18rem"}} variant="h6" pl={1}>{contents}</Typography>
        </Grid>
    );
}

export default BreadCrumb;