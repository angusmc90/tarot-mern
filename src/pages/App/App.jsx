import { useState } from 'react';

// Import the following components
import AuthPage from '../AuthPage/AuthPage';
import FortunePage from '../FortunePage/FortunePage';

// import logo from './logo.svg';
import './App.css';

function App() {

  const [user, setUser] = useState({angusTest});

  return (
    <main className="App">
      <FortunePage />
    </main>
  );
}

export default App;
