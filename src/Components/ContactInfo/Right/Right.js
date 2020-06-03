import React, { useState, useEffect } from 'react';
import SectionRi from './SectionRi';
import Axios from 'axios';

function Right() {

    const [desc , setDesc] = useState([]);

    useEffect( () => {
      Axios.get('js/data.json').then(res => setDesc(res.data.ContactRight));
    },[])

    const item = desc.map( i => {
        return (
            <SectionRi key={i.id} icon={i.icon} />
        )
    })

    return (
       <div className="right">
        <ul>
            {item}
        </ul>
       </div>
    );
}

export default Right;