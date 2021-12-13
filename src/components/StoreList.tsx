import { Grid, Pagination } from "@mui/material";
import React from "react";
import { Store } from "../api/pet";
import BreadCrumb from "./common/BreadCrumb";
import StoreItem from "./StoreItem";

export type StoreListPros = {
    storeList: Store[];
};

function StoreList({ storeList }: StoreListPros) {
    return (
        <Grid container direction="row" sx={{ minHeight: "500px" }} spacing={1}>
            {storeList.map((store, index) => (
                <Grid key={index} item container xs={12} md={4} justifyContent="center">
                    <Grid item >
                        <StoreItem storeItem={store}/>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
}

export default StoreList;
