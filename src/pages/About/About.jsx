import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import ProfilePic from '../../assets/ProfilePic.JPG';
import MyButton from '../../components/MyButton/MyButton';

import './About.css'

const About = () =>
    <Grid>

        <Jumbotron style={styles.jumbotron} className="text-center">
            <h2 style={styles.h2}>Hello, I'm Ted,</h2>
            <h2 style={styles.h2}>software engineer.</h2>
            <h2 style={styles.h2}>Nice to meet you!</h2>
                <br></br>
            <MyButton path="/" buttonName="View Work" />
        </Jumbotron>

        <Row style={styles.aboutWrapper} className="show-grid text-center about-wrapper">
            <Col xs={12} md={4} style={styles.profilePicWrapper}>
                <Image circle style={styles.profilePic} src={ ProfilePic } />
            </Col>
            <Col xs={12} md={8} style={styles.bioWrapper}>
                <p style={styles.paragraph}>I'm a software engineer who wants to help a company grow through building and improving its applications and online presence. I enjoy decomposing and solving complicated problems and I’m always intrigued by the different possibilities and solutions that lies ahead. I am detail oriented and I want to use my skills to ensure a business grows and remains on the cutting edge.</p>
                <p style={styles.paragraph}>When I'm not working, I love being outdoors, going on road trips, and shooting landscape photos.</p>
                <p style={styles.paragraph}>I am a hard worker and consider myself a lifelong learner. I’m confident that I’ll be able to contribute positively and I’m excited about what the future holds for my career.</p>
                <p style={styles.paragraph}>If you'd like to learn more about me, feel free to reach out on <Link style={styles.link} to="/Contact">contact page</Link>.</p>
            </Col>
        </Row>

    </Grid>

const styles = {
    jumbotron: {
        textAlign: "center",
        background: "#101010",
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
        padding: 7,
        border: "1px dashed"
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
    },
    link: {
        color: "lightskyblue",
        fontSize: 20
    }
}

export default About;

