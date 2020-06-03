import React, { useState, useEffect } from 'react';
import DivBox from './DivBox/DivBox';
import Axios from 'axios';

function WhyText () {

     const [choose , setChoose] = useState([]);

     useEffect (() => {
       Axios.get('js/data.json').then(res => setChoose(res.data.chooseUs));

     },[]);

   const List = choose.map( li => {
    return (
       <DivBox key={li.id} span={li.span} header={li.header} text={li.text} />
    )
   })


  return (
   <div className="why-text">   
    <span>See the Difference</span>
    <h2>Why Choose Us?</h2>
    
      {List}

   </div>
  );

}

export default WhyText;