import { Search } from "@mui/icons-material";
import { InputBase, IconButton } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";

type HeaderInputProps = {
    mobile: boolean;
};

const ReactionInput = styled(Box)<HeaderInputProps>(({ mobile, theme }) => ({
    border: "1px solid gray",
    alignItems: "center",
    width: 400,
    height: 35,
    borderRadius: "7px",
    ...(mobile
        ? {
              [theme.breakpoints.up("xs")]: { display: "none" },
              [theme.breakpoints.down("sm")]: { display: "flex" },
          }
        : {
              [theme.breakpoints.up("xs")]: { display: "flex" },
              [theme.breakpoints.down("sm")]: { display: "none" },
          }),
}));


function HeaderInput({ mobile }: HeaderInputProps) {
    return (
        <ReactionInput pl={2} mobile={mobile}>
            <InputBase sx={{ flex: 1 }} placeholder="병원 검색" />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <Search />
            </IconButton>
        </ReactionInput>
    );
}

export default HeaderInput;
