import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
// components 
import PDFButton from '../../components/PDFButton/PDFButton';
// assets
import pdf from '../../assets/pdf-test.pdf';

const Resume = () =>
    <div style={styles.page}>
        <PDFButton href={pdf} />
{/* ....................................................................................... */}
        <Grid>
            <Row>
                <Col xs={12}>
                    <h2 style={styles.h2}>Resume</h2>
                </Col>
            </Row>
        </Grid>
{/* ....................................................................................... */}
        <Grid style={styles.wrapper}>
{/* ....................................................................................... */}
            <Row>
                <Col xs={12} style={styles.h3col}>
                    <h3 style={styles.h3}>Experiences</h3>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h4></h4>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h4></h4>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h4></h4>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h4></h4>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h4></h4>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h4></h4>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h4></h4>
                </Col>
            </Row>
{/* ......................................................................................... */}
            <Row>
                <Col xs={12} style={styles.h3col}>
                    <h3 style={styles.h3}>Skills</h3>
                </Col>
            </Row>
{/* ......................................................................................... */}
            <Row>
                <Col xs={12} style={styles.h3col}>
                    <h3 style={styles.h3}>Education</h3>
                </Col>
            </Row>
{/* ......................................................................................... */}
        </Grid>
    </div>

const styles = {
    page: {
        minHeight: "calc(100vh)"
    },
    wrapper: {
        border: "1px solid white",
        width: 960,
        padding: 30,
        marginBottom: 30
    },
    h2: {
        textAlign: "center",
        margin: "0px 0px 30px"
    },
    h3: {
        margin: 0,
        textIndent: 20,
    },
    h3col: {
        borderBottom: "0.5px dashed white",
        padding: 8
    }
}

export default Resume
