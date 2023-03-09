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
    <ListItemButton>
      <ListItemIcon>
        {props.icon}
      </ListItemIcon>
      <RouteLink to={props.to}>
        <ListItemText primary={props.children} />
      </RouteLink>
    </ListItemButton>
  );
}

export default Link;
