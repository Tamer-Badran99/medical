import React from 'react';
import './LandingPage.css';
import ReactFitText from 'react-fittext';


function LandingPage() {
  
  return (
    <div className="landing-page">
       <div className="overlay"></div>
       <div className="container">
       <div className="introduction-text">
         <ReactFitText minFontSize={20} maxFontSize={50}>
           <h1>Quality Healthcare. <br className="d-none d-sm-block" />
               Accessible to Everyone.
           </h1>
         </ReactFitText>
         <p>Highest standards of customer service</p>
         <button>Know more</button>
       </div>
       </div>
    </div>

  );

}

export default LandingPage;