import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

// import Error from './pages/Error';
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import About from './pages/About';
// import Blog from './pages/Blog';



//Define the accessible routes, and which components respond to which URL
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   }
    // errorElement: <Error />,
    // children: [
    //   // {
      //   //index: true,
      //   path: '/Home',
      //   element: <Home />,
      // },
  //     {
  //       path: '/About',
  //       element: <About />,
  //     },
  //     {
  //       path: '/Blog',
  //       element: <Blog />,
  //     },
  //     {
  //       path: '/Contact',
  //       element: <Contact />,
  //     },
  //   ],
  // },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   <App />
    
  </React.StrictMode>
);
