import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Imgcarousel from './components/Imgcarousel';
import Imgcarousel2 from './components/Imgcarousel2';
import Imgcarousel3 from './components/Imgcarousel3';
import Imgcarousel4 from './components/Imgcarousel4';
import Imgcarousel5 from './components/Imgcarousel5';

// import Recipes from './components/Recipes';
// import Contact from './components/Contact';


function App() {
  return (
    <React.Fragment> 
      <Navbar />
      <Imgcarousel />
      <Imgcarousel2 />
      <Imgcarousel3 />
      <Imgcarousel4 />
      <Imgcarousel5 />
      <Footer />
  </React.Fragment> 
  );
}

export default App;
