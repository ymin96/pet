import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HeaderInput from "../HeaderInput";

export default function HeaderBottom() {
    const pages = ["동물병원,약국", "유기견 보호/찾기", "반려동물정보", "커뮤니티"];

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: "white",
                    boxShadow: "none",
                    borderRight: "0",
                    borderLeft: "0",
                    borderTop: "2px solid #6ad5ff",
                    borderBottom: "2px solid #6ad5ff",
                    marginBottom: "10px",
                }}
            >
                <Toolbar disableGutters>
                    <HeaderInput mobile={true} />

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none", flexDirection: "row-reverse" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="primary"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", justifyContent: "space-evenly" } }}>
                        {pages.map((page) => (
                            <Typography
                                variant="h6"
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ fontWeight: "bold", my: 2, color: "gray", display: "block", cursor: "pointer" }}
                            >
                                {page}
                            </Typography>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}