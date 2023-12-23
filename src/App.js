import React, { useState } from 'react';
import NavBar from './components/navigation';
import About from './components/About_Section/about';
import Education from './components/Education/education';
import WorkExperienceTimeline from './components/Work_Ex/WorkEx';

import profilePicture from './Assets/Photo_Numair.jpg';
import Resume from "./Assets/Resume_Numair.pdf";
import Research from './components/Research/research';

import { Modal, Popover } from 'antd';


const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const imageStyle = {
    width: '225px', // Adjust the width as needed
    height: '225px', // Adjust the height as needed
    borderRadius: '50%',
    objectFit: 'cover', // Maintain the aspect ratio of the image
  };

  const content = (
    <div>
      <p>Display Resume In Browser</p>
    </div>
  );

  return (
    <div>
      <NavBar />
      <section class="landing">
        <div className="row justify-content-center align-items-center" style={{ paddingTop: '5%' }}>
          <div className="col-lg-12 text-center">
            <img src={profilePicture} alt="Profile" style={imageStyle} />
          </div>
        </div>
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
                <Popover content={content} title="Display Resume">
                  <a onClick={showModal}><i class="fa fa-file-text social_media_buttons"></i></a>
                </Popover>
                <Modal title="PDF Viewer" centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={'90%'}>
                  <iframe
                    src={Resume}
                    width="100%"
                    height="500px"
                    title="PDF Viewer"
                    style={{ border: 'none' }}
                  />
                </Modal>
              </div>
            </div>
            <div className="row justify-content-center" style={{ marginTop: '-1%' }}>
              <div className="col-md-6">
                <div className="text-center">
                  <a href={Resume} download="Resume_Numair.pdf" className="resume-download-button">Download Resume</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <div style={{ width: '100%', height: '0.1rem', backgroundColor: '#072541' }}></div>
      <Education />
      <div style={{ width: '100%', height: '0.1rem', backgroundColor: '#072541' }}></div>
      <WorkExperienceTimeline />
      <div style={{ width: '100%', height: '0.1rem', backgroundColor: '#072541' }}></div>
      <Research />
    </div>
  );
}

export default App;
