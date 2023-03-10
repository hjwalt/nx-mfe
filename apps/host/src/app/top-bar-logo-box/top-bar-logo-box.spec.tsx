import { render } from '@testing-library/react';

import TopBarLogoBox from './top-bar-logo-box';

describe('TopBarLogoBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopBarLogoBox />);
    expect(baseElement).toBeTruthy();
  });
});
