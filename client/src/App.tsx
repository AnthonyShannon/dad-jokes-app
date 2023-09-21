import React from 'react';
import './App.css';
import { Jokes, NewJokeModal, UnapprovedJokes } from './components';
import { Container, Navbar, NavbarBrand } from 'reactstrap';

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
          <UnapprovedJokes />
        </div>
      </Container>
    </div>
  );
}

export default App;
