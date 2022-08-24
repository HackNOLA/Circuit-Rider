import React from 'react';

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 center-align">
                    <img alt="logo" src="https://3.bp.blogspot.com/--nOktJgvwk8/U9Pi-YO-FwI/AAAAAAAADb8/5MJ2pQFg-z8/s1600/Screen-Shot-2013-05-26-at-1_42_07-PM.png" style={{ marginTop: 50 + "px", marginBottom: 50 + "px" }} />
                    <p className="event-text" style={{ fontFamily: "Arcade" }}>
                        Welcome to Circuit Rider, an oregon-trail style christian game in which you try to
                        navigate your way through London and learn about Methodism.
                        Along the way, you’ll face choices that will affect your horse, bible, clothing, food, and supplies..</p>
                </div>
            </div>
        </div>
    );
}

export default About;