import { HallZone } from '../domain/hall';

export const mainHallZoneA: HallZone = {
  id: 'a',
  sections: [
    {
      id: 1,
      firstSeatNumber: 1,
      lastSeatNumber: 20,
      rows: [
        {
          id: 1,
          leftOffset: 10,
          seatCount: 2,
        },
      ],
    },
  ],
};
