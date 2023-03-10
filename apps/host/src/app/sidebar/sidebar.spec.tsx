import * as React from 'react';
import { render } from '@testing-library/react';

import Sidebar from './sidebar';

export interface SidebarTestComponentProps {
  children: JSX.Element;
}

function SidebarTestComponent(props: SidebarTestComponentProps) {
  const [open, setOpen] = React.useState(true);

  return (
    <Sidebar open={open} setOpen={setOpen}>
      {props.children}
    </Sidebar>
  );
}

describe('Sidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SidebarTestComponent>
        <div></div>
      </SidebarTestComponent>
    );
    expect(baseElement).toBeTruthy();
  });
});
