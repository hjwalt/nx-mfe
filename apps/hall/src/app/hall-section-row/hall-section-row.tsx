import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

import { HallSectionRow as HallSectionRowModel } from '../domain/hall';
import { useTheme } from '@mui/material';

export interface HallSectionRowProps {
  hallStatus: Map<string, boolean>;
  setHallStatus: React.Dispatch<React.SetStateAction<Map<string, boolean>>>;
  row: HallSectionRowModel;
}

export function HallSectionRow(props: HallSectionRowProps) {
  const theme = useTheme();

  const checkboxes: JSX.Element[] = [];
  for (let i = 0; i < props.row.leftOffset; i++) {
    checkboxes.push(
      <Box
        key={`offset-${i}`}
        sx={{
          height: theme.spacing(4),
          width: '2rem',
          m: 0,
          p: 0,
        }}
      />
    );
  }
  for (let i = 0; i < props.row.seatCount; i++) {
    const seatId = `${props.row.rowNumber}-${i}`;
    const currCheckboxOnClick = () => {
      const copiedHallStatus = new Map<string, boolean>(props.hallStatus);
      copiedHallStatus.set(seatId, !copiedHallStatus.get(seatId));
      props.setHallStatus(copiedHallStatus);
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
          '& .MuiSvgIcon-root': {
            fontSize: theme.spacing(4),
            lineHeight: '1',
          },
        }}
        checked={!!props.hallStatus.get(seatId)}
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
