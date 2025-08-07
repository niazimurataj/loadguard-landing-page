import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/Login';
import SinglePostPage from './pages/SinglePostPage';
import MembersPage from './pages/MembersPage';
import PilotRequestPage from './pages/PilotRequestPage';


export default function App() {
  const appContainerStyle = {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#F9FAFB',
      color: '#111827',
  };

  const mainContentStyle = {
      flexGrow: 1,
  };

  return (
    <Router>
      <div style={appContainerStyle}>
        <Header />
        <main style={mainContentStyle}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<SinglePostPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/pilot" element={<PilotRequestPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}