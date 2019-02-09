import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';
// components 
import PDFButton from '../../components/PDFButton/PDFButton';
// assets
import pdf from '../../assets/pdf-test.pdf';

const Resume = () =>
    <QueueAnim duration={500} animConfig={{ translateX: [0, 100], opacity: [1, 0] }}>
        <div key="1" style={styles.page}>
            <PDFButton />
            {/* ....................................................................................... */}
            <Grid>
                <Row style={{ minHeight: "40px", display: "flex", alignItems: "center" }}>
                    <Col xs={12}>
                        <QueueAnim
                            style={{ display: "flex", justifyContent: "center" }}
                            delay={500}
                            animConfig={{ opacity: [1, 0] }}>
                            <h2 key="1" style={styles.h2}>R</h2>
                            <h2 key="2" style={styles.h2}>e</h2>
                            <h2 key="3" style={styles.h2}>s</h2>
                            <h2 key="4" style={styles.h2}>u</h2>
                            <h2 key="5" style={styles.h2}>m</h2>
                            <h2 key="6" style={styles.h2}>e</h2>
                        </QueueAnim>
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
                        <h4 style={styles.h4}>Back-end Developer | <Link to="/Verigate" style={styles.link}>Verigate</Link> | 2018</h4>
                        <ul style={styles.workDescription}>
                            <li>

                            </li>
                            <li style={styles.workDescription}>

                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h4 style={styles.h4}>Front-end Developer | <Link to="/GingerRedNaturals" style={styles.link}>GingerRed Naturals</Link> | 2018</h4>
                        <ul style={styles.workDescription}>
                            <li>

                            </li>
                            <li style={styles.workDescription}>

                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h4 style={styles.h4}>Production Assistant | Platinum Recording Studio | 2016-2017</h4>
                        <ul style={styles.workDescription}>
                            <li>
                                Managed studio equipment for daily recording sessions
                        </li>
                            <li style={styles.workDescription}>
                                Conducted administrative work such as schedule planning and bookings
                        </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h4 style={styles.h4}>Volunteer Instructor | Tech Goes Home | 2014</h4>
                        <ul style={styles.workDescription}>
                            <li>
                                Assisted clients who are beginner internet users
                                as they learn how internet and their new technological devices can improve their lives
                        </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h4 style={styles.h4}>Tutor | Taipei Juvenial Welfare Center | 2013</h4>
                        <ul style={styles.workDescription}>
                            <li>
                                Designed unique drum lessons for teenagers to help them cope with stress
                        </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h4 style={styles.h4}>Audio Engineer | Edgar Stanton Audio Recording Institute | 2012</h4>
                        <ul style={styles.workDescription}>
                            <li>
                                Team recorded concerts at the Aspen Music Festival & School
                        </li>
                            <li>
                                Learned advanced skills in acoustics, microphone placements, and orchestral production
                        </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h4 style={styles.h4}>Intern | Platinum Studio | 2011</h4>
                        <ul style={styles.workDescription}>
                            <li>
                                Involved in recording and mixing Taiwanese mainstream music
                        </li>
                            <li>
                                Involved in soldering audio equipment such as microphone cables
                        </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h4 style={styles.h4}>Intern | Point Studio | 2011</h4>
                        <ul style={styles.workDescription}>
                            <li>
                                Involved in implementing sound effects for major Taiwanese TV shows
                        </li>
                            <li>
                                Conducted administrative work such as
                                communication with clients to ensure the quality of the product
                        </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h4 style={styles.h4}>Intern | Pony | 2010</h4>
                        <ul style={styles.workDescription}>
                            <li>
                                Conducted marketing surveys with Pony vendors
                                and reported on how to improve Pony products and services
                        </li>
                            <li>
                                Conducted focus groups with clients to gather information
                                on their experiences and feedbacks of products
                        </li>
                        </ul>
                    </Col>
                </Row>
                {/* ......................................................................................... */}
                <Row>
                    <Col xs={12} style={styles.h3col}>
                        <h3 style={styles.h3}>Tools & Technologies</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h4 style={styles.h4}>Programming</h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={3} style={styles.skillscol}>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>WordPress</li>
                        </ul>
                    </Col>
                    <Col xs={12} lg={3} style={styles.skillscol}>
                        <ul>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>React.js</li>
                            <li>React Native</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h4 style={styles.h4}>Others</h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={3} style={styles.skillscol}>
                        <ul>
                            <li>Microsoft Word</li>
                            <li>Microsoft PowerPoint</li>
                            <li>Microsoft Excel</li>
                        </ul>
                    </Col>
                    <Col xs={12} lg={3} style={styles.skillscol}>
                        <ul>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Lightroom</li>
                        </ul>

                    </Col>
                </Row>
                {/* ......................................................................................... */}
                <Row>
                    <Col xs={12} style={styles.h3col}>
                        <h3 style={styles.h3}>Education</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h4 style={styles.h4}>UCLA Coding Bootcamp | 2018-2019</h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h4 style={styles.h4}>Berklee College of Music | 2013-2015</h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h4 style={styles.h4}>Kent School | 2010-2013</h4>
                    </Col>
                </Row>
                {/* ......................................................................................... */}
                <Row>
                    <Col xs={12} style={styles.h3col}>
                        <h3 style={styles.h3}>Certificates</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h4 style={styles.h4}>Basic Life Support Certificate | Red Cross Society</h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h4 style={styles.h4}>Bartending Certificate | DrinkMaster</h4>
                    </Col>
                </Row>
            </Grid>
        </div>
    </QueueAnim>

const styles = {
    page: {
        minHeight: "calc(100vh)"
    },
    wrapper: {
        background: "#1a1a1a",
        border: "1px solid lightgrey",
        borderRadius: 5,
        // width: 960,
        padding: "50px 70px",
        marginTop: 50,
        marginBottom: 100
    },
    h2: {
        textAlign: "center",
        margin: 0
    },
    h3: {
        margin: 0,
        // textIndent: 20,
        textShadow: "0px 0px 1px"
    },
    h3col: {
        borderBottom: "0.5px dashed lightgrey",
        padding: "30px 0px 20px",
        margin: "auto"
    },
    h4: {
        margin: "20px 0px 10px",
    },
    link: {
        color: "lightskyblue",
        fontSize: 18
    },
    workDescription: {
        fontFamily: 'Cormorant Garamond',
        letterSpacing: 1.1,
        lineHeight: 1.5,
        fontSize: 16,
        textIndent: 0,
    },
    skillscol: {
        padding: 10
    }
}

export default Resume
