import './App.css';
import QuizContainer from './containers/QuizContainer';
import ParticleBackground from 'react-particle-backgrounds'

function App() {

  const particle = () => {



  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 10,
      height: 10,
      useBouncyWalls: false
    },
    particle: {
      particleCount: 50,
      color: 'hotpink',
      minSize: 2,
      maxSize: 5
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 1,
      maxSpeed: 3
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 3000
    }
    
  }
  return <ParticleBackground settings={settings} />

}

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
    
    <QuizContainer /> 
    {/* {particle()} */}
    
    </div>
  );

 
}

export default App;

