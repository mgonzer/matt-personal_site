import React, { Component } from 'react'
import littlehelpers from './assets/littlehelpers.png'
import regxpress from './assets/regxpress.png'
import omw from './assets/omw.png'

class Portfolio extends Component{
  render(){
    return(
      <div>
        <h2>Portfolio</h2>
        <hr/>
        <div>
          <h3 className="project">Little Helpers</h3>
          <p>Little Helpers is a task/reward tracker app for parents and their children. </p>
          <img className="image1" src={littlehelpers}></img>

        <hr />
          <h3 className="project">RegXpress</h3>
          <p>RegXpress is an online tournament for developers to test their knowledge of regular expressions.</p>
          <img  className="image1" src={regxpress}/>
            <hr />
              <h3 className="project">Outside My Window</h3>
              <p>Outside my Window is an image based weather app that allows users to acually "see" what it looks like outside</p>
              <img className="image1" src={omw}></img>
        </div>
      </div>

    )
  }
}

export default Portfolio
