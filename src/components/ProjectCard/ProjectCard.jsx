import React from 'react';
import { Link } from 'react-router-dom';
import { Thumbnail } from 'react-bootstrap';

import './ProjectCard.css';

const ProjectCard = (props) =>
    <Thumbnail 
        style={styles.projectCard}
        componentClass={Link} 
        href="/" to={props.route} 
        className="project-card" 
        src={props.logo} 
        alt={props.projectName}>
            <h3 style={styles.projectName} >{props.projectName}</h3>
            <p style={styles.projectTechnology} >{props.projectTechnology}</p>
    </Thumbnail>

const styles = {
    projectCard: {
        padding: 20,
        transition: "0.3s ease-in-out",
        boxShadow: "10px 10px 20px lightgrey",
        textDecoration: "none"
    },
    projectName: {
        textAlign: "center"
    },
    projectTechnology: {
        fontFamily: 'Cormorant Garamond',
        fontSize: 16,
        textAlign: "center"
    }
}

export default ProjectCard;
