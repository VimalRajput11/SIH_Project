import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import LandingPage from './pages/LandingPage';
import ExploreMonasteries from './pages/ExploreMonasteries';
import VirtualTour from './pages/VirtualTour';
import DigitalArchives from './pages/DigitalArchives';
import CulturalCalendar from './pages/CulturalCalendar';
import AudioGuide from './pages/AudioGuide';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/explore" element={<ExploreMonasteries />} />
            <Route path="/virtual-tour" element={<VirtualTour />} />
            <Route path="/archives" element={<DigitalArchives />} />
            <Route path="/calendar" element={<CulturalCalendar />} />
            <Route path="/audio-guide" element={<AudioGuide />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;