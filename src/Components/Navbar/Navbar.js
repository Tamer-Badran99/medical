import React from 'react';
import { NavLink} from "react-router-dom";
import { Button } from 'react-bootstrap';
import {Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import Brand from '../../Images/Navbar-Brand.png';
import './Navbar.css';


function Navbarr() {

   return (
    <Navbar bg="light" expand="lg">
        <div className="container">
    <NavLink className="navbar-brand brand" to="/"><img id="df" src={Brand} alt="brand" /></NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavLink className="nav-link" exact to="/">Home</NavLink>
        <NavLink className="nav-link" to="/faq">FAQ</NavLink>
        <NavLink className="nav-link" to="/events">EVENTS</NavLink>
        <NavLink className="nav-link" to="/contact">CONTACTS</NavLink>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
    </div>
  </Navbar>

   );

}

export default Navbarr;