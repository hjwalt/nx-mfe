import { Provider as StoreProvider } from 'react-redux';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '@nx-mfe/ui';

import { store } from './store';
import PageHome from './page-home/page-home';

export function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PageHome />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
