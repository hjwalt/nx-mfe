import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import {
  HallSection as HallSectionModel,
} from '../domain/hall';
import HallSectionRow from '../hall-section-row/hall-section-row';
import HallSeatLabel from '../hall-seat-label/hall-seat-label';

export interface HallSectionProps {
  zone: string;
  section: HallSectionModel;
}

export function HallSection(props: HallSectionProps) {
  const labels: JSX.Element[] = [];
  labels.push(
    <HallSeatLabel key="id">
      <strong>
        {props.zone}
        {props.section.id}
      </strong>
    </HallSeatLabel>
  );
  for (
    let i = props.section.firstSeatNumber;
    i <= props.section.lastSeatNumber;
    i++
  ) {
    labels.push(<HallSeatLabel key={i}>{i}</HallSeatLabel>);
  }

  const rows: JSX.Element[] = [];
  for (const row of props.section.rows) {
    rows.push(
      <HallSectionRow
        key={row.id}
        zone={props.zone}
        section={props.section.id}
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
      <Box
        sx={{
          p: 2,
          m: 0,
          width: '100%',
          overflowX: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {labels}
        </Box>
        {rows}
      </Box>
    </Paper>
  );
}

export default HallSection;
