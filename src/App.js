import React, { Component } from 'react';
import Header from './components/Header/Header';
import Fearured from './components/Featured/Fearured';
import Info from './components/Info/Info';
import Highlights from './components/Highlights/Highlights';

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor:'#999', height:1200}}>
        <Header/>
        <Fearured/>
        <Info/>
        <Highlights/>
      </div>
    );
  }
}

export default App;
