import React from 'react'
import Nav from './Nav.jsx'
import Bigcard from './Bigcard.jsx'
import Card from './Card.jsx';
import About from './About.jsx';
import Card2 from './Card2.jsx';
import Card3 from './Card3.jsx';
import Photobanner from './Photobanner.jsx';
import Mypricing from './Mypricing.jsx';
import Icons from './Icons.jsx';
import Latest from './Latest.jsx';
import Footer from './Footer.jsx';
import Client from './Client.jsx';




const Home = () => {
  return (
    <div className="h-[90vh] lg : w-full">
      <Nav />
      <Bigcard />
      <Card/>
      <About/>
      <Card2/>
      <Card3/>
      <Photobanner/>
      <Mypricing/>
      <Icons/>
      <Client/>
      <Latest/>
      <Footer/>
      
    </div>
  );
}
export default Home