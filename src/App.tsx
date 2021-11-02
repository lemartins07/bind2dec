import { GlobalStyle } from './styles/global';

import { Home } from './pages/Home';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
