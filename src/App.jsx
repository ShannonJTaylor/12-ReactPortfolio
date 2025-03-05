import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ErrorPage from './pages/Error';
import Home from './pages/Home';
import Resume from './pages/Resume';
import './App.css';
import NavTabs from './components/NavTabs';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <NavTabs />
        <Home />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/aboutme',
    element: (
      <>
        <Header />
        <NavTabs />
        <AboutMe />
        <Footer />
      </>
    ),
  },
  {
    path: '/portfolio',
    element: (
      <>
        <Header />
        <NavTabs />
        <Portfolio />
        <Footer />
      </>
    ),
  },
  {
    path: '/contact',
    element: (
      <>
        <Header />
        <NavTabs />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: '/resume',
    element: (
      <>
        <Header />
        <NavTabs />
        <Resume />
        <Footer />
      </>
    ),
  },
]);


function App() { 
  return (
    
    <RouterProvider router={router}/>
  );
};

export default App;