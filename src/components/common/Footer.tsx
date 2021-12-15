import { Grid, Typography } from "@mui/material";
import React from "react";

function Footer() {
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" mt={10}
            sx={{ borderTop:"2px solid #c2c2c2"}}
        >
            <img src="/img/logo.png" style={{marginTop:"15px"}}/>
            <Typography variant="subtitle2" gutterBottom style={{marginTop:"15px", fontWeight:"bold"}}>
                전체서비스 이용약관 개인정보처리방침 통합검색 고객센터
            </Typography>
        </Grid>
    );
}

export default Footer;
