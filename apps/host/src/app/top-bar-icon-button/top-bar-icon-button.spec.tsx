import { render } from '@testing-library/react';

import TopBarIconButton from './top-bar-icon-button';

describe('TopBarIconButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopBarIconButton />);
    expect(baseElement).toBeTruthy();
  });
});
