import React, { useState, useEffect } from 'react';
import Section from './Section/Section';
import './Services.css';
import Axios from 'axios';

function Services() {

    const [ser , setSer] = useState([]);

    useEffect(() => {
     Axios.get('js/data.json').then(res => setSer(res.data.services));
    },[])

    const item = ser.map( i => {
        return (
            <Section key={i.id} s={i.id} icon={i.icon} header={i.header} text={i.text} />
        )
    })

  return (

     <div className="services">
        <div className="container"> 
         <h2>Our Services</h2>
             <div className="row">
               {item}
             </div>
         </div>
     </div>

  );

}

export default Services;