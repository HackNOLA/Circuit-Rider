import React from 'react'

const Credits = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 center-align">
          <div className="row" style={{ marginTop: 50 + 'px' }}>
            <h4>CREDITS</h4>
          </div>
          <div className="row">
            <h4 className="credit-title">Product Owner</h4>
            <p className="event-text" style={{ fontFamily: 'Arcade' }}>
              Matt Rawle
            </p>
          </div>
          <div className="row">
            <h4 className="credit-title">Full Stack Developer</h4>
            <p className="event-text" style={{ fontFamily: 'Arcade' }}>
              Eric O'Neal Jr
            </p>
          </div>
          <div className="row">
            <h4 className="credit-title">Full Stack Developer</h4>
            <p className="event-text" style={{ fontFamily: 'Arcade' }}>
              Akin Pounds
            </p>
          </div>
          <div className="row">
            <h4 className="credit-title">Music by:</h4>
            <p className="event-text" style={{ fontFamily: 'Arcade' }}>
              Mr. Tyler Larson
            </p>
          </div>
          <div className="row">
            <h4 className="credit-title">Art by:</h4>
            <p className="event-text" style={{ fontFamily: 'Arcade' }}>
              Hannah Wilson
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Credits
