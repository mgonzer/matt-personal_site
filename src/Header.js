import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './assets/MG.png';
import './assets/App.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <ul className="list">
              <li>
                <Link className="listItem" to='/'>About</Link>
              </li>
              <li>
                <Link className="listItem" to='/portfolio'>Portfolio</Link>
              </li>
              <li>
                <Link className="listItem" to='/resume'>Resume</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
