import React, { useState } from 'react';
import './index.css';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  const [page, setPage] = useState('home');

  // This function will render the correct page based on the 'page' state.
  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage />;
      case 'solutions':
        return <SolutionsPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  const appContainerStyle = {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#F9FAFB',
      color: '#111827',
  };

  const mainContentStyle = {
      flexGrow: 1,
      padding: '2rem',
  };


  return (
    <div style={appContainerStyle}>
      {/* The Header component gets the 'setPage' function so it can change the view */}
      <Header setPage={setPage} />
      
      <main style={mainContentStyle}>
        {/* The conditional rendering happens here */}
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}
