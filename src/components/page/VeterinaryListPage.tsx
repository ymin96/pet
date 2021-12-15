import { Container, Grid, Pagination } from "@mui/material";
import React from "react";
import { RouteComponentProps } from "react-router";
import StoreListContainer from "../../containers/StoreListContainer";
import BreadCrumb from "../common/BreadCrumb";

export type VeterinayListPageProps = {
    page: string;
}

function VeterinaryListPage({match}: RouteComponentProps<VeterinayListPageProps>) {

    const {page} = match.params;

    return (
        <div>
            <Container>
                <Grid container direction="column">
                    <BreadCrumb contents="동물 병원"/>
                    <StoreListContainer page={page} table="veterinary" prefix="veterinary"/>
                </Grid>
            </Container>
        </div>
    );
}

export default VeterinaryListPage;
