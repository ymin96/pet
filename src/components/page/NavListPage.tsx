import { Container, Grid } from "@mui/material";
import React from "react";
import NearestStoreContainer from "../../containers/NearestStoreContainer";
import BreadCrumb from "../common/BreadCrumb";

function NavListPage() {
    return (
        <Container>
            <Grid container direction="column">
                <BreadCrumb contents="가까운 병원" />
                <NearestStoreContainer />
            </Grid>
        </Container>
    );
}

export default NavListPage;
