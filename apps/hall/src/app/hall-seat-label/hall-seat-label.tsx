import { useTheme } from '@mui/material';

import Box from '@mui/material/Box';

export interface HallSeatLabelProps {
  children?: number | string | JSX.Element;
}

export function HallSeatLabel(props: HallSeatLabelProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'block',
        height: theme.spacing(8),
        width: theme.spacing(8),
        m: 0,
        p: 0,
        fontSize: theme.spacing(3),
        lineHeight: theme.spacing(8),
        textAlign: 'center',
        flex: 'none',
      }}
    >
      {props.children}
    </Box>
  );
}

export default HallSeatLabel;
