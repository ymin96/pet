import { Container, Grid, Pagination } from "@mui/material";
import React from "react";
import { RouteComponentProps } from "react-router";
import StoreListContainer from "../../containers/StoreListContainer";
import BreadCrumb from "../common/BreadCrumb";

export type StoreListPageProps = {
    page: string;
}

function StoreListPage({match}: RouteComponentProps<StoreListPageProps>) {

    const {page} = match.params;

    return (
        <div>
            <Container>
                <Grid container direction="column">
                    <BreadCrumb contents="동물 판매소"/>
                    <StoreListContainer page={page} table="pet_store" prefix="store"/>
                </Grid>
            </Container>
        </div>
    );
}

export default StoreListPage;
