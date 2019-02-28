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
            
        }
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            hover: !state.hover,
            font: "lightgrey"
        }
    }

    render() {

        let thumbnail;

        if (this.state.hover) {
            thumbnail = this.props.gif
        } else {
            thumbnail = this.props.logo
        }

        let projectNameStyle;
        let projectTechnologyStyle;
        if (this.state.hover) {
            projectNameStyle = styles.projectNameHover
            projectTechnologyStyle = styles.projectTechnologyHover

        } else {
            projectNameStyle = styles.projectName
            projectTechnologyStyle = styles.projectTechnology
        }

        return (
            <Thumbnail
                // style={{width: 300}}
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}
                componentClass={Link}
                href="/" to={this.props.path}
                className="project-card"
                src={this.props.logo} 
                // src={thumbnail}
                alt={this.props.projectName}>
                <div className="textWrapper">
                    <h3 style={projectNameStyle} >{this.props.projectName}</h3>
                    <p style={projectTechnologyStyle} >{this.props.projectTechnology}</p>
                </div>
            </Thumbnail>
        )
    }
}

const styles = {
    projectName: {
        textAlign: "center",
        color: "#888888"
    },
    projectNameHover: {
        textAlign: "center",
        color: "lightgrey"
    },
    projectTechnology: {
        fontFamily: 'Cormorant Garamond',
        fontSize: 18,
        letterSpacing: 1.1,
        textAlign: "center",
        color: "#888888"
    },
    projectTechnologyHover: {
        fontFamily: 'Cormorant Garamond',
        fontSize: 18,
        letterSpacing: 1.1,
        textAlign: "center",
        color: "lightgrey"
    }
}

export default ProjectCard;
