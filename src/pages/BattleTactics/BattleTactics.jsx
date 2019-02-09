import React from 'react';
import { Grid, Row, Col, Button, Carousel } from 'react-bootstrap';
import QueueAnim from 'rc-queue-anim';

import './BattleTactics.css';
import MyNormalButton from '../../components/MyNormalButton/MyNormalButton';

const BattleTactics = () =>
<QueueAnim duration={500} animConfig={{ opacity: [1, 0] }}>


    <div key="1">
        <h2 style={styles.title}>GingerRed Naturals</h2>

        <Carousel>
            {/* <Carousel.Item>
                <img style={styles.image} width={900} height={500} alt="900x500" src={GRNHome} />
            </Carousel.Item>
            <Carousel.Item>
                <img style={styles.image} width={900} height={500} alt="900x500" src={GRNOrder} />
            </Carousel.Item>
            <Carousel.Item>
                <img style={styles.image} width={900} height={500} alt="900x500" src={GRNWeatherNews} />
            </Carousel.Item> */}
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
                        PROJECT IN PROGRESS
                    </p>
                    <p style={styles.infoParagraph}>
                        
                    </p>
                    <p style={styles.infoParagraph}>
                        
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
                            <li>React Native</li>
                            <li>Native Base</li>
                        </ul>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <div style={styles.buttonWrapper}>
                        <MyNormalButton href="" buttonName="View Site" />
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
}

export default BattleTactics;