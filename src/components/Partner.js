import React from "react";
import {Container } from "react-bootstrap";
import Client1 from '../assets/dua kelinci.png';
import Client2 from '../assets/teh pucuk.jpg';
import Client3 from '../assets/minyakita.png';
import Client4 from '../assets/platinum.png';
import Client5 from '../assets/plenty.png';


function Partner() {
    const partners = [ Client1 ,Client2,Client3,Client4, Client5, ];
    
    return(
    <Container id="partner">
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
            {partners.concat(partners).map((logo, i) => (
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