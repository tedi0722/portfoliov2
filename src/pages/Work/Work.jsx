import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import GRNLogo from '../../assets/GRNLogo.jpg';

const Work = () => 
    <Grid style={styles.wrapper} >
        <Row>
            <Col xs={12} md={4}>
                <ProjectCard path="/GingerRedNaturals" logo={GRNLogo} projectName="GingerRed Naturals" projectTechnology="WordPress" />
            </Col>
        </Row>
    </Grid>


const styles = {
    wrapper: {
        minHeight: "calc(100vh)"
    }
}
export default Work;