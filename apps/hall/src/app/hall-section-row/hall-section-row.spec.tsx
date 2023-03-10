import * as React from 'react';
import { render } from '@testing-library/react';

import HallSectionRow from './hall-section-row';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HallSectionRowTestComponentProps {}

function HallSectionRowTestComponent(props: HallSectionRowTestComponentProps) {
  const [seatState, setSeatState] = React.useState(new Map<string, boolean>());

  return (
    <HallSectionRow
      hallStatus={seatState}
      setHallStatus={setSeatState}
      row={{
        rowNumber: 1,
        leftOffset: 0,
        seatCount: 20,
      }}
    />
  );
}

describe('HallSectionRow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HallSectionRowTestComponent />);
    expect(baseElement).toBeTruthy();
  });
});
