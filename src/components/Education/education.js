import React, { useState, useEffect } from 'react';
import './education.css';


const Education = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="container-fluid" id="education">
            <div className="row">
                <div className="col-md-3 bg-dark text-white education-parent">
                    <h1 className="py-3 heading">Education</h1>
                </div>
                <div className="col-md-9 education-content">
                    <div style={{ fontSize: '1.5rem', fontFamily: 'monospace', padding: '1%' }}>
                        Bachelor of Engineering in Computer Engineering
                    </div>
                    <div style={{ fontSize: '1.2rem', fontFamily: 'monospace', padding: '1%' }}>
                        Pune Institute of Computer Technology
                    </div>
                    <div style={{ fontSize: '1.1rem', fontFamily: 'monospace', padding: '1%' }}>
                        GPA: 9.69/10
                    </div>
                    {!isMobile && (
                        <>
                            <div style={{ fontSize: '1.4rem', fontFamily: 'monospace', padding: '5px', paddingTop: '1%' }}>Relevant Courses Taken - </div>
                            <div class="row courses-list">
                                <div class="col-md-6">
                                    <ul>
                                        <li style={{ fontSize: '1rem', fontFamily: 'monospace', padding: '5px' }}>Machine Learning</li>
                                        <li style={{ fontSize: '1rem', fontFamily: 'monospace', padding: '5px' }}>Information & Cyber Security</li>
                                        <li style={{ fontSize: '1rem', fontFamily: 'monospace', padding: '5px' }}>Design & Analysis of Algorithms</li>
                                        <li style={{ fontSize: '1rem', fontFamily: 'monospace', padding: '5px' }}>Engineering Mathematics (I, II & III)</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <ul>
                                        <li style={{ fontSize: '1rem', fontFamily: 'monospace', padding: '5px' }}>Computer Organisation & Architecture</li>
                                        <li style={{ fontSize: '1rem', fontFamily: 'monospace', padding: '5px' }}>Data Structures</li>
                                        <li style={{ fontSize: '1rem', fontFamily: 'monospace', padding: '5px' }}>Object Oriented Programming</li>
                                        <li style={{ fontSize: '1rem', fontFamily: 'monospace', padding: '5px' }}>Discrete Mathematics</li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    )}
                    {isMobile && (
                        <>
                            <div style={{ fontSize: '1.1rem', fontFamily: 'monospace', padding: '5px', paddingTop: '1%' }}>Relevant Courses Taken - </div>
                            <div class="row courses-list">
                                <ul>
                                    <li style={{ fontSize: '0.8rem', fontFamily: 'monospace', padding: '5px' }}>Machine Learning</li>
                                    <li style={{ fontSize: '0.8rem', fontFamily: 'monospace', padding: '5px' }}>Information & Cyber Security</li>
                                    <li style={{ fontSize: '0.8rem', fontFamily: 'monospace', padding: '5px' }}>Design & Analysis of Algorithms</li>
                                    <li style={{ fontSize: '0.8rem', fontFamily: 'monospace', padding: '5px' }}>Engineering Mathematics (I, II & III)</li>
                                    <li style={{ fontSize: '0.8rem', fontFamily: 'monospace', padding: '5px' }}>Computer Organisation & Architecture</li>
                                    <li style={{ fontSize: '0.8rem', fontFamily: 'monospace', padding: '5px' }}>Data Structures</li>
                                    <li style={{ fontSize: '0.8rem', fontFamily: 'monospace', padding: '5px' }}>Object Oriented Programming</li>
                                    <li style={{ fontSize: '0.8rem', fontFamily: 'monospace', padding: '5px' }}>Discrete Mathematics</li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Education;
