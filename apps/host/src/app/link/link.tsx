import { Link as RouteLink } from 'react-router-dom';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// import styles from './link.module.scss';

/* eslint-disable-next-line */
export interface LinkProps {
  to: string;
  icon: JSX.Element;
  children: JSX.Element | string;
}

export function Link(props: LinkProps) {
  return (
    <RouteLink to={props.to}>
      <ListItemButton>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.children} />
      </ListItemButton>
    </RouteLink>
  );
}

export default Link;
