import React from 'react';
import { Button } from 'react-bootstrap';
import './PDFButton.css';

const PDFButton = (props) => 
    <div className="pdfButtonWrapper">
    <Button className="pdfButton" href={props.href} download>
        <p className="pdfButtonText">Download PDF</p>
        <i className="fa fa-arrow-circle-down pdfButtonIcon" />
    </Button>
    </div>

    // <div className="pdfButtonWrapper">
    //     <div className="pdfButton">
    //         <p className="pdfButtonText">Download PDF</p>
    //         <a href={props.href} download>
    //             <i className="fa fa-arrow-circle-down pdfButtonIcon" aria-hidden="true" />
    //         </a>
    //     </div>
    // </div>

export default PDFButton
