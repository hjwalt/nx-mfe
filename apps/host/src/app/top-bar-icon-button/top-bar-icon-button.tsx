import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

export const TopBarIconButton = styled(IconButton)<IconButtonProps>(
  ({ theme }) => ({
    padding: theme.spacing(2),
    width: theme.spacing(10),
    height: theme.spacing(10),
  })
);

export default TopBarIconButton;
