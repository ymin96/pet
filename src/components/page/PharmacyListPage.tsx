import { Container, Grid, Pagination } from "@mui/material";
import React from "react";
import { RouteComponentProps } from "react-router";
import StoreListContainer from "../../containers/StoreListContainer";
import BreadCrumb from "../common/BreadCrumb";

export type PharmacyListPageProps = {
    page: string;
}

function PharmacyListPage({match}: RouteComponentProps<PharmacyListPageProps>) {

    const {page} = match.params;

    return (
        <div>
            <Container>
                <Grid container direction="column">
                    <BreadCrumb contents="동물 약국"/>
                    <StoreListContainer page={page} table="pet_pharmacy"/>
                </Grid>
            </Container>
        </div>
    );
}

export default PharmacyListPage;
