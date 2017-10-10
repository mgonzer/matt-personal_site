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
            <p id="projectInfo"><i>LunaPortal</i>  is practice management application built for an Acupuncture Clinic
              that specializes in fertility and womans health. <br/>
            <br />
            <b>Tech</b>: JavaScript, Node.js, express, PostgreSQL, Knex, React, Redux, Heroku, bCyppt</p>

            <a target="_blank" href="https://lunaportal.net"><img className="image1" src={lunaPortal}/></a>

          </div>
          <div className="projectBox">
            <h3 className="project">Little Helpers</h3>
            <p id="projectInfo"><i>Little Helpers</i> is a task/reward tracker app for parents and their children. <br />
            <br />
            <b>Tech</b>: JavaScript, PostgreSQL, Knex, Node.js, express, Knex, HTML, CSS, Bootstrap</p>

            <a target="_blank" href="https://littlehelpers.world"><img className="image1" src={littlehelpers}></img></a>
          </div>
          <div className="projectBox2">
          <h3 className="project">RegXpress</h3>
          <p id="projectInfo"><i>RegXpress</i> is an online tournament for developers to test their knowledge of regular expressions. <br />
          <br />
            <b>Tech</b>: JavaScript, AngularJS, PostreSQL, Node.js, express, Knex,Socket.io, HTML, CSS
          </p>

        <a target="_blank" href="https://regxpress-cb9b9.firebaseapp.com/"><img className="image1" src={regxpress}/></a>
          </div>
          <div className="projectBox">
          <h3 className="project">Outside My Window</h3>
          <p id="projectInfo"><i>Outside My Window</i> is an image based weather app that allows users to acually "see" what it looks like outside <br/>
          <br />
        <b>Tech</b>: JavaScript, jQuery, AJAX, Wunderground API, HTML, CSS, Materialize
          </p>

        <a target="_blank" href="https://outside-my-window.firebaseapp.com/"><img className="image1" src={omw}></img></a>
          </div>
        </div>
      </div>

    )
  }
}

export default Portfolio
