import React, { useState, useEffect } from 'react';
import SectionLe from './SectionLe';
import Axios from 'axios';

function Left() {

    const [Sec , setSec] = useState([]);

    useEffect( () => {
      Axios.get('js/data.json').then(res => setSec(res.data.ContactLeft));
    },[])

    const item = Sec.map( i => {
        return (
            <SectionLe key={i.id} icon={i.icon} span={i.span} />
        )
    })

    return (
        <div className="left">
        <ul>
       {item}
       </ul>
       </div>
    );
}

export default Left;