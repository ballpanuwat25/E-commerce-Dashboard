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
  Grid,
  Card,
  CardContent,
  Badge,
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

import MuiAppBar from '@mui/material/AppBar';

import SwipeableTextMobileStepper from '../components/SwipeableTextMobileStepper';

import ProductSold from '../components/ProductSold';
import SalesOverview from '../components/SalesOverview';
import MonthlySales from '../components/MonthlySales';
import GrowthRate from '../components/GrowthRate';
import CustomerCard from '../components/CustomerCard';

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

export default function Overview() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
            <MenuIcon sx={{ ...(open && { display: 'none' }) }} />
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

        <Box sx={{ flexGrow: 1, marginBottom: '14px' }}>
          <Grid container sx={{ justifyContent: 'space-between' }}>

            <Grid container spacing={2} xs={6}>
              <Grid item xs={6}>
                <SalesOverview />
              </Grid>

              <Grid item xs={6}>
                <ProductSold />
              </Grid>
            </Grid>

            <Grid container xs={6}>
              <Grid item xs={12}>
                <MonthlySales />
              </Grid>
            </Grid>

          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container sx={{ justifyContent: 'space-between' }}>

            <Grid container spacing={2} xs={6}>
              <Grid item xs={6}>
                <CustomerCard />
              </Grid>

              <Grid item xs={6}>
                <Card sx={{ height: 350 }}>
                  <CardContent>
                    <SwipeableTextMobileStepper />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Grid container xs={6}>
              <Grid item xs={12}>
                <GrowthRate />
              </Grid>
            </Grid>

          </Grid>
        </Box>
      </Main>
    </Box>
  );
}