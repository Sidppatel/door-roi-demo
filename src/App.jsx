import React from 'react';
import { ThemeProvider } from './hooks/useTheme';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary fallbackMessage="The application encountered an error. Please refresh the page.">
        <Navbar />
        <div className="page">
          <Hero />
          <Dashboard />
          <ContactForm />
          <Footer />
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
