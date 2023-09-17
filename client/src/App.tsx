import React from 'react';
import './App.css';
import { Jokes, NewJokeModal } from './components';
import { Container, Navbar, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';

function App() {

  return (
    <div className="App">
      <Navbar id='navbar' color='dark'>
        <NavbarBrand href='/'>Dad Jokes Ninja</NavbarBrand>
        <NewJokeModal />
      </Navbar>
      <Container>
        <div className='container-fluid'>
          <Jokes />
        </div>
      </Container>
    </div>
  );
}

export default App;
