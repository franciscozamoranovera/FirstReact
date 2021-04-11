import React from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/sections/profession/Banner';
import Portfolio from './components/sections/portfolio/Portfolio';
import Experience from './components/sections/experience/Experience';
import Contact from './components/sections/contact/Contact';
import Footer from './components/footer/Footer';
import Copyright from './components/footer/Copyright';


const App = () => {

  return (
    <>
      <Navbar />

      <Banner />

      <Portfolio />
      
      <Experience />

      <Contact />

      <Footer />

      <Copyright />
    </>
  )
};


export default App;
