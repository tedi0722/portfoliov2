import React from 'react';
import { Grid, Row, Col, Button, Carousel } from 'react-bootstrap'
// components
import MyNormalButton from '../../components/MyNormalButton/MyNormalButton';
// assets
import VerigateLogin from '../../assets/VerigateLogin.jpg';
import VerigateDevice from '../../assets/VerigateDevice.jpg';
import VerigateAdmin from '../../assets/VerigateAdmin.jpg';
import './Verigate.css';

const Verigate = () =>
    <div>
        <h2 style={styles.title}>Verigate</h2>

        <Carousel>
            <Carousel.Item>
                <img style={styles.image} width={900} height={500} alt="900x500" src={VerigateLogin} />
            </Carousel.Item>
            <Carousel.Item>
                <img style={styles.image} width={900} height={500} alt="900x500" src={VerigateDevice} />
            </Carousel.Item>
            <Carousel.Item>
                <img style={styles.image} width={900} height={500} alt="900x500" src={VerigateAdmin} />
            </Carousel.Item>
        </Carousel>

        <Grid style={styles.infoWrapper} >

            <Row>
                <Col xs={12}>
                    <h3 style={styles.infoTitle}>About This Project</h3>
                    <hr></hr>
                </Col>
            </Row>

            <Row style={styles.row}>
                <Col xs={12}>
                    <p style={styles.infoParagraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col sx={12}>
                    <h3 style={styles.infoTitle}>Technologies Involved</h3>
                    <hr></hr>

                </Col>
            </Row>

            <Row style={styles.row}>
                <Col xs={12}>
                    <div style={styles.technologies}>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>HandleBars</li>
                            <li>NodeJS</li>
                            <li>Express</li>
                            <li>Arduino</li>
                            <li>Node-RED</li>
                        </ul>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <div style={styles.buttonWrapper}>
                        <MyNormalButton href="https://project-2-verigate.herokuapp.com/" buttonName="View Site" />
                    </div>
                </Col>
            </Row>

            {/* <Row style={styles.row}>
                <Col xs={12}>
                    <div style={styles.testimonial}>
                        <p style={styles.infoParagraph}>
                            "Several months ago without having a clue as to what I was doing I purchased a domain.
                            I had every intention of using it to sell my products at some future date.
                            The process of developing said website was daunting to say the least.
                        </p>
                        <p style={styles.infoParagraph}>
                            Ted and the crew came to my rescue and designed a website that is exactly what I envisioned.
                            Ted talked me through each step and was exceedingly patient with my ignorance.
                            Somehow through my vague descriptions the crew developed a site that is easy to navigate and beautiful to boot.
                        </p>
                        <p style={styles.infoParagraph}>
                            It's clear to me that this team has a natural gift for understanding their clients needs and working toward their vision.
                        </p>
                        <p style={styles.infoParagraph}>
                            Thank you!"
                        </p>
                        <div style={styles.signatureWrapper}>
                            <p style={styles.signature}>
                                - Jenny Travis
                            </p>
                            <p style={styles.infoParagraph}>
                                Owner of GingerRed Naturals
                            </p>
                        </div>
                    </div>
                </Col>
            </Row> */}
        </Grid>
    </div>

const styles = {
    title: {
        textAlign: "center",
        margin: 30
    },
    image: {
        margin: "auto"
    },
    infoWrapper: {
        padding: 50,
        minHeight: 'calc(100vh)'
    },
    row: {
        margin: "0px 0px 30px"
    },
    infoTitle: {
        textIndent: 30
    },
    infoParagraph: {
        fontFamily: 'Cormorant Garamond',
        letterSpacing: 1.1,
        lineHeight: 1.5,
        fontSize: 16,
        textIndent: 30,
        margin: "10px 0",
    },
    technologies: {
        fontFamily: 'Cormorant Garamond',
        letterSpacing: 1.1,
        lineHeight: 1.5,
        fontSize: 16,
    },
    buttonWrapper: {
        display: "flex",
        justifyContent: "center",
        margin: 20,
    },
    testimonial: {
        border: "1px solid white",
        borderRadius: 5,
        margin: "50px 30px",
        padding: 30,
        fontStyle: "italic"
    },
    // signatureWrapper: {
    //     textAlign: "right",
    //     fontStyle: "normal",
    // },
    // signature: {
    //     fontSize: 18,
    //     margin: 0
    // }
}

export default Verigate;