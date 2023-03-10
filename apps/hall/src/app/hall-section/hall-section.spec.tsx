import * as React from 'react';
import { render } from '@testing-library/react';

import HallSection from './hall-section';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HallSectionTestComponentProps {}

function HallSectionTestComponent(props: HallSectionTestComponentProps) {
  const [seatState, setSeatState] = React.useState(new Map<string, boolean>());

  return (
    <HallSection
      hallStatus={seatState}
      setHallStatus={setSeatState}
      section={{
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
