import React, { Component } from 'react';
import Header from './components/Header/Header';
import Fearured from './components/Featured/Fearured';
import Info from './components/Info/Info';
import Highlights from './components/Highlights/Highlights';
import Pricing from './components/Pricing/Pricing';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';

import { Element  } from 'react-scroll'

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor:'#999', height:1200}}>
        <Header/>
        <Element name="eventstartsin">
          <Fearured/>
        </Element>
        <Element name="venuenfo">
          <Info/>
        </Element>
        <Element name="highlights">
          <Highlights/>
        </Element>
        <Element name="pricing">
          <Pricing/>
        </Element>
        <Element name="location">
          <Location/>
        </Element>
        <Footer/>
      </div>
    );
  }
}

export default App;
