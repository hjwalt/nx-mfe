import * as React from 'react';

import { Route, Routes } from 'react-router-dom';

import DashboardIcon from '@mui/icons-material/Dashboard';
import Divider from '@mui/material/Divider';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import LinkItem from './sidebar-link/link';
import Dashboard from './dashboard/dashboard';

const Hall = React.lazy(() => import('hall/Module'));
const Shop = React.lazy(() => import('shop/Module'));
const About = React.lazy(() => import('about/Module'));
const Scheduling = React.lazy(() => import('scheduling/Module'));

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
            <Divider />
            <LinkItem to="/about" icon={<DashboardIcon />}>
              About
            </LinkItem>
            <LinkItem to="/scheduling" icon={<DashboardIcon />}>
              Scheduling
            </LinkItem>
          </>
        }
        body={
          <Routes>
            <Route path="/" element={<Hall />} />
            <Route path="/hall" element={<Hall />} />
            <Route
              path="/scheduling"
              element={<Scheduling title="another" />}
            />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/scheduling" element={<Scheduling />} />
          </Routes>
        }
      />
    </React.Suspense>
  );
}

export default App;
