import './WorkEx.css'


import { Timeline } from 'antd';

const WorkExperienceTimeline = () => {
    return (
        <div className="container-fluid" id="work-experience">
            <div className="row">
                <div className="col-md-3 bg-dark text-white education-parent">
                    <div className="sticky-top heading-container">
                        <h1 className="py-3 heading">Work Experience</h1>
                    </div>
                </div>
                <div className="col-md-9 education-content">
                    <Timeline
                        items={[
                            {
                                children: (
                                    <>
                                        <div style={{ fontSize: '1.25rem', fontFamily: 'monospace', paddingLeft: '2.5%', marginTop: "-1%" }}>
                                            eQ Technologic
                                        </div>
                                        <div style={{ fontSize: '1.1rem', fontFamily: 'monospace', paddingLeft: '2.5%' }}>
                                            <i>Software Engineer</i>
                                        </div>
                                        <div style={{ fontSize: '0.9rem', fontFamily: 'monospace', paddingLeft: '2.5%' }}>
                                            August 2022 - Present
                                        </div>
                                        <div style={{ fontSize: '0.9rem', fontFamily: 'monospace', paddingLeft: '2.5%' }}>
                                            <ul>
                                                <li style={{ marginBottom: '0.5%' }}>Spearheaded the design and development of Out-of-the-Box (OOTB) APIs to support easy migration and integration between proprietary systems in eQ's flagship integration product eQube-MI.</li>
                                                <li style={{ marginBottom: '0.5%' }}>Developed an end-to-end CAD migration pipeline between Teamcenter PLM and Windchill PLM in a successful proof-of-concept delivered to a major argo-mechanical customer.</li>
                                            </ul>
                                        </div>
                                    </>
                                ),
                            },
                            {
                                children: (
                                    <>
                                        <div style={{ fontSize: '1.25rem', fontFamily: 'monospace', paddingLeft: '2.5%', marginTop: "-1%" }}>
                                            AlgoAnalytics Financial Consultancy
                                        </div>
                                        <div style={{ fontSize: '1.1rem', fontFamily: 'monospace', paddingLeft: '2.5%' }}>
                                            <i>Project Intern, Natural Language Processing (NLP)</i>
                                        </div>
                                        <div style={{ fontSize: '0.9rem', fontFamily: 'monospace', paddingLeft: '2.5%' }}>
                                            September 2021 - April 2022
                                        </div>
                                        <div style={{ fontSize: '0.9rem', fontFamily: 'monospace', paddingLeft: '2.5%' }}>
                                            <ul>
                                                <li style={{ marginBottom: '0.5%' }}>Contributed to the development of <a href="https://algofabric.algoanalytics.com/dashboard" target="_blank" rel="noopener noreferrer">FABRIC</a>, a SaaS platform which processes the textual information collected from news, social media and internal company documents such as quarterly reports to assist, augment and automate financial analysis of listed Indian IT conglomerates.</li>
                                                <li style={{ marginBottom: '0.5%' }}>Developed a pipeline to extract and process text data from diverse sources, and implemented FAISS for efficient indexing, enabling rapid retrieval of processed textual, and Dense Passage Retrieval (DPR) to optimize user queries, facilitating quick access.</li>
                                                <li style={{ marginBottom: '0.5%' }}>Implemented a text summarization mechanism using the RoBERTa model a sentiment analysis model using FinBERT to assess the sentiment of financial text summaries.</li>
                                                <li style={{ marginBottom: '0.5%' }}>Worked on a Q&A system to convert natural language queries into SPARQL queries, for effective and fast querying of knowledge graphs.</li>
                                            </ul>
                                        </div>
                                    </>
                                ),
                            },
                            {
                                children: (
                                    <>
                                        <div style={{ fontSize: '1.25rem', fontFamily: 'monospace', paddingLeft: '2.5%', marginTop: "-1%" }}>
                                            ThoughtWorks
                                        </div>
                                        <div style={{ fontSize: '1.1rem', fontFamily: 'monospace', paddingLeft: '2.5%' }}>
                                            <i>Intern, Application Development</i>
                                        </div>
                                        <div style={{ fontSize: '0.9rem', fontFamily: 'monospace', paddingLeft: '2.5%' }}>
                                            June 2021 - September 2021
                                        </div>
                                        <div style={{ fontSize: '0.9rem', fontFamily: 'monospace', paddingLeft: '2.5%' }}>
                                            <ul>
                                                <li style={{ marginBottom: '0.5%' }}>Contributed to the design and development effort design, and development of a proof of concept for the Alumni Connect Portal project at Thoughtworks.</li>
                                                <li style={{ marginBottom: '0.5%' }}>Contributed to the development of the frontend of the application using React.js, developing several key pages.</li>
                                                <li style={{ marginBottom: '0.5%' }}>Contributed to the backend development of the application, utilizing Spring Boot for efficient and scalable server-side functionality.</li>
                                                <li style={{ marginBottom: '0.5%' }}>Developed an authentication mechanism by integrating the application's access with Okta SSO and LinkedIn SSO, enhancing security, while allowing easy access to verified alumni.</li>
                                                <li style={{ marginBottom: '0.5%' }}>Developed an OTP verification service using SendGrid and integrated it into the Spring Boot backend, providing a secure multi-factor authentication for first-time users.</li>
                                            </ul>
                                        </div>
                                    </>
                                ),
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};


export default WorkExperienceTimeline;

