import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

import { HallSectionRow as HallSectionRowModel } from '@nx-mfe/domain';

export interface HallSectionRowProps {
  hallStatus: Map<string, boolean>;
  setHallStatus: React.Dispatch<React.SetStateAction<Map<string, boolean>>>;
  row: HallSectionRowModel;
}

export function HallSectionRow(props: HallSectionRowProps) {
  const checkboxes: JSX.Element[] = [];
  for (let i = 0; i < props.row.leftOffset; i++) {
    checkboxes.push(
      <Box
        key={`offset-${i}`}
        sx={{
          height: '2rem',
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
          height: '2rem',
          width: '2rem',
          p: '0.5rem',
          '& .MuiSvgIcon-root': {
            fontSize: '1rem',
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
