import { Icon, Paper, Skeleton, Typography, Box, Grid } from "@mui/material";
import React, { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Store } from "../api/pet";
import { Link } from "react-router-dom";
import StoreInfoDialog from "./StoreInfoDialog";

export type StoreItemProps = {
    storeItem: Store;
    rand:number;
};

function StoreItem({ storeItem , rand}: StoreItemProps) {
    
    
    const [open, setOpen] = useState(false);

    const itemClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setOpen(true);
    };

    const dialogClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Link to="#" style={{ textDecoration: "none" }} onClick={itemClick}>
                <Paper
                    sx={{
                        width: 280,
                        height: 320,
                        padding: 2,
                        marginBottom: 5,
                        cursor: "pointer",
                    }}
                >
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#ffa51d" }}>
                        {storeItem.name}
                    </Typography>
                    <img src={`/img/${rand}.png`} style={{marginBottom:3}}/>
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
            </Link>
            <StoreInfoDialog store={storeItem} open={open} dialogClose={dialogClose} />
        </>
    );
}

export default StoreItem;
