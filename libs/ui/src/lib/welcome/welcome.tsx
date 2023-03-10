import Typography from '@mui/material/Typography';

// import styles from './welcome.module.scss';

export interface WelcomeProps {
  children: JSX.Element | string
}

export function Welcome(props: WelcomeProps) {
  return (
    <Typography
      component="h1"
      variant="h1"
      color="inherit"
      noWrap
      sx={{
        flexGrow: 1,
      }}
    >
      test
      {props.children}
    </Typography>
  );
}

export default Welcome;
