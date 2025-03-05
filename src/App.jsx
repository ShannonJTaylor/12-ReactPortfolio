import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';
import './App.css';
import NavTabs from './components/NavTabs';

const App = () => {
 
  return (
    <Router>
    <div className="app-container">
      <Header />
      <NavTabs />            
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          </Routes>        
      </main>
      <Footer />
    </div>
    </Router>
  );
};

export default App;