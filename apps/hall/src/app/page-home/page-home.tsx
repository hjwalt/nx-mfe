import * as React from 'react';

import Box from '@mui/material/Box';

import {
  HallSection as HallSectionModel,
  HallState,
  HallStateReducer as hallStateReducer,
} from '../domain/hall';
import HallSection from '../hall-section/hall-section';

const exampleSection: HallSectionModel = {
  id: 1,
  firstSeatNumber: 1,
  lastSeatNumber: 20,
  rows: [
    {
      id: 1,
      leftOffset: 0,
      seatCount: 20,
    },
    {
      id: 2,
      leftOffset: 1,
      seatCount: 19,
    },
    {
      id: 3,
      leftOffset: 0,
      seatCount: 20,
    },
    {
      id: 4,
      leftOffset: 0,
      seatCount: 20,
    },
    {
      id: 5,
      leftOffset: 0,
      seatCount: 20,
    },
    {
      id: 6,
      leftOffset: 0,
      seatCount: 20,
    },
    {
      id: 7,
      leftOffset: 0,
      seatCount: 20,
    },
    {
      id: 8,
      leftOffset: 0,
      seatCount: 20,
    },
    {
      id: 9,
      leftOffset: 0,
      seatCount: 20,
    },
    {
      id: 10,
      leftOffset: 0,
      seatCount: 20,
    },
  ],
};

/* eslint-disable-next-line */
export interface PageHomeProps {}

export function PageHome(props: PageHomeProps) {
  const [state, dispatch] = React.useReducer(hallStateReducer, new HallState());

  const toggleSeatStatus = (
    zone: string,
    section: number,
    row: number,
    seat: number
  ) => {
    dispatch({
      zone: zone,
      section: section,
      row: row,
      seat: seat,
    });
    return;
  };

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
        // state={state.getZone('A').getSection(1)}
        // toggleSeatStatus={toggleSeatStatus}
        zone="A"
        section={exampleSection}
      />
      <HallSection
        // state={state.getZone('B').getSection(1)}
        // toggleSeatStatus={toggleSeatStatus}
        zone="B"
        section={exampleSection}
      />
      <HallSection
        // state={state.getZone('C').getSection(1)}
        // toggleSeatStatus={toggleSeatStatus}
        zone="C"
        section={exampleSection}
      />
    </Box>
  );
}

export default PageHome;
