import './App.css';
import QuizContainer from './containers/QuizContainer';
import { useState } from 'react';
import ParticleAnimation from 'react-particle-animation'


function App() {

  return (
    <div className='app'
    style={{
      backgroundImage: `url('./background/worldmap.png')`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100vw',
      height: '100vh',
      position: 'relative'
      }}
      > 
         <ParticleAnimation
          numParticles={500}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%'
          }}
        />
          
    <QuizContainer /> 
    </div>
  );

 
}

export default App;

