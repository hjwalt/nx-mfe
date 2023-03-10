import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

export const TopBarLogoBox = styled(Box)<BoxProps>(({ theme }) => ({
  maxHeight: theme.spacing(10),
  maxWidth: theme.spacing(46),
  padding: 0,
  overflowX: 'hidden',
  overflowY: 'hidden',
  flexGrow: '1',
}));

export default TopBarLogoBox;
