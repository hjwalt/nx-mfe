import { useTheme } from '@mui/material';

import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

import {
  HallSectionRow as HallSectionRowModel,
  seatId as getSeatId,
} from '../domain/hall';
import HallSeatLabel from '../hall-seat-label/hall-seat-label';

export interface HallSectionRowProps {
  zone: string;
  section: number;
  row: HallSectionRowModel;
}

export function HallSectionRow(props: HallSectionRowProps) {
  const theme = useTheme();

  const checkboxes: JSX.Element[] = [];
  checkboxes.push(<HallSeatLabel key="label">{props.row.id}</HallSeatLabel>);

  for (let i = 0; i < props.row.leftOffset; i++) {
    checkboxes.push(<HallSeatLabel key={`whitespace-${i}`} />);
  }
  for (let i = 0; i < props.row.seatCount; i++) {
    const seatId = getSeatId(props.zone, props.section, props.row.id, i);
    const currCheckboxOnClick = () => {
      // props.toggleSeatStatus(props.zone, props.section, props.row.id, i);
    };

    checkboxes.push(
      <Checkbox
        key={seatId}
        size="small"
        sx={{
          display: 'block',
          height: theme.spacing(8),
          width: theme.spacing(8),
          p: theme.spacing(2),
          flex: 'none',
          '& .MuiSvgIcon-root': {
            fontSize: theme.spacing(4),
            lineHeight: '1',
          },
        }}
        checked={false}
        onClick={currCheckboxOnClick}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      {checkboxes}
    </Box>
  );
}

export default HallSectionRow;
