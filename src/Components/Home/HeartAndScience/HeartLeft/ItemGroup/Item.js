import React from 'react';

function Item({span}) {

   return (
     <div className="item-box">
        <i className="fas fa-check"></i>
        <span>{span}</span>
     </div>   

   );

}

export default Item;