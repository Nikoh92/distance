import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import GeoCoord from '../assets/coordonate.json'
import Icon from './Icon';

class SimpleMap extends Component{

    state={
        positions:[],
        isLoading:true
    }

componentDidMount(){
  this.switchCoord(GeoCoord.latlngs);
  }
  
  switchCoord(latlngs){
    console.log(latlngs);
    let tableWithNewCoord = [];
    latlngs.forEach( (coord) => {
      tableWithNewCoord.push([coord[1], coord[0]])
    });
    this.setState({positions: tableWithNewCoord});    
  }
    
render(){
    const newCoord = this.state.positions;
    return(
        <Map className="map" center={this.props.position} zoom={this.props.zoomLevel}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker 
            position={this.props.position}
            icon={Icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Polygon positions={newCoord} color="red" />
      </Map>
  
    )
}
}

export default SimpleMap;