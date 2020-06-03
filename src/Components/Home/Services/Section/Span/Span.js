import React from 'react';


function Span({span}) {

  return (
    <div className="group">
       <div className="row">
     <div className="col-2"> 
    <i className="fas fa-check"></i>
    </div>
    <div className="col-10"> 
    <span>{span}</span>
    </div>
    </div>
    </div>
  );

}

export default Span;