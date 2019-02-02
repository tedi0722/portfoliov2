import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// components
import ProjectCard from '../../components/ProjectCard/ProjectCard';
// assets
import GRNLogo from '../../assets/GRNLogo.jpg';
import VerigateLogo from '../../assets/VerigateLogo.jpg';
import patrick from '../../assets/patrick1.gif';
import GRNGif from '../../assets/GRNGif.gif';
import VerigateGif from '../../assets/VerigateGif.gif';

const Work = () => 
    <Grid style={styles.wrapper} >
        <Row>
            <Col xs={12} md={4}>
                <ProjectCard path="/GingerRedNaturals" logo={GRNLogo} gif={GRNGif} projectName="GingerRed Naturals" projectTechnology="WordPress" />
            </Col>
            <Col xs={12} md={4}>
                <ProjectCard path="/Verigate" logo={VerigateLogo} gif={VerigateGif} projectName="Verigate" projectTechnology="Full Stack Application / Express" />
            </Col>
            <Col xs={12} md={4}>
                <ProjectCard path="/BattleTactics" logo={patrick} gif={patrick} projectName="Battle Tactics" projectTechnology="React Native" />
            </Col>
        </Row>
    </Grid>


const styles = {
    wrapper: {
        minHeight: "calc(100vh)"
    }
}
export default Work;