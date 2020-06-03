import React, { Fragment } from 'react';
import Info from './Info/Info.js';
import HeartAndScience from './HeartAndScience/HeartAndScience';
import ChooseUs from './ChooseUs/ChooseUs';
import Services from './Services/Services';
import LandingPage from './LandingPage/LandingPage';


function Home() {

 return (
   <Fragment> 

<LandingPage />
     <Info />
     <HeartAndScience />
     <ChooseUs />
     <Services />
   </Fragment>
 );

}

export default Home;