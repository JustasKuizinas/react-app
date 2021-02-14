import logo from './logo.svg';
import React, { PureComponent } from 'react';
import './App.css';
import ClassComp from './ClassComp';
import PureComp from './PureComp';
import FunctionalComp from './FunctionalComp';
import CreateEl from './CreateElem';

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        Hello World
      </header>
      {CreateEl}
      <ClassComp/>
      <PureComp/>
      <FunctionalComp/>
 
      
    </div>
  );
}

export default App;
