import { render } from '@testing-library/react';

import HallSeatLabel from './hall-seat-label';

describe('HallSeatLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HallSeatLabel />);
    expect(baseElement).toBeTruthy();
  });
});
