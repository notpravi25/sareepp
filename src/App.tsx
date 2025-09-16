import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  if (showAdmin) {
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      {/* Admin Access Button - Hidden in top right */}
      <button
        onClick={() => setShowAdmin(true)}
        className="fixed top-4 right-4 z-50 bg-gray-800 text-white px-3 py-1 rounded text-xs opacity-20 hover:opacity-100 transition-opacity"
      >
        Admin
      </button>
      <Hero />
      <Services />
      <Gallery />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;