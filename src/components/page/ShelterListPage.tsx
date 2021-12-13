import { Container, Grid, Pagination } from "@mui/material";
import React from "react";
import { RouteComponentProps } from "react-router";
import StoreListContainer from "../../containers/StoreListContainer";
import BreadCrumb from "../common/BreadCrumb";

export type ShelterListPageProps = {
    page: string;
}

function ShelterListPage({match}: RouteComponentProps<ShelterListPageProps>) {

    const {page} = match.params;

    return (
        <div>
            <Container>
                <Grid container direction="column">
                    <BreadCrumb contents="유기동물 보호소"/>
                    <StoreListContainer page={page} table="pet_shelter"/>
                </Grid>
            </Container>
        </div>
    );
}

export default ShelterListPage;
