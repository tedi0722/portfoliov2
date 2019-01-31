import React from 'react';
import { Grid, Row, Col, Button, Carousel } from 'react-bootstrap'
import GRNHome from '../../assets/GRNHome.jpg';
import GRNOrder from '../../assets/GRNOrder.jpg';
import GRNWeatherNews from '../../assets/GRNWeatherNews.jpg';

import './GRNaturals.css';
import MyNormalButton from '../../components/MyNormalButton/MyNormalButton';

const GRNaturals = () => 
    <div>
        <h2 style={styles.title}>GingerRed Naturals</h2>

            <Carousel>
                <Carousel.Item>
                    <img style={styles.image} width={900} height={500} alt="900x500" src={ GRNHome } />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={styles.image} width={900} height={500} alt="900x500" src={ GRNOrder } />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={styles.image} width={900} height={500} alt="900x500" src={ GRNWeatherNews } />
                </Carousel.Item>
            </Carousel>

            <Grid style={styles.info} >
                <Row>
                    <Col xs={12}>
                        <h3>About This Project</h3>
                            <hr></hr>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <br></br>
                        <h3>Technologies Involved</h3>
                            <hr></hr>
                        <ul>
                            <li>WordPress</li>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>Weather & News API</li>
                        </ul>
                            <div style={styles.buttonWrapper}>
                            <MyNormalButton href="" buttonName="View Site" />
                            </div>
                    </Col>
                </Row>
            </Grid>
    </div>

const styles = {
    title: {
        textAlign: "center",
        marginBottom: 30
    },
    image: {
        margin: "auto"
    },
    info: {
        padding: 20,
        minHeight: 'calc(100vh)'
    },
    buttonWrapper: {
        display: "flex",
        justifyContent: "center"
    }
}

export default GRNaturals;