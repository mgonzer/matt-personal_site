import React, { Component } from 'react'
import ReactPDF from 'react-pdf';
import MGResume from './assets/resume.pdf'

class Resume extends Component{
  render(){
    return(
      <div>
        <h2>Resume</h2>
        <hr />
        <ReactPDF file={MGResume} />
        <br />
        <a href="https://www.dropbox.com/s/4fu1m61radwcxmw/MatthewGonzer-Resume.pdf?dl=1">
          <button className='resumeButton'>Download</button>
        </a>

      </div>

    )
  }
}

export default Resume
