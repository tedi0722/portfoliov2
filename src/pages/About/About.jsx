import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import QueueAnim from 'rc-queue-anim';
// components
import MyButton from '../../components/MyButton/MyButton';
// assets
import ProfilePic from '../../assets/ProfilePic.JPG';

import './About.css'

const About = () =>
    <Grid className="aboutWrapper">
        <Row>
            <Col xs={12}>
                <Row>
                    <Col xs={12} lg={8}>
                        <QueueAnim duration={500} animConfig={{ translateX: [0, 100], opacity: [1, 0] }}>
                            <Jumbotron key="1">
                                <Row>
                                    <Col xs={12} className="animWrapper">
                                        <QueueAnim
                                            style={styles.h2queueanim}
                                            interval={10}
                                            duration={1000}
                                            delay={500}
                                            animConfig={{ opacity: [1, 0] }}
                                        >
                                            <h2 style={styles.h2} key="1">H</h2>
                                            <h2 style={styles.h2} key="2">e</h2>
                                            <h2 style={styles.h2} key="3">l</h2>
                                            <h2 style={styles.h2} key="4">l</h2>
                                            <h2 style={styles.h2} key="5">o</h2>
                                            <h2 style={styles.h2} key="6">!&nbsp;</h2>
                                            <h2 style={styles.h2} key="7">M</h2>
                                            <h2 style={styles.h2} key="8">y&nbsp;</h2>
                                            <h2 style={styles.h2} key="9">n</h2>
                                            <h2 style={styles.h2} key="10">a</h2>
                                            <h2 style={styles.h2} key="11">m</h2>
                                            <h2 style={styles.h2} key="12">e&nbsp;</h2>
                                            <h2 style={styles.h2} key="13">i</h2>
                                            <h2 style={styles.h2} key="14">s&nbsp;</h2>
                                            <h2 style={styles.h2} key="15">T</h2>
                                            <h2 style={styles.h2} key="16">e</h2>
                                            <h2 style={styles.h2} key="17">d</h2>
                                            <h2 style={styles.h2} key="18">,</h2>
                                        </QueueAnim>

                                        <QueueAnim
                                            style={styles.h2queueanim}
                                            interval={10}
                                            duration={500}
                                            delay={700}
                                            animConfig={{ opacity: [1, 0] }}
                                        >
                                            <h2 style={styles.h2} key="1">s</h2>
                                            <h2 style={styles.h2} key="2">o</h2>
                                            <h2 style={styles.h2} key="3">f</h2>
                                            <h2 style={styles.h2} key="4">t</h2>
                                            <h2 style={styles.h2} key="5">w</h2>
                                            <h2 style={styles.h2} key="6">a</h2>
                                            <h2 style={styles.h2} key="7">r</h2>
                                            <h2 style={styles.h2} key="8">e&nbsp;</h2>
                                            <h2 style={styles.h2} key="9">d</h2>
                                            <h2 style={styles.h2} key="10">e</h2>
                                            <h2 style={styles.h2} key="11">v</h2>
                                            <h2 style={styles.h2} key="12">e</h2>
                                            <h2 style={styles.h2} key="13">l</h2>
                                            <h2 style={styles.h2} key="14">o</h2>
                                            <h2 style={styles.h2} key="15">p</h2>
                                            <h2 style={styles.h2} key="16">e</h2>
                                            <h2 style={styles.h2} key="17">r</h2>
                                            <h2 style={styles.h2} key="18">.</h2>
                                        </QueueAnim>
                                        <QueueAnim
                                            style={styles.h2queueanim}
                                            interval={10}
                                            duration={500}
                                            delay={900}
                                            animConfig={{ opacity: [1, 0] }}
                                        >
                                            <h2 style={styles.h2} key="1">N</h2>
                                            <h2 style={styles.h2} key="2">i</h2>
                                            <h2 style={styles.h2} key="3">c</h2>
                                            <h2 style={styles.h2} key="4">e&nbsp;</h2>
                                            <h2 style={styles.h2} key="5">t</h2>
                                            <h2 style={styles.h2} key="6">o&nbsp;</h2>
                                            <h2 style={styles.h2} key="7">m</h2>
                                            <h2 style={styles.h2} key="8">e</h2>
                                            <h2 style={styles.h2} key="9">e</h2>
                                            <h2 style={styles.h2} key="10">t&nbsp;</h2>
                                            <h2 style={styles.h2} key="11">y</h2>
                                            <h2 style={styles.h2} key="12">o</h2>
                                            <h2 style={styles.h2} key="13">u</h2>
                                            <h2 style={styles.h2} key="14">!</h2>
                                        </QueueAnim>
                                    </Col>
                                </Row>
                            </Jumbotron>
                        </QueueAnim>
                    </Col>
                    <Col xs={12} lg={4} style={styles.viewWorkButton}>
                        <Row>
                            <Col>
                                <QueueAnim
                                    duration={500}
                                    animConfig={{ translateX: [0, 100], opacity: [1, 0] }}
                                >
                                    <div key="1">
                                        <MyButton path="/" buttonName="View Work" />
                                    </div>
                                </QueueAnim>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row style={styles.bioWrapper}>
            <Col xs={12} lg={4} style={styles.profilePicWrapper}>
                <QueueAnim
                    type="scale"
                    duration="1000"
                    animConfig={{ scale: [1, 0.1], opacity: [1, 0] }}
                >
                    <Image key="1" circle style={styles.profilePic} src={ProfilePic} />
                </QueueAnim>
            </Col>

            <Col xs={12} lg={8} style={styles.bio}>
                <QueueAnim
                    duration="500"
                    animConfig={{ translateX: [0, 100], opacity: [1, 0] }}
                >
                    <p key="1" style={styles.paragraph}>
                        I'm a software developer who wants to help a company grow
                        through building and improving its applications and online presence.
                        I enjoy decomposing and solving complicated problems and I’m always intrigued
                        by the different possibilities and solutions that lies ahead.
                        I am detail oriented and I want to use my skills to ensure
                        a business grows and remains on the cutting edge.
                            </p>
                    <p key="2" style={styles.paragraph}>
                        When I'm not working, I love being outdoors, going on road trips, and shooting landscape photos.
                            </p>
                    <p key="3" style={styles.paragraph}>
                        I am a hard worker and consider myself a lifelong learner.
                        I’m confident that I’ll be able to contribute positively and I’m excited
                        about what the future holds for my career.
                            </p>
                    <p key="4" style={styles.paragraph}>
                        If you'd like to learn more about me,
                                feel free to reach out on the <Link style={styles.link} to="/Contact">contact page</Link>.
                            </p>
                </QueueAnim>
            </Col>
        </Row>

    </Grid>

const styles = {
    h2: {
        margin: 0,
    },
    h2queueanim: {
        display: "flex",
        padding: 5,
    },
    viewWorkButton: {
        padding: 70,
        display: "flex",
        justifyContent: "center"
    },
    profilePicWrapper: {
        padding: 20,
        display: "flex",
        justifyContent: "center",
    },
    profilePic: {
        width: 300,
        padding: 7,
        border: "1px dashed lightgrey"
    },
    bio: {
        padding: 20,
    },
    paragraph: {
        fontSize: 16,
        fontFamily: 'Cormorant Garamond',
        letterSpacing: 1.1,
        lineHeight: 1.5,
        textIndent: 30,
        marginBottom: 30
    },
    link: {
        color: "lightskyblue",
        fontSize: 20
    }
}

export default About;

