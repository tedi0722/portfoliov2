import React from 'react';
import { Button, Row, Col, Grid } from 'react-bootstrap';
import './PDFButton.css';

const PDFButton = (props) =>
    <Grid>
        <Row>
            <Col xs={12}>
                <div className="pdfButtonWrapper">
                    <Button className="pdfButton" href={props.href} download="Ted_S_I">
                        <p className="pdfButtonText">Download PDF</p>
                        <i className="fa fa-arrow-circle-down pdfButtonIcon" />
                    </Button>
                </div>
            </Col>
        </Row>
    </Grid>

// <div className="pdfButtonWrapper">
//     <div className="pdfButton">
//         <p className="pdfButtonText">Download PDF</p>
//         <a href={props.href} download>
//             <i className="fa fa-arrow-circle-down pdfButtonIcon" aria-hidden="true" />
//         </a>
//     </div>
// </div>

export default PDFButton
