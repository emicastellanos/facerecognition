import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 213,
      density: {
        enable: true,
        color: "#3CA9D1",
        value_area:1104.8066982851817,
        blur: 5
      },
      shape:{
        type:"circle",
        stroke:{
          width:3,
          color:"#7a2525"
        }
      },
      polygon:{
        nb_sides:5
      }
    }
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions}/> 
        <Navigation />
        <Logo />
        <Rank/>
        <ImageLinkForm/>
        {/*<FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
