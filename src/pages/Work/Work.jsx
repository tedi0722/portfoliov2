import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import QueueAnim from 'rc-queue-anim';
// components
import ProjectCard from '../../components/ProjectCard/ProjectCard';
// assets
import GRNLogo from '../../assets/GRNLogo.jpg';
import VerigateLogo from '../../assets/VerigateLogo.jpg';
import patrick from '../../assets/patrick1.gif';
import GRNGif from '../../assets/GRNGif.gif';
import VerigateGif from '../../assets/VerigateGif.gif';

const Work = () => 
    <Grid style={styles.wrapper}>
        <Row>
            <QueueAnim duration={500} animConfig={{translateX: [0, 100], opacity:[1,0]}}>
                <Col key="1" xs={12} md={4}>
                    <ProjectCard 
                    path="/GingerRedNaturals" 
                    logo={GRNGif} 
                    // gif={GRNGif} 
                    projectName="GingerRed Naturals" 
                    projectTechnology="WordPress" />
                </Col>
                <Col key="2" xs={12} md={4}>
                    <ProjectCard 
                    path="/Verigate" 
                    logo={VerigateGif} 
                    // gif={VerigateGif} 
                    projectName="Verigate" 
                    projectTechnology="Express / IoT" />
                </Col>
                <Col key="3" xs={12} md={4}>
                    <ProjectCard 
                    path="/BattleTactics" 
                    logo={patrick} 
                    gif={patrick} 
                    projectName="Battle Tactics" 
                    projectTechnology="React Native" />
                </Col>
            </QueueAnim>
        </Row>
    </Grid>


const styles = {
    wrapper: {
        minHeight: "calc(100vh)"
    }
}
export default Work;