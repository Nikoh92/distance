import React, { Component } from 'react';
import SimpleMap from './components/SimpleMap';
import SearchForm from './components/searchForm';
import './App.css';


class App extends Component {

  state = {
     location:{
       lat: 51.505,
       lng: -0.09,
     },
    zoom: 13,
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(pos =>{
      console.log(pos);
      this.setState({
        location:{
          lat:pos.coords.latitude,
          lng:pos.coords.longitude,
        }
      })
    }); 
   
  }  

  render() {
    const position = [this.state.location.lat, this.state.location.lng]
    return (
      <div className="bdy">
      <SimpleMap position={position} zoomLevel={this.state.zoom}/>
      <SearchForm />
      </div>
    );
  }
}

export default App;
