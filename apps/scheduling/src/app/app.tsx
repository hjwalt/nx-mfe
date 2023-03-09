// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export interface AppProps {
  title: string;
}

export function App(props: AppProps) {
  return (
    <>
      <NxWelcome title={props.title} />

      <div />
    </>
  );
}

export default App;
