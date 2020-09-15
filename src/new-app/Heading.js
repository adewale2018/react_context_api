import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem, NavbarBrand, Container } from "reactstrap";

function Heading() {
  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href='/'>CRUD APP</NavbarBrand>
        <Container>
          <Nav className='d-flex'>
            <NavItem className='ml-5'>
              <Link to='/add' style={{color: 'white'}} className='btn btn-success'>Add User</Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Heading;
