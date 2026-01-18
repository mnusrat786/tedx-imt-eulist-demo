import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Matching from './pages/Matching';
import Events from './pages/Events';
import Community from './pages/Community';
import Partners from './pages/Partners';

function App() {
  const [user, setUser] = useState({
    name: 'Marie Dubois',
    school: 'IMT Atlantique',
    country: 'France',
    interests: ['Tech for Good', 'Climate Action', 'European Citizenship']
  });

  return (
    <Router>
      <div className="App">
        <Header user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
          <Route path="/matching" element={<Matching user={user} />} />
          <Route path="/events" element={<Events />} />
          <Route path="/community" element={<Community />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;