import { render } from '@testing-library/react';

import DashboardIcon from '@mui/icons-material/Dashboard';

import Link from './link';

describe('Link', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Link to='/test' icon={<DashboardIcon />}>test</Link>);
    expect(baseElement).toBeTruthy();
  });
});
