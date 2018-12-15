import React, { Component } from 'react'
import BuyButton from '../utils/BuyButton';

import Zoom from 'react-reveal/Zoom';

export default class Pricing extends Component {

    state = {
        prices: [100,150,250],
        positions: ['Balcony','Medium','Start'],
        desc: [ 'nec lacinia elit arcu non purus.',
                'Suspendisse sodales vitae tortor vitae pretium.',    
                'Aliquam interdum, urna vitae hendrerit hendrerit, mauris mi luctus augue' ],
        delay: [500, 0, 500]
    }

    showBoxes = () => (

        this.state.prices.map((box, i) => (
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>$ {this.state.prices[i]} </span>
                            <span>$ {this.state.positions[i]} </span>
                        </div>
                        <div className="pricing_description">
                            <span>$ {this.state.desc[i]} </span>
                        </div>
                        <div className="pricing_buttons">
                            < BuyButton
                                text = 'Purchase'
                                bck = '#ffa800'
                                color = '#ffffff'
                                link = 'https://www.linkedin.com/in/jonathan-aguero-256648137/' /
                            >
                        </div>
                    </div>
                </div>
            </Zoom>
        ))

    )

    

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
            <h2>Pricing</h2>
            <div className=" pricing_wrapper">
                {this.showBoxes()}
            </div>
        </div>
      </div>
    )
  }
}
