import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';

// import styles from './dashboard.module.scss';

export interface DashboardProps {
  route: JSX.Element;
  body: JSX.Element;
}

const mdTheme = createTheme();

function drawerWidth(open: boolean): number {
  if (open) {
    return 240;
  } else {
    return 60;
  }
}

export function Dashboard(props: DashboardProps) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Drawer
          sx={{
            width: drawerWidth(open),
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            transition: 'width 0.5s',
            transitionTimingFunction: 'ease',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth(open),
              boxSizing: 'border-box',
              transition: 'width 0.5s',
              transitionTimingFunction: 'ease',
              overflowX: 'hidden',
            },
          }}
          variant="permanent"
        >
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              {open && <ChevronLeftIcon />}
              {!open && <MenuIcon />}
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">{props.route}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            flexDirection: 'column',
            height: '100vh',
            display: 'flex',
          }}
        >
          <Box
            sx={{
              width: '100%',
            }}
          >
            <AppBar position="relative">
              <Toolbar>
                <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  Dashboard
                </Typography>
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Toolbar>
            </AppBar>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              overflow: 'auto',
            }}
          >
            <Container
              maxWidth={false}
              sx={{
                mt: 2,
                mb: 2,
                pl: 2,
                pr: 2,
                boxSizing: 'border-box',
                width: '100%',
              }}
            >
              {props.body}
            </Container>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Dashboard;
