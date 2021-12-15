import { DialogContent } from "@material-ui/core";
import { Close } from "@mui/icons-material";
import { Dialog, DialogTitle, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { Store } from "../api/pet";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";


export type StoreInfoDialogProps = {
    store: Store;
    open: boolean;
    dialogClose: () => void;
};

declare global {
    interface Window {
        naver: any;
    }
}

function StoreInfoDialog({ store, open, dialogClose }: StoreInfoDialogProps) {
    const navermaps = window.naver.maps;

    return (
        <Dialog open={open} onClose={dialogClose} fullWidth={true} maxWidth="md">
            <DialogTitle>
                <Typography noWrap variant="h5" sx={{color: "#ffa51d"}}>
                    {store.name}
                </Typography>
                <IconButton aria-label="close" onClick={dialogClose} sx={{ position: "absolute", right: "10px", top: "10px" }}>
                    <Close />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <RenderAfterNavermapsLoaded ncpClientId={"q7rc5r2lpw"} error={<p>Maps Load Error</p>} loading={<p>Maps Loading...</p>}>
                    <NaverMap
                        mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
                        style={{
                            width: "100%",
                            height: "45vh",
                        }}
                        defaultCenter={{ lat: store.lat, lng: store.lng }}
                        defaultZoom={17}
                    >
                        <Marker key={1} position={new navermaps.LatLng(store.lat, store.lng)} animation={2} />
                    </NaverMap>
                </RenderAfterNavermapsLoaded>
                <Grid container direction="row" alignItems="center" mb={2} sx={{marginTop:3}}>
                    <Grid item alignSelf="end" mr={1}>
                        <PhoneIcon />
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">{store.number}</Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" wrap="nowrap" mb={3}>
                    <Grid item alignSelf="end" mr={1}>
                        <LocationOnIcon />
                    </Grid>
                    <Grid item zeroMinWidth>
                        <Typography noWrap variant="body1">
                            {store.address_marking}
                        </Typography>
                    </Grid>
                </Grid>
            </DialogContent> 
        </Dialog>
    );
}

export default StoreInfoDialog;
