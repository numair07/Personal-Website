import React from 'react';
import NavBar from './components/navigation';
import About from './components/About_Section/about';
import Education from './components/Education/education';
import WorkExperienceTimeline from './components/Work_Ex/WorkEx';

const App = () => {

  return (

    <div>
      <NavBar />
      <section class="landing">
        <div class="row">
          <div class="col-lg-12">
            <p id="nameTest">Numair Shaikh</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <p id="titleTest" class="font-italic"> Hello There! Welcome to my journey, where we explore Code and Research.</p>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="text-center">
                <a href="https://github.com/numair07"><i class="fa fa-github social_media_buttons"></i></a>
                <a href="mailto:numairsh77@gmail.com"><i class="fa fa-envelope-o social_media_buttons"></i></a>
                <a href="https://in.linkedin.com/in/numair-shaikh/"><i class="fa fa-linkedin-square social_media_buttons"></i></a>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="text-center">
                <a href="/Resume_Numair.pdf" download="Resume_Numair.pdf" className="resume-download-button">Download Resume</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <div style={{width: '100%', height:'0.1rem', backgroundColor:'#072541'}}></div>
      <Education />
      <div style={{width: '100%', height:'0.1rem', backgroundColor:'#072541'}}></div>
      <WorkExperienceTimeline />
    </div>
  );
}

export default App;
