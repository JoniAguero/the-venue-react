import React, { Component } from 'react'
import Carousel from './Carousel';


export class Fearured extends Component {
  render() {
    return (
      <div style={{position:'relative'}}>

        <Carousel/>

        <div className="artist_name">
            <div className="wrapper">
                Ariana Grande
            </div>
        </div>
      </div>
    )
  }
}

export default Fearured
