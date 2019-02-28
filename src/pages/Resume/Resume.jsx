import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';
// components 
import PDFButton from '../../components/PDFButton/PDFButton';
// assets
// import pdf from '../../assets/pdf-test.pdf';
import pdf from '../../assets/Ted_S_I.pdf';


const Resume = () =>
    <QueueAnim duration={500} animConfig={{ translateX: [0, 100], opacity: [1, 0] }}>
        <div key="1" style={styles.page}>
            <PDFButton href={pdf} />
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
                        <h4 style={styles.h4}>React Native Developer | <Link to="/BattleTactics" style={styles.link}>Battle Tactics</Link> | 2019</h4>
                        <ul style={styles.workDescription}>
                            <li>
                                Involved in programming the user-flow of the application
                            </li>
                            <li>
                                Used the Battlescribe API to pull data that contains detailed information of the game
                            </li>
                            <li>
                                Worked with AsyncStorage which allows users to save data pulled from API onto the mobile device locally
                            </li>
                            <li>
                                Used the Context API, a state management system, to pass values / states between components
                            </li>
                            <li>
                                Used the PanResponder API to create draggable components that tracks gestures of the users 
                            </li>
                            <li>
                                Involved in styling the application using React inline styling
                            </li>

                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h4 style={styles.h4}>Back-end Developer | <Link to="/Verigate" style={styles.link}>Verigate</Link> | 2018</h4>
                        <ul style={styles.workDescription}>
                            <li>
                                Implemented user authentication, which allows users to register and login
                            </li>
                            <li>
                                Created a database using MySQL that stores all the user login information
                            </li>
                            <li>
                                Involved in connecting an Arduino board to the IoT device
                            </li>
                            <li>
                                Implemented Node-RED which allows users to connect multiple devices to the application  
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h4 style={styles.h4}>Front-end Developer | <Link to="/GingerRedNaturals" style={styles.link}>GingerRed Naturals</Link> | 2018</h4>
                        <ul style={styles.workDescription}>
                            <li>
                                Worked with the newest WordPress technology / editor, Gutenberg
                            </li>
                            <li>
                                Involved in designing the UI of the WordPress site
                            </li>
                            <li>
                                Involved in styling the WordPress site using the Visual Editor and CSS
                            </li>
                            <li>
                                Implemented a product showcase page that allows customers to view and save the items they wish to purchase
                            </li>
                            <li>
                                Implemented an order from that displays the saved products and allows customers to send any additional messages
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h4 style={styles.h4}>Production Assistant | Platinum Recording Studio | 2016-2017</h4>
                        <ul style={styles.workDescription}>
                            <li>
                                Conducted administrative work such as studio bookings and schedule plannings
                            </li>
                            <li>
                                Managed studio equipments for daily recording sessions such as microphones, soundboards, cables, etc
                            </li>
                            <li>
                                Involved in creating and soldering equipments such as cables to ensure they are high-quality
                            </li>
                            <li>
                                Communicated with artists to ensure their recording sessions progress smoothly
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h4 style={styles.h4}>Market Research | Pony | 2015</h4>
                        <ul style={styles.workDescription}>
                            <li>
                                Conducted marketing surveys with 30+ Pony vendors on customer experiences and sales
                            </li>
                            <li>
                                Compared sales with other brands 
                            </li>
                            <li>
                                Conducted focus groups with clients to gather information on their experiences and feedbacks of the products and the brand itself
                            </li>
                            <li>
                                Reported on how to improve Pony products and services
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
                                Designed and taught unique drum lessons for teenagers to help them cope with stress
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
                                Recorded voice-overs for talk shows
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
                        <ul style={styles.workDescription}>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>WordPress</li>
                        </ul>
                    </Col>
                    <Col xs={12} lg={3} style={styles.skillscol}>
                        <ul style={styles.workDescription}>
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
                        <ul style={styles.workDescription}>
                            <li>Microsoft Word</li>
                            <li>Microsoft PowerPoint</li>
                            <li>Microsoft Excel</li>
                        </ul>
                    </Col>
                    <Col xs={12} lg={3} style={styles.skillscol}>
                        <ul style={styles.workDescription}>
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
                        <ul style={styles.workDescription}>
                            <li>
                                Full Stack Web Development
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h4 style={styles.h4}>Berklee College of Music | 2013-2015</h4>
                        <ul style={styles.workDescription}>
                            <li>
                                Music Business & Management
                            </li>
                            <li>
                                Entrepreneurship
                            </li>
                            <li>
                                Music Production & Engineering
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h4 style={styles.h4}>Edgar Stanton Audio Recording Center | 2012</h4>
                        <ul style={styles.workDescription}>
                            <li>
                                Orchestra Production
                            </li>
                            <li>
                                Acoustics
                            </li>
                        </ul>
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
