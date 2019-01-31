import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import GRNLogo from '../../assets/GRNLogo.jpg';
import VerigateLogo from '../../assets/VerigateLogo.jpg'

const Work = () => 
    <Grid style={styles.wrapper} >
        <Row>
            <Col xs={12} md={4}>
                <ProjectCard path="/GingerRedNaturals" logo={GRNLogo} projectName="GingerRed Naturals" projectTechnology="WordPress" />
            </Col>
            <Col xs={12} md={4}>
                <ProjectCard path="/Verigate" logo={VerigateLogo} projectName="Verigate" projectTechnology="Full Stack Application / Express" />
            </Col>
            <Col xs={12} md={4}>
                <ProjectCard path="/BattleTactics" projectName="Battle Tactics" projectTechnology="React Native" />
            </Col>
        </Row>
    </Grid>


const styles = {
    wrapper: {
        minHeight: "calc(100vh)"
    }
}
export default Work;