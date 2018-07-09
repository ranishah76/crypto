import React, { Component } from 'react';
import 'aframe';
import 'aframe-animation-component';
import {Entity} from 'aframe-react';

const out = Array.from(Array(1000).keys())

class NewVisualisation extends Component {

  constructor(props) {
    super(props)
  }

  createArray = () => {
    let arr = [];
    for (var i = 1; i <= 100; i++) {
       arr.push(i);
    }
    return arr
  }

   createPosition = () => {
     let x = Math.floor(Math.random()*12) - 5
     let y = Math.floor(Math.random()*7)
     let z = Math.floor(Math.random()*3) - 4
     return `${x} ${y} ${z}`
   }

   createRotation = () => {
     let x = Math.floor(Math.random()*40)
     let y = Math.floor(Math.random()*90)
     let z = Math.floor(Math.random()*20)
     return `${x} ${y} ${z}`
   }

   createColor = () => {
     let x = Math.round(Math.random()*255)
     let y = Math.round(Math.random()*255)
     let z = Math.round(Math.random()*255)
     return `rgba(${x}, ${y}, ${z})`
   }

   createBox = () => {
    let box =  (
      <a-box depth="0.5" height="0.5" width="0.5" position={this.createPosition()} rotation={this.createRotation()} color={this.createColor()}>
      <a-animation attribute="rotation"
             dur="10000"
             fill="forwards"
             to="0 360 0"
             repeat="indefinite"></a-animation>
             <a-animation attribute="material.color" from={this.createColor()} to={this.createColor()} dur="1000" repeat="indefinite"></a-animation>
             </a-box>
    )
    return box
   }

   generateBox = () => {
     return out.map((num) => {
       return this.createBox()
     })
   }


   render() {
     console.log(this.props)
     return (
       <a-scene background="color: black">
         <a-entity position="-2 2 4">
          <a-camera></a-camera>
         </a-entity>
         {this.generateBox()}
       </a-scene>
     )
   }


}

export default NewVisualisation;
// <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={`x:${x} y:${y} z:${z}`}/>
// <Entity primitive='a-plane' color="green" opacity="0.6" height="1" width="1" position="-2 0 -3"  text="value: This text will be 4 units wide."/>
// <Entity primitive='a-plane' color="red" opacity="0.2" height="1" width="1" position="-0.9 0 -3"  text="value: This text will be 4 units wide."/>
// <Entity primitive='a-plane' color="#CCC" height="1" width="1" position="0.2 0 -3"  text="value: This text will be 4 units wide."/>
// <Entity primitive='a-plane' color="#CCC" height="1" width="1" position="1.3 0 -3"  text="value: This text will be 4 units wide."/>
// <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
//
// <Entity text={{value: 'Hello, WebVR!'}}/>
//
// <Entity id="opacity" position="-2.5 0.7 0"
// text="color: white; align: center; value: Animating opacity; width: 1.5"/>
