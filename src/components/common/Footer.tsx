import { Grid, Typography } from "@mui/material";
import React from "react";

function Footer() {
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" mt={10} height={100}
            sx={{background:"#f5f5f5", borderTop:"2px solid #c2c2c2"}}
        >
            <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
                Logo
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                전체서비스 이용약관 개인정보처리방침 통합검색 고객센터
            </Typography>
        </Grid>
    );
}

export default Footer;
