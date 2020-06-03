import React from 'react';
import Form from './Form/Form';

function Left() 
{
    return (
       <div className="left">
         <h2>Looking for a <span>Certified Doctor?</span></h2>
         <p>We believe in providing the best possible care to all our existing patients and welcome new patients to sample.</p>
         <Form />
       </div>
    );
}

export default Left;