import React from 'react';
import { Button } from 'react-bootstrap';
import './MyNormalButton.css';

const MyNormalButton = (props) => 
    <Button href={props.href} target="blank" className="button">{props.buttonName}</Button>

export default MyNormalButton
