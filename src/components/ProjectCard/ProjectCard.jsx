import React from 'react';
import { Link } from 'react-router-dom';
import { Thumbnail } from 'react-bootstrap';

import './ProjectCard.css';

const ProjectCard = (props) =>
            <Thumbnail 
                componentClass={Link} 
                href="/" to={props.path} 
                className="project-card" 
                src={props.logo} 
                alt={props.projectName}>
                <div className="textWrapper">
                    <h3 style={styles.projectName} >{props.projectName}</h3>
                    <p style={styles.projectTechnology} >{props.projectTechnology}</p>
                </div>
            </Thumbnail>

const styles = {
    projectName: {
        textAlign: "center"
    },
    projectTechnology: {
        fontFamily: 'Cormorant Garamond',
        fontSize: 18,
        textAlign: "center"
    }
}

export default ProjectCard;
