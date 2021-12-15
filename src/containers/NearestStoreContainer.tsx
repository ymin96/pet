import { table } from 'console';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import StoreList from '../components/StoreList';
import { RootState } from '../modules';
import { getNearestStoreThunk, getStoreThunk } from '../modules/store';

function getLocation(dispatch: Dispatch<any>) {
    let lat, long;
    if (navigator.geolocation) {
        // GPS를 지원하면
        navigator.geolocation.getCurrentPosition(
            function (position) {
                lat = position.coords.latitude;
                long = position.coords.longitude;
                dispatch(getNearestStoreThunk(lat, long));
            },
            function (error) {
                console.error(error);
            },
            {
                enableHighAccuracy: false,
                maximumAge: 0,
                timeout: Infinity,
            }
        );
    } else {
        alert("GPS를 지원하지 않습니다");
    }
    console.log(lat,long);
}


function NearestStoreContainer() {
    const { data, loading, error } = useSelector((state: RootState) => state.store.storeFile);
    const dispatch = useDispatch();

    useEffect(() => {
        getLocation(dispatch);
    }, []);


    return (
        <>
            {data && (
                <>
                    <StoreList storeList={data.store_list} />
                </>
            )}
        </>
    );
}

export default NearestStoreContainer;