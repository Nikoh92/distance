import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import data from '../assets/coord.json';
import GeoData from './GeoData';
import Icon from './Icon';

class SimpleMap extends Component{

    state={
        positions:[],
        isLoading:true
    }
z
    componentDidMount(){
        console.log("data from json " +data.latlngs[0]);
        this.switchCoord(data.latlngs[0]);
    }


  switchCoord(datas){
    //console.log( datas);
    console.log("-----------------");
    //remplacer latlngs par data pour fonctionner avec le fichier json
    datas.forEach(data =>{
      let newLat;
      let newLng;
      let tableWithNewCoord =[];
      //console.log(data)
      data.forEach(d => {
          newLat = d[0];
          newLng = d[1]; 
          let switchCoordData =[newLat,newLng];
          tableWithNewCoord.push(switchCoordData);
        })
        this.setState({
          positions:[...this.state.positions,tableWithNewCoord]
        })
      })
  }
    
render(){
    const newCoord = this.state.positions;
    let polygon;
    if(this.state.positions>0){
      polygon = <Polygon positions={newCoord} color="red" />
    }
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