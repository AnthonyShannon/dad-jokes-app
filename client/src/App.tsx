import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jokes from './components/Jokes/Jokes'
import { Container } from 'reactstrap'

const testJoke = [{
  "jokeBody": "Why is it impossible to run through a campsite?",
  "punchline": "You can only ran through it because it's past tents.",
},
{
  "jokeBody": "Test Jokes?",
  "punchline": "Test punchline.",
},
{
  "jokeBody": "Why is it impossible to run through a campsite?",
  "punchline": "You can only ran through it because it's past tents.",
}]

function App() {
  return (
    <div className="App">
      <Container>
      <div className='container-fluid'>
        <Jokes jokes={testJoke} />
      </div>
      </Container>
    </div>
  );
}

export default App;
