import { Skeleton, Container } from '@mui/material';
import React from 'react';
import Footer from '../common/Footer';
import CustomHeader from '../common/Header/CustomHeader';
import StoreItem from '../StoreItem';

function MainPage() {
    return (
        <div>
            <Skeleton variant="rectangular" height={350} sx={{marginBottom:5}}/>
        </div>
    );
}

export default MainPage;