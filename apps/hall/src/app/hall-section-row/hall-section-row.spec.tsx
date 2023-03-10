import * as React from 'react';
import { render } from '@testing-library/react';

import HallSectionRow from './hall-section-row';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HallSectionRowTestComponentProps {}

function HallSectionRowTestComponent(props: HallSectionRowTestComponentProps) {
  return (
    <HallSectionRow
      state={{
        seats: new Map<number, boolean>(),
      }}
      toggleSeatStatus={(
        zone: string,
        section: number,
        row: number,
        seat: number
      ) => {
        return;
      }}
      zone="A"
      section={1}
      row={{
        id: 1,
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
