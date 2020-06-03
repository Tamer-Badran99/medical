import React from 'react';
import './Contact.css';
import Left from './Left/Left';
import Right from './Right/Right';

function Contact() {

    return (
           <div className="contact">
                <Left /> 
                <Right />
           </div>
    );
}

export default Contact;