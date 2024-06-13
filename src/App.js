import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Mainpage from './components/Mainpage';
import BreakFast from './components/BreakFast';
import Dinner from './components/Dinner';
import Cocktails from './components/Cocktails';
import Dessert from './components/Dessert';
import Tryerror from './components/Tryerror';

// import Recipes from './components/Recipes';
// import Contact from './components/Contact';


function App() {
  return (
    <React.Fragment> 
      <Navbar />
      <Mainpage />
      <BreakFast />
      <Dinner />
      <Cocktails />
      <Dessert />
      <Footer />
      <Tryerror />
  </React.Fragment> 
  );
}

export default App;
