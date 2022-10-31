import React from 'react';

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 center-align">
                    <img alt="logo" src={require("../../images/text-logo.png")} style={{ marginTop: 50 + "px", marginBottom: 50 + "px", height: 50, width: 350}} />
                    <p className="event-text" style={{ fontFamily: "Arcade" }}>
                    Circuit Rider is an interactive, web game that teaches players about Methodism. 
                    It is based on the retro game Oregon Trail, which allows players to go on different 
                    adventures based on decisions players make with their character. Can you survive 
                    Circuit Rider?</p>
                </div>
            </div>
        </div>
    );
}

export default About;