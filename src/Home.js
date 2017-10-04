import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import mountains from './assets/mountains.jpg';
import matt from './assets/MG2.jpg'


class Home extends Component{
  render(){
    return(
      <div>
        <Parallax className="heroImage" bgImage={mountains} strength={500}>

        </Parallax>
        <div className="mattGonzer">
          <h2 className="mg">Matthew Gonzer</h2>
          <h4>Full-Stack Developer</h4>
          <img className="mattPhoto" src={matt}></img>
        </div>
      </div>
    )
  }
}

export default Home
