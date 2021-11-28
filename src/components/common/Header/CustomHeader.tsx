import { Container } from '@mui/material';
import React from 'react';
import HeaderBottom from './HeaderBottom';
import HeaderTop from './HeaderTop';

function CustomHeader() {
    return (
        <Container>
            <HeaderTop/>
            <HeaderBottom/> 
        </Container>
    );
}

export default CustomHeader;