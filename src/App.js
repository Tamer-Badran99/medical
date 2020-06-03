import React, { Fragment } from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import ContactInfo from './Components/ContactInfo/ContactInfo';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';


function App() {

  return (
    <Fragment>

    <BrowserRouter>
   
      <ContactInfo />
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
    
      </BrowserRouter>

    </Fragment>
  );


}

export default App;

