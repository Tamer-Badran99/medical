import React from 'react';

function DivBox ({span , header , text}) {

  return (
   <div className="div-box">   
    
      <div className="left">
         <span>{span}</span>
      </div>
      
      <div className="right">
          <h5>{header}</h5>
          <p>{text}</p>
      </div>
      

   </div>
  );

}

export default DivBox;