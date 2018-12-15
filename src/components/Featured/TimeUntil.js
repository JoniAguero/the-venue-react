import React, { Component } from 'react'
import Slide from 'react-reveal/Slide'

class TimeUntil extends Component {

    state = {

    }

  render() {
    return (
        <Slide left delay={1000}>
          <div className="countdown_wrapper">
            <div className="countdown_top">
                Event starts in
            </div>
            <div className="countdown_bottom">
                <div className="countdown_item">
                    <div className="countdown_time">
                    165
                    </div>
                    <div className="countdown_tag">
                    Days
                    </div>
                </div>
                <div className="countdown_item">
                    <div className="countdown_time">
                    23
                    </div>
                    <div className="countdown_tag">
                    HS
                    </div>
                </div>
                <div className="countdown_item">
                    <div className="countdown_time">
                    11
                    </div>
                    <div className="countdown_tag">
                    MIN
                    </div>
                </div>
                <div className="countdown_item">
                    <div className="countdown_time">
                    23
                    </div>
                    <div className="countdown_tag">
                    SEC
                    </div>
                </div>
            </div>
            </div>
        </Slide>
      
    )
  }
}

export default TimeUntil