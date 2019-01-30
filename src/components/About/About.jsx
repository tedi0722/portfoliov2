import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import ProfilePic from '../../assets/ProfilePic.JPG';

import './About.css'

const About = () =>
    <Grid>

        <Jumbotron style={styles.jumbotron} className="text-center">
            <h2 style={styles.h2}>Hello, I'm Ted,</h2>
            <h2 style={styles.h2}>full-stack developer.</h2>
            <h2 style={styles.h2}>Nice to meet you!</h2>
                <br></br>
            <Link to="/">
                <Button className="view-work-btn">View Work</Button>
            </Link>
        </Jumbotron>

        <Row style={styles.aboutWrapper} className="show-grid text-center about-wrapper">
            <Col xs={12} md={4} style={styles.profilePicWrapper}>
                <Image style={styles.profilePic} src={ ProfilePic } />
            </Col>
            <Col xs={12} md={8} style={styles.bioWrapper}>
                <p style={styles.paragraph}>I'm a full-stack developer who wants to help a company grow through building and improving its applications and online presence. I enjoy decomposing and solving complicated problems and I’m always intrigued by the different possibilities and solutions that lies ahead. I strive to write clean codes and want to use my skills to ensure a business grows and remains on the cutting edge.</p>
                <p style={styles.paragraph}>When I'm not working, I love being outdoors, going on road trips, and shooting landscape photos.</p>
                <p style={styles.paragraph}>I am a hard worker and consider myself a lifelong learner. I’m confident that I’ll be able to contribute positively and I’m excited about what the future holds for my career.</p>
                <p style={styles.paragraph}>If you'd like to learn more about me, feel free to reach out on <Link to="/Contact">contact page</Link>.</p>
            </Col>
        </Row>

    </Grid>

const styles = {
    jumbotron: {
        textAlign: "center",
        background: "white",
        border: "1px solid lightgrey",
        height: 300,
        paddingTop: 40,
        marginBottom: 80

    },
    h2: {
        margin: 10,
        fontSize: 30
    },
    profilePicWrapper: {
        padding: 20
    },
    profilePic: {
        width: 300,
        padding: 20
    },
    aboutWrapper: {
        display: "flex",
        alignItems: "start",
        minHeight: "calc(100vh)"
    },
    bioWrapper: {
        padding: 20,
        marginRight: 20,
        fontSize: 18
    },
    paragraph: {
        marginBottom: 30
    }

}

export default About;

