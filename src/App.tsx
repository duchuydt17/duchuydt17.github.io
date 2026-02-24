import { LandingPage } from './components/LandingPage/LandingPage';

import './index.css'

function App() {

  const showLanding = true;

  if (showLanding) {
    return <LandingPage />;
  }

  return null;
}

export default App
