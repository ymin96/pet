import { Skeleton, Container, Grid } from "@mui/material";
import { table } from "console";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules";
import { getStoreThunk } from "../../modules/store";
import Footer from "../common/Footer";
import CustomHeader from "../common/Header/CustomHeader";
import StoreItem from "../StoreItem";
import StoreList from "../StoreList";

function MainPage() {
    const { data, loading, error } = useSelector((state: RootState) => state.store.storeFile);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStoreThunk(1, 12, "veterinary", ""));
    }, []);

    return (
        <div>
            <img src="img/banner.png" style={{width:"100%", height:"auto", marginBottom:"30px"}} />
            <Container>{data && <StoreList storeList={data.store_list} />}</Container>
        </div>
    );
}

export default MainPage;
