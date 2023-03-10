import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

import TopBarIconButton from '../top-bar-icon-button/top-bar-icon-button';
import TopBar from '../top-bar/top-bar';
import Sidebar from '../sidebar/sidebar';

export interface DashboardProps {
  route: JSX.Element;
  body: JSX.Element;
}

const theme = createTheme({
  spacing: (factor: number) => `${0.25 * factor}rem`, // (Bootstrap strategy)
});

export function Dashboard(props: DashboardProps) {
  const [open, setOpen] = React.useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          height: '100vh',
          width: '100vw',
          overflowX: 'hidden',
          overflowY: 'hidden',
        }}
      >
        <Sidebar open={open} setOpen={setOpen}>
          {props.route}
        </Sidebar>
        <Box
          // component="main"
          sx={{
            flexGrow: 1,
            height: '100%',
            overflowY: 'hidden',
          }}
        >
          <Box
            sx={{
              flexDirection: 'column',
              display: 'flex',
              width: 'inherit',
              height: '100%',
            }}
          >
            <Box
              sx={{
                width: '100%',
              }}
            >
              <AppBar position="relative">
                <TopBar
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                  }}
                >
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
                  <TopBarIconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                  </TopBarIconButton>
                </TopBar>
              </AppBar>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                width: '100%',
                overflowX: 'hidden',
                overflowY: 'hidden',
              }}
            >
              <Box
                sx={{
                  height: '100%',
                  width: '100%',
                  overflowY: 'auto',
                }}
              >
                {props.body}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Dashboard;
