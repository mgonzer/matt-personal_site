import React, {Component} from 'react'
import littlehelpers from './assets/little.png'
import regxpress from './assets/regxp.png'
import omw from './assets/omwp.png'
import lunaPortal from './assets/lunap.png'

class Portfolio extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="projectBox">
            <h3 className="project">LunaPortal</h3>
            <p>RegXpress is an online tournament for developers to test their knowledge of regular expressions.</p>
            <img className="image1" src={lunaPortal}/>
          </div>
            <h3 className="project">Little Helpers</h3>
            <p>Little Helpers is a task/reward tracker app for parents and their children.</p>
            <img className="image1" src={littlehelpers}></img>

          <div className="projectBox">
          <h3 className="project">RegXpress</h3>
          <p>RegXpress is an online tournament for developers to test their knowledge of regular expressions.</p>
          <img className="image1" src={regxpress}/>
          </div>
          <h3 className="project">Outside My Window</h3>
          <p>Outside my Window is an image based weather app that allows users to acually "see" what it looks like outside</p>
          <img className="image1" src={omw}></img>

        </div>
      </div>

    )
  }
}

export default Portfolio
