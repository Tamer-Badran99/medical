import React from 'react';
import Icon from './Icon/Icon';

function Section({header , text , icon}) {

    return (
     <div className="col-md-6 col-lg-4">   
      <div className="section">
          <div className="row">

             <Icon icon={icon} />
             
             <div className="col-8 col-sm-9">
                <h4>{header}</h4>
                <p>{text}</p>
             </div>
          </div>
      </div>
     </div>
    );
}

export default Section;