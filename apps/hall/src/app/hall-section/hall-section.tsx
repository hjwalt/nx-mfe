import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import { HallSection as HallSectionModel } from '../domain/hall';
import HallSectionRow from '../hall-section-row/hall-section-row';
import { Typography } from '@mui/material';

export interface HallSectionProps {
  hallStatus: Map<string, boolean>;
  setHallStatus: React.Dispatch<React.SetStateAction<Map<string, boolean>>>;
  section: HallSectionModel;
}

export function HallSection(props: HallSectionProps) {
  const rows: JSX.Element[] = [];
  for (const row of props.section.rows) {
    rows.push(
      <HallSectionRow
        key={row.rowNumber}
        hallStatus={props.hallStatus}
        setHallStatus={props.setHallStatus}
        row={row}
      />
    );
  }

  return (
    <Paper
      sx={{
        width: '100%',
      }}
      variant="outlined"
    >
      <Typography variant='h5'>test 2</Typography>
      <Box
        sx={{
          p: 2,
          m: 0,
          width: '100%',
          overflowX: 'auto',
        }}
      >
        {rows}
      </Box>
    </Paper>
  );
}

export default HallSection;
