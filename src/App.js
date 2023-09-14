import './App.css';
import QuizContainer from './containers/QuizContainer';
import { useState } from 'react';

function App() {

  return (
    <div
    style={{
      backgroundImage: `url('./background/worldmap.png')`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100vw',
      height: '100vh',
      position: 'relative'
      }}
      >
    <div className='QuizContainer'>    
    <QuizContainer />
    </div> 
    </div>
  );

 
}

export default App;

