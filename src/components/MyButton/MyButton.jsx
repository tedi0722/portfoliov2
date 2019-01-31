import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './MyButton.css';

const MyButton = (props) =>
        <Button componentClass={Link} to={props.path} className="button">{props.buttonName}</Button>


export default MyButton;