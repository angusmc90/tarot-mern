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
  const [spread, setSpread] = useState({});

  return (
    <main className="App">
      {user ? 
        <>
        {/* <NavBar/> */}
        <Routes>
          <Route path="/" element={<DeckPage setSpread={setSpread}/>}/>
          <Route path="/fortune" element={<FortunePage spread={spread}/>}/>
        </Routes>
        </>
        :
        <AuthPage/>
      }      
    </main>
  );
}

export default App;
