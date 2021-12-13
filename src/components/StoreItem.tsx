import { Icon, Paper, Skeleton, Typography, Box, Grid } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Store } from "../api/pet";

export type StoreItemProps = {
    storeItem: Store;
};

function StoreItem({storeItem}:StoreItemProps) {
    return (
        <Paper
            sx={{
                width: 300,
                height: 280,
                padding: 2,
                marginBottom: 5
            }}
        >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#ffa51d" }}>
                {storeItem.name}
            </Typography>
            <Skeleton variant="rectangular" height={140} sx={{ marginBottom: 3 }} />
            <Grid container direction="row" alignItems="center" mb={2}>
                <Grid item alignSelf="end" mr={1}>
                    <PhoneIcon />
                </Grid>
                <Grid item>
                    <Typography variant="body1">{storeItem.number}</Typography>
                </Grid>
            </Grid>
            <Grid container direction="row" alignItems="center" wrap="nowrap">
                <Grid item alignSelf="end" mr={1}>
                    <LocationOnIcon />
                </Grid>
                <Grid item zeroMinWidth>
                    <Typography noWrap variant="body1">
                        {storeItem.address_marking}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default StoreItem;
