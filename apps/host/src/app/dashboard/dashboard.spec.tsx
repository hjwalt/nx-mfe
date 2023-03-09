import { render } from '@testing-library/react';

import Dashboard from './dashboard';

describe('Dashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dashboard route={(<div></div>)} body={(<div></div>)}/>);
    expect(baseElement).toBeTruthy();
  });
});
