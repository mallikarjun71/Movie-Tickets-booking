import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';

const REDIRECT_DELAY_MS = 5000;

function RedirectAfterDelay() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/main');
    }, REDIRECT_DELAY_MS);
    return () => clearTimeout(timer);
  }, [navigate]);

  return <LandingPage />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RedirectAfterDelay />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
