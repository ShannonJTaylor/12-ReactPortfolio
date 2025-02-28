// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Blog':
        return <Blog />;
      case 'Contact':
        return <Contact />;
      case 'Home':
        return <Home />;
      default:
        return <Error />;
    }
  };

  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;




// // Bringing in the required import from 'react-router-dom'
// import { Outlet } from 'react-router-dom';
// import Nav from './components/NavTabs';

// function App() {
//   // The Outlet component will conditionally swap between the different pages according to the URL
//   return (
//     <>
//       <Nav />
//       <main className="mx-3">
//        <Outlet /> 
//       </main>
//     </>
//   );
// }

// export default App;
