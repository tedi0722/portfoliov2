import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Thumbnail } from 'react-bootstrap';
// assets
import './ProjectCard.css';

class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            hover: false,
            key: 0
        }
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            hover: !state.hover,
        }
    }

    render() {

        let thumbnail;

        if (this.state.hover) {
            thumbnail = this.props.gif
        } else {
            thumbnail = this.props.logo
        }

        return (
            <Thumbnail
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}
                componentClass={Link}
                href="/" to={this.props.path}
                className="project-card"
                // src={this.props.logo} 
                src={thumbnail}
                alt={this.props.projectName}>
                <div className="textWrapper">
                    <h3 style={styles.projectName} >{this.props.projectName}</h3>
                    <p style={styles.projectTechnology} >{this.props.projectTechnology}</p>
                </div>
            </Thumbnail>
        )
    }
}

const styles = {
    projectName: {
        textAlign: "center"
    },
    projectTechnology: {
        fontFamily: 'Cormorant Garamond',
        fontSize: 18,
        letterSpacing: 1.1,
        textAlign: "center"
    }
}

export default ProjectCard;
