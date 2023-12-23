import React, { useState } from 'react';
import { Card } from 'antd';
import { Modal, Button } from 'antd';

import "./research.css"

import querypaper from "../../Assets/CRC-Query_Based_Summarization.pdf";
import sparqlpaper from "../../Assets/PreProduction-KGandSPARQL.pdf";
import sparqlpaper_decision from "../../Assets/Decision_Letter_Springer.pdf";
import querypaper_presentation from "../../Assets/Paper_Presenter_Certificate.pdf";
import querypaper_attendance from "../../Assets/Conference_Participation_Certificate.pdf";


const Research = () => {

    const [isModalOpenSparqlPaper, setIsModalOpenSparqlPaper] = useState(false);
    const [isModalOpenSparqlDecision, setIsModalOpenSparqlDecision] = useState(false);
    const [isModalOpenQueryPaper, setIsModalOpenQueryPaper] = useState(false);
    const [isModalOpenQueryDecision, setIsModalOpenQueryDecision] = useState(false);
    const [isModalOpenICON, setIsModalOpenICON] = useState(false);

    const showModalSparqlPaper = () => {
        setIsModalOpenSparqlPaper(true)
    }
    const showModalSparqlDecision = () => {
        setIsModalOpenSparqlDecision(true);
    }
    const showModalQueryPaper = () => {
        setIsModalOpenQueryPaper(true);
    }
    const showModelQueryDecision = () => {
        setIsModalOpenQueryDecision(true);
    }
    const showModalICON = () => {
        setIsModalOpenICON(true);
    }

    const handleOk = () => {
        setIsModalOpenSparqlPaper(false);
        setIsModalOpenSparqlDecision(false);
        setIsModalOpenQueryPaper(false);
        setIsModalOpenQueryDecision(false);
        setIsModalOpenICON(false);
    };

    const handleCancel = () => {
        setIsModalOpenSparqlPaper(false);
        setIsModalOpenSparqlDecision(false);
        setIsModalOpenQueryPaper(false);
        setIsModalOpenQueryDecision(false);
        setIsModalOpenICON(false);
    };

    return (
        <div className="container-fluid" id="research">
            <div className="row">
                <div className="col-md-3 bg-dark text-white education-parent">
                    {isModalOpenSparqlPaper || isModalOpenSparqlDecision || isModalOpenQueryPaper || isModalOpenQueryDecision || isModalOpenICON ? <><div className="heading-container" style={{ paddingTop: '0.5%' }}>
                        <h1 className="py-3 heading">Research</h1>
                    </div></> : <> <div className="sticky-top heading-container" style={{ paddingTop: '0.5%' }}>
                        <h1 className="py-3 heading">Research</h1>
                    </div></>}
                </div>
                <div className="col-md-9 education-content">
                    <Card title="Generating Knowledge Graphs for Explainable Artificial Intelligence and Querying them by Translating Natural Language Queries to SPARQL" bordered={false} style={{ width: '100%' }}>
                        <p><b>Full Title - </b> Generating Knowledge Graphs for Explainable Artificial Intelligence and Querying them by Translating Natural Language Queries to SPARQL</p>
                        <i>Numair Shaikh, Tavishee Chavan, Jayesh Patil & Sheetal Sonawane</i>
                        <p>Department of Computer Engineering, SCTR's Pune Institute of Computer Technology</p>
                        <p>Accepted for publication in the <a href="https://www.springer.com/journal/41870">International Journal of Information Technology (IJIT) - Springer </a></p>
                        <p>In this research work, a comprehensive workflow is presented for the generation of Knowledge Graphs for Explainable AI, along with a system to translate natural language input to SPARQL queries for easy search and retrieval.</p>
                        <Button type="primary" className="pdfbuttons" onClick={showModalSparqlPaper}>
                            Full Paper PDF
                        </Button>
                        <Modal title="PDF Viewer" centered open={isModalOpenSparqlPaper} onOk={handleOk} onCancel={handleCancel} width={'90%'}>
                            <iframe
                                src={sparqlpaper}
                                width="100%"
                                height="500px"
                                title="PDF Viewer"
                                style={{ border: 'none' }}
                            />
                        </Modal>
                        <Button type="primary" className="pdfbuttons" onClick={showModalSparqlDecision}>
                            Springer - IJIT Decision
                        </Button>
                        <Modal title="PDF Viewer" centered open={isModalOpenSparqlDecision} onOk={handleOk} onCancel={handleCancel} width={'90%'}>
                            <iframe
                                src={sparqlpaper_decision}
                                width="100%"
                                height="500px"
                                title="PDF Viewer"
                                style={{ border: 'none' }}
                            />
                        </Modal>
                    </Card>
                    <Card title="Query-Based Summarization and Sentiment Analysis for Indian Financial Text by leveraging Dense Passage Retriever, RoBERTa, and FinBERT" bordered={false} style={{ width: '100%', marginTop: '2%' }}>
                        <p><b>Full Title - </b> Query-Based Summarization and Sentiment Analysis for Indian Financial Text by leveraging Dense Passage Retriever, RoBERTa, and FinBERT</p>
                        <i>Numair Shaikh, Jayesh Patil & Sheetal Sonawane</i>
                        <p>Department of Computer Engineering, SCTR's Pune Institute of Computer Technology</p>
                        <p>Accepted and Presented as poster paper at the <a href="http://icon2023.unigoa.ac.in/">20th International Conference on Natural Language Processing</a></p>
                        <p>In this research, a workflow for summarizing financial news and documents is discussed. Post retrieval of financial news and texts from the internet, specifically from sources/aggregators, DPR is used for document retrieval and RoBERTa to create concise and accurate summaries based on user queries. Furthermore, sentiment analysis using FinBERT is added to provide sentiment scores. Through the integration of these approaches, robust system is presented, which is capable of extracting summaries that are personalized to user queries, while additionally conducting sentiment analysis to capture the overall market mood.</p>
                        <p>Access the <a href="http://icon2023.unigoa.ac.in/icon2023-book-of%20abstracts.pdf">ICON 2023 - Book of Abstracts</a></p>
                        <Button type="primary" className="pdfbuttons" onClick={showModalQueryPaper}>
                            Full Paper PDF
                        </Button>
                        <Modal title="PDF Viewer" centered open={isModalOpenQueryPaper} onOk={handleOk} onCancel={handleCancel} width={'90%'}>
                            <iframe
                                src={querypaper}
                                width="100%"
                                height="500px"
                                title="PDF Viewer"
                                style={{ border: 'none' }}
                            />
                        </Modal>
                        <Button type="primary" className="pdfbuttons" onClick={showModelQueryDecision}>
                            ICON Presentation Certificate
                        </Button>
                        <Modal title="PDF Viewer" centered open={isModalOpenQueryDecision} onOk={handleOk} onCancel={handleCancel} width={'90%'}>
                            <iframe
                                src={querypaper_presentation}
                                width="100%"
                                height="500px"
                                title="PDF Viewer"
                                style={{ border: 'none' }}
                            />
                        </Modal>
                        <Button type="primary" className="pdfbuttons" onClick={showModalICON}>
                            ICON Participation Certificate
                        </Button>
                        <Modal title="PDF Viewer" centered open={isModalOpenICON} onOk={handleOk} onCancel={handleCancel} width={'90%'}>
                            <iframe
                                src={querypaper_attendance}
                                width="100%"
                                height="500px"
                                title="PDF Viewer"
                                style={{ border: 'none' }}
                            />
                        </Modal>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Research;
