// App.js (Main Application File)
import React from 'react';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import KeyPrinciples from './components/KeyPrinciples';
import VisionMission from './components/VisionMission';
import ProvenStatistics from './components/ProvenStatistics';
import OurServices from './components/OurServices';
import AggregatesAvailableSize from './components/AggregatesAvailableSize';
import OurEquipments from './components/OurEquipments';
import OurProducts from './components/OurProducts';
import OurClients from './components/OurClients';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css'; // Assuming you have a CSS file for styling

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutUs />
        <KeyPrinciples />
        <VisionMission />
        <ProvenStatistics />
        <OurServices />
        <AggregatesAvailableSize />
        <OurEquipments />
        <OurProducts />
        <OurClients />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;