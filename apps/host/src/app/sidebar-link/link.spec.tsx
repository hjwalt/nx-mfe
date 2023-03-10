import { render } from '@testing-library/react';

import DashboardIcon from '@mui/icons-material/Dashboard';

import SidebarLink from './link';

describe('Link', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SidebarLink to='/test' icon={<DashboardIcon />}>test</SidebarLink>);
    expect(baseElement).toBeTruthy();
  });
});
