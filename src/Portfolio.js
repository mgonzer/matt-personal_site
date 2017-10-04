import React, {Component} from 'react'
import littlehelpers from './assets/little.png'
import regxpress from './assets/regxp.png'
import omw from './assets/omwp.png'
import lunaPortal from './assets/lunap.png'

class Portfolio extends Component {
  render() {
    return (
      <div className="container">
        <h2>Portfolio</h2>
        <div className="projectsContainer">
          <div className="projectBox2">
            <h3 className="project">LunaPortal</h3>
            <p>LunaPortal is practice management application built for an Acupuncture Clinic
              that specializes in fertility and womans health.</p>
            <img className="image1" src={lunaPortal}/>

          </div>
          <div className="projectBox">
            <h3 className="project">Little Helpers</h3>
            <p>Little Helpers is a task/reward tracker app for parents and their children.</p>
            <img className="image1" src={littlehelpers}></img>
          </div>
          <div className="projectBox2">
          <h3 className="project">RegXpress</h3>
          <p>RegXpress is an online tournament for developers to test their knowledge of regular expressions.</p>
          <img className="image1" src={regxpress}/>
          </div>
          <div className="projectBox">
          <h3 className="project">Outside My Window</h3>
          <p>Outside my Window is an image based weather app that allows users to acually "see" what it looks like outside</p>
          <img className="image1" src={omw}></img>
          </div>
        </div>
      </div>

    )
  }
}

export default Portfolio
