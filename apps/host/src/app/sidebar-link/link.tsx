import { Link as RouteLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import ListItemButton, {
  ListItemButtonProps,
} from '@mui/material/ListItemButton';
import ListItemIcon, { ListItemIconProps } from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import styles from './link.module.scss';

const SidebarLinkButton = styled(ListItemButton)<ListItemButtonProps>(
  ({ theme }) => ({
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  })
);

const SidebarLinkIcon = styled(ListItemIcon)<ListItemIconProps>(
  ({ theme }) => ({
    minWidth: theme.spacing(10),
    fontSize: theme.spacing(4),
    padding: 0,
  })
);

export interface SidebarLinkProps {
  to: string;
  icon: JSX.Element;
  children: JSX.Element | string;
}

export function SidebarLink(props: SidebarLinkProps) {
  return (
    <RouteLink to={props.to} className={styles['link']}>
      <SidebarLinkButton>
        <SidebarLinkIcon>{props.icon}</SidebarLinkIcon>
        <ListItemText primary={props.children} />
      </SidebarLinkButton>
    </RouteLink>
  );
}

export default SidebarLink;
