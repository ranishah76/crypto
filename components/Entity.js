import React, { Component } from 'react';
import 'aframe';
import Iframe from 'react-iframe'
import {Entity} from 'aframe-react';


class Cube extends Component {

  render() {
    const x = Math.floor(Math.random()*3) - 5
    const y = Math.floor(Math.random()*7)
    const z = Math.floor(Math.random()*3) - 4
    console.log("Reached CUBE JS ")
     return (
       <div>
       <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={`x:${x} y:${y} z:${z}`}/>
        </div>
     )

 }
}

export default Cube;
// <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={`x:${x} y:${y} z:${z}`}/>
