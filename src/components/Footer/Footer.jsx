import React from 'react';

const Footer = () =>
    <footer>
        <div style={styles.socialLinks}>
            <p style={styles.paragraph}>Follow me on social media:</p>

            <a style={styles.socialLinksA} href="https://github.com/tedi0722" target="_blank" rel="noopener noreferrer">
                <i style={styles.socialLinksI} className="fa fa-github-square" aria-hidden="true" />
            </a>

            <a style={styles.socialLinksA} href="https://www.linkedin.com/in/ted-i-8a9813131/" target="_blank" rel="noopener noreferrer">
                <i style={styles.socialLinksI} className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            <a style={styles.socialLinksA} href="https://www.instagram.com/tsi.jpg/" target="_blank" rel="noopener noreferrer">
                <i style={styles.socialLinksI} className="fa fa-instagram" aria-hidden="true" />
            </a>
        </div>
    </footer>

const styles = {
    socialLinks: {
        // backgroundColor: "#101010",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // borderTop: "1px dashed white"
    },
    socialLinksI: {
        fontSize: 30,
        padding: 10
    },
    socialLinksA: {
        color: "white"
    },
    paragraph: {
        margin: 0,
        padding: "10px 5px 5px 5px",
        color: "white"
    }
}

export default Footer