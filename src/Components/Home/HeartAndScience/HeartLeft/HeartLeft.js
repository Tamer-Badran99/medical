import React, { useState, useEffect } from 'react';
import Item from "./ItemGroup/Item";
import ReactFitText from 'react-fittext';
import Axios from 'axios';

function HeartLeft() {

    const [item,setItem] = useState([]);

    useEffect(() => {

      Axios.get('js/data.json').then(res => setItem(res.data.heart));

    }, [])

    const box = item.map( i => 
    {return <Item key={i.id} span={i.span} />})

   return (
    <div className="col-lg-6">
    <div className="desc-box">
        <p>25 Years of Medical Excellence</p>
        <ReactFitText minFontSize={15} maxFontSize={30}>
          <h2>The Heart and Science <span>of Medicine</span></h2>
        </ReactFitText>
        <p>We help your body restore itself by harnessing your own healing potential with a variety of techniques to combat areas of disease, injury or inflammation. This process involves a variety of techniques including a minimally invasive procedure conducted right in our clinic.</p>
        <div className="span-box">
        {box}
        </div>
        <a href="https://www.google.com/?hl=ar">Booking a visit<i className="fas fa-arrow-right"></i></a>
    </div>
 </div> 

   );

}

export default HeartLeft;