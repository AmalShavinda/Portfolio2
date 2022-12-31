import React from 'react';
import Footer from '../components/Footer';
import HeroImg from '../components/HeroImg';
import Navbar from '../components/Navbar';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
};

export default Home;
