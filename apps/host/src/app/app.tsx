import * as React from 'react';

import { Route, Routes } from 'react-router-dom';

import DashboardIcon from '@mui/icons-material/Dashboard';
import Divider from '@mui/material/Divider';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Ui } from '@nx-mfe/ui';

import LinkItem from './link/link';
import Dashboard from './dashboard/dashboard';

import NxWelcome from './nx-welcome';

const Shop = React.lazy(() => import('shop/Module'));
const Cart = React.lazy(() => import('cart/Module'));
const About = React.lazy(() => import('about/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Dashboard
        route={
          <>
            <LinkItem to="/" icon={<DashboardIcon />}>
              Home
            </LinkItem>
            <LinkItem to="/shop" icon={<DashboardIcon />}>
              Shop
            </LinkItem>
            <Divider sx={{ my: 1 }} />
            <LinkItem to="/cart" icon={<DashboardIcon />}>
              Cart
            </LinkItem>
            <LinkItem to="/about" icon={<DashboardIcon />}>
              About
            </LinkItem>
          </>
        }
        body={
          <>
            <Ui></Ui>
            <Routes>
              <Route path="/" element={<NxWelcome title="host" />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </>
        }
      />
    </React.Suspense>
  );
}

export default App;
