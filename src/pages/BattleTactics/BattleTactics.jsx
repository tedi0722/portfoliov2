import React from 'react';
import { Grid, Row, Col, Button, Carousel } from 'react-bootstrap';
import QueueAnim from 'rc-queue-anim';
import './BattleTactics.css';
import MyNormalButton from '../../components/MyNormalButton/MyNormalButton';
import BTHome from '../../assets/BTHome.jpg';
import BTMap from '../../assets/BTMap.jpg';
import BTTerrain from '../../assets/BTTerrain.jpg';
import BTFaction from '../../assets/BTFaction.jpg';
import BTUnit from '../../assets/BTUnit.jpg';
import BTDeployment from '../../assets/BTDeployment.jpg';
import BTGame from '../../assets/BTGame.jpg';

const BattleTactics = () =>
<QueueAnim duration={500} animConfig={{ opacity: [1, 0] }}>


    <div key="1">
        <h2 style={styles.title}>Battle Tactics</h2>

        <Carousel>
            <Carousel.Item>
                <img style={styles.image} width={900} height={500} alt="900x500" src={BTHome} />
            </Carousel.Item>
            <Carousel.Item>
                <img style={styles.image} width={900} height={500} alt="900x500" src={BTMap} />
            </Carousel.Item>
            <Carousel.Item>
                <img style={styles.image} width={900} height={500} alt="900x500" src={BTTerrain} />
            </Carousel.Item>
            <Carousel.Item>
                <img style={styles.image} width={900} height={500} alt="900x500" src={BTFaction} />
            </Carousel.Item>
            <Carousel.Item>
                <img style={styles.image} width={900} height={500} alt="900x500" src={BTUnit} />
            </Carousel.Item>
            <Carousel.Item>
                <img style={styles.image} width={900} height={500} alt="900x500" src={BTDeployment} />
            </Carousel.Item>
            <Carousel.Item>
                <img style={styles.image} width={900} height={500} alt="900x500" src={BTGame} />
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
                        Battle Tactics is a mobile application built with React Native that serves the purpose of a strategy planner
                        for the popular miniature wargame <a style={styles.link} href="https://warhammer40000.com/" target="blank">Warhammer 40,000</a>.
                    </p>
                    <p style={styles.infoParagraph}>
                        The client requested several features: 
                    </p>
                    <ul style={styles.infoParagraph}>
                        <li>
                            Ability to select maps, terrains, factions, units, and deployment
                        </li>
                        <li>
                            Ability to drag and drop objects as units on the map for battle formation
                        </li>
                        <li>
                            Ability to update and save data from the BattleScrive API, 
                            which contains detailed information of each faction and units
                        </li>
                        <li>
                            Ability to display information of each unit as modal pop-ups
                        </li>
                    </ul>
                    <p style={styles.infoParagraph}>
                        We used the React Native "fetch" method to grab information from the BattleScribe API, the data is then 
                        stored into the AsyncStorage. The amount of data was enormous, so we decided to implement the Context API. 
                        Context allowed us to modularize our application by keeping all our states in one single file, 
                        which made passing values between components easier.
                    </p>
                    <p style={styles.infoParagraph}>
                        The PanResponder API helped us create draggable components. It tracks the user's gestures which allowed us to
                        create additional features such as pinch-zooming and double-tapping.
                    </p>
                    <p style={styles.infoParagraph}>
                        Lastly, we created helper functions in the Context to set different states, the functions is then called from 
                        different components depending on their interaction with states.
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
                            <li>Context API</li>
                            <li>AsyncStorage API</li>
                        </ul>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <div style={styles.buttonWrapper}>
                        <MyNormalButton href="https://github.com/MrStevenNg/Battle-Tactics.git" target="blank" buttonName="View on Github" />
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
    link: {
        color: "lightskyblue",
        fontSize: 20
    }
}

export default BattleTactics;