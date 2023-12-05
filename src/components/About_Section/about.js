import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="container-fluid" id="about">
      <div className="row">
        <div className="col-md-3 bg-dark text-white about-parent">
          <h1 className="py-3 heading">About</h1>
        </div>
        <div className="col-md-9 about-content">
          <div style={{ fontSize: '2rem', fontFamily: 'monospace', padding: '2%', paddingBottom: '5%' }}>
            Hi, I'm Numair Shaikh
          </div>
          <div style={{ fontSize: '1rem', fontFamily: 'monospace', padding: '2%' }}>
            I'm passionate Software Engineer and Computer Engineering graduate from Pune Institute of Computer Technology.
            With a solid foundation in software engineering and working as a Software Engineer at eQ Technologic.
          </div>
          <div style={{ fontSize: '1rem', fontFamily: 'monospace', padding: '2%' }}>
            My enthusiasm for technology extends beyond the confines of my work, driving me to dive into the world of Machine Learning and its applications.
            I am deeply interested in the realms of Machine Learning and MLOps. I enjoy exploring the intersection of data science and software development, leveraging my skills to build intelligent and efficient systems.
            One of my focal points is Natural Language Processing (NLP) research. I have authored multiple research articles on the empirical applications of NLP techniques.
          </div>
          <div style={{ fontSize: '1rem', fontFamily: 'monospace', padding: '2%' }}>
            Beyond the code, I'm venturing into the world of Cloud Computing, aiming to enhance my expertise in deploying scalable and resilient applications in the cloud environment.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
