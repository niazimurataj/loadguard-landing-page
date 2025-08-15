import React, { useContext } from 'react';
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
import { Toaster } from "@/components/ui/sonner";
import AdversaryUniversePage from './pages/AdversaryUniversePage';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import darkThemeStyles from './pages/AdversaryUniversePage.module.css';
import ScrollToTop from './components/ScrollToTop';

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  const appContainerStyle = {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: theme === 'light' ? '#F9FAFB' : '#000',
      color: theme === 'light' ? '#111827' : '#fff',
      transition: 'background-color 0.5s, color 0.5s',
      position: 'relative',
  };

  const mainContentStyle = {
      flexGrow: 1,
  };

  return (
    <div style={appContainerStyle} className={theme === 'dark' ? darkThemeStyles.darkThemeAnimation : ''}>
      <Header />
      <main style={mainContentStyle}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/adversary-universe" element={<AdversaryUniversePage />} />
          <Route path="/blog/:slug" element={<SinglePostPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/pilot" element={<PilotRequestPage />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Router>
  );
}