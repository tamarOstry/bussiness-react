import EditIcon from '@mui/icons-material/Edit';
import * as React from 'react';
import { useEffect } from 'react'
import { useState } from "react";
import { Fab } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { context } from "../api/businessContext";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { editBusinessDetails } from '../api/admin'
import '../css/business.css'
import { useNavigate } from 'react-router-dom';

const pages = ['Business','Services', 'Meetings' ];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export function BusinessDetails() {
    const [businessOwners, setBusinessOwners] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    let navigate = useNavigate();

    const location = useLocation();
    const form = location.state;

    const businessDetails = useContext(context);
    // businessOwners=businessDetails.ownersName;
    // businessName=businessDetails.businessName;
    // const servicesDetails = useContext(context.ServiceContext(businessDetails.id));

    const saveBusinessDetails = () => {
        businessDetails.ownersName = 'tamar&esty';
        // businessDetails.ownersName = businessOwners;
        businessDetails.businessName = businessName;
        editBusinessDetails(businessDetails)
    }

    const edit=()=>{

    }

    const myServices = () => {
        navigate('/services', { state: { business: businessDetails } })
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        navigate('/services', { state: { business: businessDetails } })
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    {/*             
   <BusinessContext.Consumer adminId='8a3807c0-af72-47e3-9369-745a7ae9889a'>
      {({theme}) => (
        setBusiness
      )}
    </BusinessContext.Consumer> */}
    return (
        <div className="inputs">
            <h1 className="title">hi to your business</h1>
            <AppBar position="static" sx={{ maxWidth: 545 }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Card sx={{ maxWidth: 545 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={businessDetails && businessDetails.img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {businessDetails && businessDetails.businessName}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {businessDetails && businessDetails.ownersName}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Fab color="secondary" aria-label="edit">
                        <EditIcon onClick={()=>edit()} />
                    </Fab>
                </CardActions>
            </Card>
        </div>

    )
}



    //     <TextField
    //     id="filled-helperText"
    //     // label="Helper text"
    //     defaultValue={businessDetails && businessDetails.ownersName}
    //     value={businessDetails && businessDetails.ownersName}
    //     helperText="ownersName"
    //     variant="filled"
    //     onChange={(e) => setBusinessOwners(e.target.value)}
    // />
    // <TextField
    //     id="filled-helperText"
    //     // label="Helper text"
    //     defaultValue={businessDetails && businessDetails.businessName}
    //     value={businessDetails && businessDetails.businessName}
    //     helperText="businessName"
    //     variant="filled"
    //     onChange={(e) => setBusinessName(e.target.value)}
    // />
    // <Stack direction="row" spacing={2}>
    //     <Button className="save" color="secondary" onClick={saveBusinessDetails}>save changes</Button>
    //     <Button className="save" color="secondary" onClick={myServices}>my services</Button>
    // </Stack>


