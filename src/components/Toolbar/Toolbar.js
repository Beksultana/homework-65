import React from 'react';
import './Toolbar.css';
import {NavLink} from "react-router-dom";
import {Container, Nav, Navbar, NavbarBrand, NavItem} from "reactstrap";

const styleActive = {
    borderBottom: "4px solid gold",
    color: "gold"
};

const Toolbar = () => (
    <header className="Toolbar">
       <Container>
           <Navbar className="Navbar" dark light expand="md">
               <NavbarBrand href="/">Static Pages</NavbarBrand>
               <Nav className="ml-auto" navbar>
                   <NavItem>
                       <NavLink activeStyle={styleActive} to="/pages/home" exact>Home</NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink activeStyle={styleActive} to="/pages/contacts" exact>Contacts</NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink activeStyle={styleActive} to="/pages/about" exact>About</NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink activeStyle={styleActive} to="/pages/product" exact>Product</NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink activeStyle={styleActive} to="/pages/news" exact>News</NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink activeStyle={styleActive} to="/pages/islam" exact>Islam</NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink activeStyle={styleActive} to="/admin" exact>Admin</NavLink>
                   </NavItem>
               </Nav>
           </Navbar>
       </Container>
    </header>
);

export default Toolbar;