import { useTheme, Theme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import TopBarIconButton from '../top-bar-icon-button/top-bar-icon-button';
import TopBar from '../top-bar/top-bar';
import TopBarLogoBox from '../top-bar-logo-box/top-bar-logo-box';
import React from 'react';

export interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
}

function drawerWidth(open: boolean, theme: Theme): string {
  if (open) {
    return theme.spacing(60);
  } else {
    return theme.spacing(14);
  }
}

export function Sidebar(props: SidebarProps) {
  const theme = useTheme();

  const toggleDrawer = () => {
    props.setOpen(!props.open);
  };

  return (
    <Box>
      <Drawer
        sx={{
          width: drawerWidth(props.open, theme),
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          transition: 'width 0.5s',
          transitionTimingFunction: 'ease',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth(props.open, theme),
            boxSizing: 'border-box',
            transition: 'width 0.5s',
            transitionTimingFunction: 'ease',
            overflowX: 'hidden',
          },
        }}
        variant="permanent"
      >
        <TopBar>
          <TopBarLogoBox>
            <Box
              sx={{
                pl: '0.5rem',
              }}
            >
              Logo Here
            </Box>
          </TopBarLogoBox>
          <TopBarIconButton onClick={toggleDrawer}>
            {props.open && <ChevronLeftIcon />}
            {!props.open && <MenuIcon />}
          </TopBarIconButton>
        </TopBar>
        <Divider />
        <List
          component="nav"
          sx={{
            p: 0,
          }}
        >
          {props.children}
        </List>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
