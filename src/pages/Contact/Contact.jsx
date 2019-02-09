import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import QueueAnim from 'rc-queue-anim';
// assets
import './Contact.css';

const Contact = () =>
    <QueueAnim duration={500} animConfig={{ translateX: [0, 100], opacity: [1, 0] }}>
        <div key="1" style={styles.page}>
            <Grid key="1">
                <Row style={{ minHeight: "40px", display: "flex", alignItems: "center" }}>
                    <Col xs={12}>
                        <QueueAnim
                            style={{ display: "flex", justifyContent: "center" }}
                            delay={500}
                            animConfig={{ opacity: [1, 0] }}>
                            <h2 key="1" style={styles.h2}>C</h2>
                            <h2 key="2" style={styles.h2}>o</h2>
                            <h2 key="3" style={styles.h2}>n</h2>
                            <h2 key="4" style={styles.h2}>t</h2>
                            <h2 key="5" style={styles.h2}>a</h2>
                            <h2 key="6" style={styles.h2}>c</h2>
                            <h2 key="7" style={styles.h2}>t</h2>
                        </QueueAnim>
                    </Col>
                </Row>
            </Grid>

            <Grid key="1" className="contact-wrapper">
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

        </div>
    </QueueAnim>

const styles={
    page: {
        minHeight: "calc(100vh)"
    },
    h2: {
        margin: 0,
    }
}

export default Contact