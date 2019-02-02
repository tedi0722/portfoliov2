import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// assets
import './Contact.css';

const Contact = () =>
    <Grid className="contact-wrapper">
        <h2 className="contactTitle">Contact</h2>
        <Row>
            <Col xs={12}>
                <p className="contact-intro">Please don't hesitate to contact me if you have any questions.</p>
                <p className="contact-intro">You can use the form below, or email me directly at <a className="email" href="mailto:tedi0722@gmail.com">tedi0722@gmail.com.</a></p>
                <form method="POST" action="https://formspree.io/tedi0722@gmail.com">
                    <input className="contact-input" type="text" name="name" placeholder="Your Name"></input>
                    <input className="contact-input" type="email" name="email" placeholder="Your email"></input>
                    <input className="contact-input" type="text" name="subject" placeholder="Subject"></input>
                    <textarea className="contact-textarea" name="message" placeholder="Message"></textarea>
                    <br></br>
                    <button className="sendButton" type="submit">Send Message</button>
                </form>
            </Col>
        </Row>
    </Grid>


export default Contact