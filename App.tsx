import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import JobSearchPage from './pages/JobSearchPage';
import VerifiedJobsPage from './pages/VerifiedJobsPage';
import UserDashboard from './pages/UserDashboard';
import EmployerPage from './pages/EmployerPage';
import HelpPage from './pages/HelpPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-thai">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/jobs" element={<JobSearchPage />} />
            <Route path="/verified-jobs" element={<VerifiedJobsPage />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/employer" element={<EmployerPage />} />
            <Route path="/help" element={<HelpPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;