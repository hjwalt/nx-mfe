import { render } from '@testing-library/react';

import PageHome from './page-home';

describe('PageHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageHome />);
    expect(baseElement).toBeTruthy();
  });
});
