

import Divider from '@mui/material/Divider';

import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

import { Avatar, IconButton, Tooltip, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { grey } from '@mui/material/colors';
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import { useNavigate, useLocation } from 'react-router-dom';


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    // @ts-ignore
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);
// eslint-disable-next-line no-unused-vars
const Array1 = [
    { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
    { text: "Manage Team", icon: <PeopleOutlinedIcon />, path: "/team" },
    {
        text: "Contacts Information",
        icon: <ContactsOutlinedIcon />,
        path: "/contacts",
    },
    {
        text: "Invoices Balances",
        icon: <ReceiptOutlinedIcon />,
        path: "/invoices",
    },
];

// eslint-disable-next-line no-unused-vars
const Array2 = [
    { text: "Profile Form", icon: <PersonOutlinedIcon />, path: "/form" },
    { text: "Calendar", icon: <CalendarTodayOutlinedIcon />, path: "/calendar" },
    {
        text: "FAQ Page",
        icon: <HelpOutlineOutlinedIcon />,
        path: "/faq",
    },
];

// eslint-disable-next-line no-unused-vars
const Array3 = [
    { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
    { text: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
    { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/line" },
    { text: "Geography Chart", icon: <MapOutlinedIcon />, path: "/geography" },
];



// eslint-disable-next-line react/prop-types
const SideBar = ({ open, handleDrawerClose }) => {
    // @ts-ignore
    const navigate = useNavigate();
    const lacation = useLocation()
    const theme = useTheme();
    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.
                        // @ts-ignore
                        direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>


            <Avatar sx={{
                my: 1, mx: "auto", width: open ? "88px" : "44px",
                height: open ? "88px" : "44px",
                border: "2px solid #d3c9c9",
                transition: "0.4s"

            }} alt="Remy Sharp" src="https://img.freepik.com/free-photo/medium-shot-woman-covered-with-blanket_23-2149172499.jpg?t=st=1719744315~exp=1719747915~hmac=b521e6a0dcad937b5a71537191c2334a79c07039385a3ea8fdc578039d608ef9&w=826" />
            <Typography sx={{ mx: "auto", fontSize: open ? 20 : 0, transition: "0.4s" }} > Hoda </Typography>
            <Typography sx={{ mx: "auto", fontSize: open ? 18 : 0, transition: "0.4s" }} > admain </Typography>







            <Divider />
            <List>
                {Array1.map((item, index) => (


                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>

                        <Tooltip title={open ? null : item.text} placement="left">
                            <ListItemButton

                                onClick={() => navigate(item.path)}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    bgcolor: lacation.pathname === item.path ?
                                        theme.palette.mode === "dark" ? grey[700] : grey[300] : ""
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>

                        </Tooltip>

                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {Array2.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>


                        <Tooltip title={open ? null : item.text} placement="left">
                            <ListItemButton
                                onClick={() => navigate(item.path)}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    bgcolor: lacation.pathname === item.path ?
                                        theme.palette.mode === "dark" ? grey[700] : grey[300] : ""
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>

                        </Tooltip>

                    </ListItem>
                ))}
            </List>

            <Divider />
            <List>
                {Array3.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>

                        <Tooltip title={open ? null : item.text} placement="left">
                            <ListItemButton

                                onClick={() => navigate(item.path)}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    bgcolor: lacation.pathname === item.path ?
                                        theme.palette.mode === "dark" ? grey[700] : grey[300] : ""
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Tooltip>

                    </ListItem>
                ))}
            </List>

        </Drawer>
    );
}

export default SideBar;
