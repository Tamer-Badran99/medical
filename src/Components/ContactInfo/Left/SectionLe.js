import React from 'react';


function SectionLe({icon , span}) {

    return (
        <li>
        <i className={icon}></i>
        <span>{span}</span>
        </li>
    );
}

export default SectionLe;