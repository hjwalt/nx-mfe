import * as React from 'react';
import { render } from '@testing-library/react';

import HallSection from './hall-section';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HallSectionTestComponentProps {}

function HallSectionTestComponent(props: HallSectionTestComponentProps) {
  return (
    <HallSection
      zone="A"
      section={{
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
        ],
      }}
    />
  );
}

describe('HallSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HallSectionTestComponent />);
    expect(baseElement).toBeTruthy();
  });
});
