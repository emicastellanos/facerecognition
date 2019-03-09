import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';


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

function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

const initialState = {
  input: '',
  imgUrl: '',
  boxes:[],
  route: 'signin',
  isSignedIn: false,
  
  user: {
    id:'',
    name:'',
    email:'',
    entries:'',
    joined:''
  }

}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }


  calculateFaceLocation = (data) => {
    let lista = []
    let key=1;
    console.log('data bebebeeee', data)
    if(!isEmpty(data.outputs[0].data)){
      data.outputs[0].data.regions.map( region => {
        const clarifaiFace = region.region_info.bounding_box;   
        const image = document.getElementById('inputImage');
        const width = Number(image.width); //lo casteamos a number porque es un string en realidad sobre el que necesitamos hacer calculos. que onda si no lo casteamos?
        const height = Number(image.height);
        /* console.log('width' ,width)
        console.log('right col' ,clarifaiFace.right_col )
        console.log('columna derecha' ,clarifaiFace.right_col * width)
        console.log('columna izquierda' ,clarifaiFace.left_col * width)
        console.log('columna derecha bien' ,width - (clarifaiFace.right_col * width))
        console.log('columna izquierda bien' , height - (clarifaiFace.bottom_row * height)) */
        lista.push({
          key:key++,
          leftCol: clarifaiFace.left_col * width,
          topRow: clarifaiFace.top_row * height,
          rightCol: width - (clarifaiFace.right_col * width), 
          bottomRow : height - (clarifaiFace.bottom_row * height)
        })
  
      })
      console.log('a ver ahora', lista);
      return lista
    } else return []
    
    
    
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  displayFaceBox = (boxes) => {
    console.log(boxes);
    this.setState({boxes: boxes}); //incluso aca se podria decir this.setState({box}); y es exactamente lo mismo

  }

  // otro Forma: onPictureSubmit = (event) => {
  //   app.models
  //   .initModel({id: Clarifai.COLOR_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
  //     .then(generalModel => {
  //       return generalModel.predict("https://www.familias.com/wp-content/uploads/2015/08/featuredImageId65477-700x467.jpg");
  //     })
  //     .then(response => {
  //       //var concepts = response['outputs'][0]['data']['concepts'];
  //       console.log(response);
  //     })
  // }

  

  onPictureSubmit = (event) => {
    this.setState( {imgUrl: this.state.input}, () => {
      console.log('se escribio el input:', this.state.imgUrl);
    } );

    //setState() does not immediately mutate this.state but creates a pending state transition.
     //Accessing this.state after calling this method can potentially return the existing value. 
     //There is no guarantee of synchronous operation of calls to setState and calls may be batched for performance gains
    fetch('http://localhost:3000/imageurl', {
      method: 'post', 
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
          input:this.state.input
      })
    })
    .then(response => response.json())
    .then(response => {
      if(response) { //este if no esta del todo bien porque si viniera un error entraria igual ? no, se va al catch
        fetch('http://localhost:3000/image', {
          method: 'put', 
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
            id:this.state.user.id
          })
        })
        .then(response => response.json())
        .then(entries => this.setState(Object.assign(this.state.user,{entries:entries})))
        // si hago esto, me actualiza el user entero cambiando solo los entries y no es la idea. Solo necesitamos actualizar el campo entries 
        //para eso usamos el Object.assign
        //.then(entries => this.setState(
        //   { user:{
        //     entries: entries
        //   }})
        .then(this.displayFaceBox(this.calculateFaceLocation(response)))//lo puse dentro del chain porque si la respuesta tardase mucho en llegar
        
        .catch(err => console.log('/image',err))
      }
      
    })
    .catch ( err => console.log(err)) ;
  }

  loadUser = (dataUser) => {
    console.log('loadUser:',dataUser);
    this.setState( { user: {
          id:dataUser.id,
          name:dataUser.name,
          email:dataUser.email,
          entries:dataUser.entries,
          joined:dataUser.joined
    }})
  }

  onRouteChange = (route) =>{
    if (route === 'signout'){
      this.setState(initialState);
    } else if (route ==='home'){
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }


  render() {
    const {isSignedIn, boxes,route, imgUrl} = this.state;

    return (
      <div className="App">
      <Particles className='particles' params={particlesOptions}/>
      <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
      {console.log('queres ver los boxes bb?? ', boxes)}
      {/* por que no puedo usar un if()then aca vieja escuela */}
      {route === 'home'
        ?<div>
            <Logo />
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onPictureSubmit}/>
            <FaceRecognition imgUrl={imgUrl} boxes={boxes}/> 
          </div> 
        : (route === 'signin'
          ?<SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        )
      }
      </div>
    );
  }
}

export default App;