import React from "react";
import {Container } from "react-bootstrap";
import Client1 from '../assets/dua kelinci.png';
import Client2 from '../assets/teh pucuk.jpg';
import Client3 from '../assets/minyakita.png';
import Client4 from '../assets/platinum.png';
import Client5 from '../assets/plenty.png';
import Client6 from '../assets/sun paper.png';
import Client7 from '../assets/Mayora logo.png';
import Client8 from '../assets/Taco.png';
import Client9 from '../assets/Wings.png';
import Client10 from '../assets/pokphand.png';



function Partner() {
    const partners = [ Client1 ,Client2,Client3,Client4, Client5, ];
    const partners2 = [ Client6 ,Client7,Client8,Client9, Client10, ];
    
    return(
    <Container id="partner" className="scroll-offset py-5">
            <h2 className="text-center mb-5" >Our Partner</h2>
           <div className="slider">
            <div className="slide-track">
            {partners.concat(partners).map((logo, i) => (
            <div className="slide" key={i}>
              <img src={logo} alt={`Partner ${i + 1}`} />
            </div>
                ))}
            </div>
           </div>
           <div className="slider">
            <div className="slide-track-right">
            {partners2.concat(partners2).map((logo, i) => (
            <div className="slide" key={i}>
              <img src={logo} alt={`Partner ${i + 1}`} />
            </div>
                ))}
            </div>
           </div>

    </Container>
    );
}

export default Partner;