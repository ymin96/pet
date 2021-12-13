import React from "react";
import {  Grid, Typography } from "@mui/material";
import HeaderInput from "./HeaderInput";

export default function HeaderTop() {
    return (
        <Grid container justifyContent="space-between" alignItems="center" sx={{ height: "60px" }}>
            <Typography variant="h5" sx={{ color: "gray" }}>
                Animal Friends for 전주
            </Typography>

            <HeaderInput mobile={false} />

            <Typography variant="h6" sx={{ color: "gray", fontWeight: "bold" }}>
                로그인
            </Typography>
        </Grid>
    );
}
