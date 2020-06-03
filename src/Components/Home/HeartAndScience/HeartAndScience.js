import React from 'react';
import HeartLeft from './HeartLeft/HeartLeft';
import HeartRight from './HeartRight/HeartRight';
import './Heart.css';


function HeartAndScience() {

   return (
        <div className="heart-science">
            <div className="container">
                <div className="row">
                   
                    <HeartLeft />
                    <HeartRight />

                </div>
            </div>
        </div>
   );

}

export default HeartAndScience;