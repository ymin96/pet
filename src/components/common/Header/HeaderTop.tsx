import React from "react";
import { Grid, Typography } from "@mui/material";
import HeaderInput from "./HeaderInput";
import HeaderInputContainer from "../../../containers/HeaderInputContainer";
import { Link } from "react-router-dom";

export default function HeaderTop() {
    return (
        <Grid container justifyContent="space-between" alignItems="center" sx={{ height: "70px" }}>
            <Grid item>
                <Grid container justifyContent="flex-start" alignItems="center">
                    <Grid item>
                        <img src="/img/logo.png" />
                    </Grid>
                    <Grid item>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Typography variant="h5" sx={{ color: "gray" }}>
                                Animal Friends for 전주
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <HeaderInputContainer mobile={false} />
            </Grid>
        </Grid>
    );
}
