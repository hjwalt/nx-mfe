import * as React from 'react';

import Box from '@mui/material/Box';

import { HallSection as HallSectionModel } from '../domain/hall';
import HallSection from '../hall-section/hall-section';


const exampleSection: HallSectionModel = {
  sectionNumber: 1,
  rows: [
    {
      rowNumber: 1,
      leftOffset: 0,
      seatCount: 20,
    },
    {
      rowNumber: 2,
      leftOffset: 1,
      seatCount: 19,
    },
    {
      rowNumber: 3,
      leftOffset: 0,
      seatCount: 20,
    },
  ],
};

/* eslint-disable-next-line */
export interface PageHomeProps {}

export function PageHome(props: PageHomeProps) {
  const [seatState, setSeatState] = React.useState(new Map<string, boolean>());

  return (
    <Box
      sx={{
        p: 2,
        overflowY: 'auto',
        width: 'inherit',
        height: 'inherit',
      }}
    >
      <HallSection
        hallStatus={seatState}
        setHallStatus={setSeatState}
        section={exampleSection}
      />
    </Box>
  );
}

export default PageHome;
