import React, { useState, useEffect } from 'react';
import Section from './Section/Section.js';
import './Info.css';
import Axios from 'axios';

function Info() {

    const [Info,setInfo] = useState([]);

    useEffect( () => {  
      Axios.get('js/data.json').then(res => {setInfo(res.data.info)});
    },[])

    const Item = Info.map( (item) => {
      return (
        <Section key={item.id} header={item.header} text={item.text} icon={item.icon} />
      )
  })

  return (
   
       <div className="Info">
          <div className="container">
              <div className="row">
                 {Item}
              </div>
          </div>
       </div>
  );

}

export default Info;