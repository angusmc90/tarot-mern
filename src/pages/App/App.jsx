import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Import the following components
import AuthPage from '../AuthPage/AuthPage';
import FortunePage from '../FortunePage/FortunePage';
import DeckPage from '../DeckPage/DeckPage';

// import logo from './logo.svg';
import './App.css';

function App() {

  const [user, setUser] = useState({name:angusTest});

  return (
    <main className="App">
      {user ? 
        <>
        {/* <NavBar/> */}
        <Routes>
          <Route path="" element={<DeckPage />}/>
          <Route path="" element={<FortunePage />}/>
        </Routes>
        </>
        :
        <AuthPage/>
      }      
    </main>
  );
}

export default App;
