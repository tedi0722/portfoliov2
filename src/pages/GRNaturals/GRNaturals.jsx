import React from 'react';
import { Grid, Row, Col, Carousel } from 'react-bootstrap';
import QueueAnim from 'rc-queue-anim';
// components
import MyNormalButton from '../../components/MyNormalButton/MyNormalButton';
// assets
import GRNHome from '../../assets/GRNHome.jpg';
import GRNOrder from '../../assets/GRNOrder.jpg';
import GRNWeatherNews from '../../assets/GRNWeatherNews.jpg';
import './GRNaturals.css';

const GRNaturals = () =>
    <QueueAnim duration={500} animConfig={{ opacity: [1, 0] }}>
        <div key="1">
            <h2 style={styles.title}>GingerRed Naturals</h2>

            <Carousel>
                <Carousel.Item>
                    <img style={styles.image} width={900} height={500} alt="900x500" src={GRNHome} />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={styles.image} width={900} height={500} alt="900x500" src={GRNOrder} />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={styles.image} width={900} height={500} alt="900x500" src={GRNWeatherNews} />
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
                            GingerRed Naturals is a small business located in Red Lodge, Montana.
                            The company sells organic products locally such as
                            lip balms, salves, lotions, essential oil blends, and bath products.
                    </p>
                        <p style={styles.infoParagraph}>
                            The client wanted a CMS (Content Management System)
                            that allows her to post updates and sell products easily.
                            However, she didn’t want to implement a shopping API
                            since she preferred communicating with her customers through purchases.
                    </p>
                        <p style={styles.infoParagraph}>
                            We chose WordPress as the CMS and used JavaScript to implement an Order Form.
                            The customers are now able to view the products and click on a button
                            to save the ones they wish to purchase.
                            The Order Form will display each product that the customers saved,
                            along with any additional messages they wish to send.
                    </p>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <h3 style={styles.infoTitle}>Technologies Involved</h3>
                        <hr></hr>

                    </Col>
                </Row>

                <Row style={styles.row}>
                    <Col xs={12}>
                        <div style={styles.technologies}>
                            <ul>
                                <li>WordPress</li>
                                <li>HTML5</li>
                                <li>CSS</li>
                                <li>Bootstrap</li>
                                <li>JavaScript</li>
                                <li>PHP</li>
                                <li>Weather & News API</li>
                            </ul>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <div style={styles.buttonWrapper}>
                            <MyNormalButton href="https://www.gingerrednaturals.com/" buttonName="View Site" />
                        </div>
                    </Col>
                </Row>

                <Row style={styles.row}>
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
                </Row>
            </Grid>
        </div>
    </QueueAnim>

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
    signatureWrapper: {
        textAlign: "right",
        fontStyle: "normal",
    },
    signature: {
        fontSize: 18,
        margin: 0
    }
}

export default GRNaturals;