import { useState } from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Fun from './components/Fun';
import Calculation from './components/Calculation';
import Student from './components/Student';

function App() {
  const [magicNumber, setMagicNumber] = useState(0)
  const [show, setShow] = useState(true)
  
  return (
    <div className="App">
      {show && <h1>{ magicNumber }</h1>}
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber} 
        show={show}
        setShow={setShow}
      />
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber} 
        amount={5}
        show={show}
        setShow={setShow} 
      />
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber} 
        amount={25}
        show={show}
        setShow={setShow}
      />
      <Greeting name="Jan" age="34" />
      <Calculation/>
      <br/>
      <hr/>
      <h1>Õppimise info:</h1>
      <Student isStudent = {true} semester="5"/>
      <Student isStudent = {true} semester="7"/>
      <Student isStudent = {false} semester ="0"/>
      <Student isStudent = {true} semester="0"/>
    </div>
  );
}

export default App;