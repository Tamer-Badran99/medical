import React from 'react';
import Left from './Left/Left';
import Right from './Right/Right';
import './ContactInfo.css';

function ContactInfo() {

  return (
     <div className="contact-info">
         <div className="container">
             <Left />
             <Right />

         </div>
     </div>
  );

}

export default ContactInfo;