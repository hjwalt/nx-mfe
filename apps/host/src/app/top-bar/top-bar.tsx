import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

export const TopBar = styled(Box)<BoxProps>(({ theme }) => ({
  height: theme.spacing(14),
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));

export default TopBar;
