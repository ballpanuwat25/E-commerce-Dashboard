import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
    Box,
    Drawer,
    Toolbar,
    List,
    Typography,
    Divider,
    ListItem,
    ListItemButton,
    ListItemText,
    CssBaseline,
    IconButton,
    Badge,
    TextField,
    Button,
    Paper,
    Select,
    FormControl,
    InputLabel,
    MenuItem,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MailIcon from '@mui/icons-material/Mail';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import BarChartIcon from '@mui/icons-material/BarChart';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FilterIcon from '@mui/icons-material/Filter';

import MuiAppBar from '@mui/material/AppBar';

import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    height: '20px',
}));

export default function AddProduct() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
    };

    const preventDefault = (e) => {
        e.preventDefault();
    };

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ boxShadow: 'none', borderBottom: '1px solid #E4E4E4', backgroundColor: '#fff' }} >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                    >
                        <MenuIcon sx={{ mr: 2, ...(open && { display: 'none' }) }} />
                    </IconButton>

                    <div>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>

                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>

                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="primary-search-account-menu"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>

                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <Typography variant='h6' sx={{ flexGrow: 1, textAlign: 'center' }}>
                        <Link to="https://github.com/ballpanuwat25" style={{ textDecoration: 'none', color: '#202020' }}>
                            ballpanuwat25 ⚽
                        </Link>
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>

                <Divider />
                <List sx={{ marginBottom: 'auto' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: '#202020' }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Overview"} />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to="/sales-report" style={{ textDecoration: 'none', color: '#202020' }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <BarChartIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Sales Report"} />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to="/inventory" style={{ textDecoration: 'none', color: '#202020' }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InventoryIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Inventory"} />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to="/customers" style={{ textDecoration: 'none', color: '#202020' }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <GroupIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Customer"} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <Divider />

                <List>
                    {['Logout'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <Main open={open}>
                <DrawerHeader />

                <Box sx={{ width: '100%' }}>
                    <Typography variant='h4' sx={{ flexGrow: 1, textAlign: 'center' }}>
                        Create Product
                    </Typography>
                    <form>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <TextField
                                label="Product Id"
                                fullWidth
                                variant="outlined"
                                margin="normal"
                            />
                            <TextField
                                label="Product Name"
                                fullWidth
                                variant="outlined"
                                margin="normal"
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <TextField
                                label="Quantity"
                                fullWidth
                                variant="outlined"
                                margin="normal"
                            />

                            <Box sx={{ width: '100%', marginTop: 1 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Category"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Men's clothing</MenuItem>
                                        <MenuItem value={20}>Women's clothing</MenuItem>
                                        <MenuItem value={30}>Kid's clothing</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>

                        <TextField
                            label="Description"
                            multiline
                            rows={4}
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            sx={{ marginBottom: '16px' }}
                        />
                        <Paper
                            onDrop={handleDrop}
                            onDragOver={preventDefault}
                            onDragEnter={preventDefault}
                            onDragLeave={preventDefault}
                            sx={{
                                padding: '20px',
                                border: '2px dashed #cccccc',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: 'none',
                                height: '200px',
                            }}
                        >
                            <FilterIcon sx={{ fontSize: '60px', marginBottom: '16px' }} />
                            <Typography variant="body2">
                                Drag and drop an image here or click to upload.
                            </Typography>
                        </Paper>

                        <TextField
                            label="Price"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            sx={{ marginTop: '16px' }}
                        />

                        <Button
                            type="submit"
                            variant="outlined"
                            color="primary"
                            fullWidth
                            sx={{ marginTop: '16px' }}
                        >
                            Create Product
                        </Button>
                    </form>
                </Box>
            </Main>
        </Box>
    );
}