import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './SideDrawer';



export class Header extends Component {

    state = {
        drawerOpen: false,
        headerShow: false
    }

    toggleDrawer = (value) => {
        console.log(value);
        this.setState({
            drawerOpen: value
        })
    }

  render() {
    return (
      <AppBar
        position='fixed'
        style={{
            backgroundColor: '#2f2f2f',
            boxShadow: 'none',
            padding: '10px 0px'
        }}
      >
        <Toolbar>
            <div className="header_logo">
                <div className="font_righteous header_logo_venue">The venue</div>
                <div className="header_logo_title">Musical Event</div>
            </div>

            <IconButton
                arial-label="menu"
                color="inherit"
                onClick={()=> this.toggleDrawer(true)}
            >
                <MenuIcon />
            </IconButton>

            <SideDrawer
                open={this.state.drawerOpen}
                onClose={ (value)=> this.toggleDrawer(value)}
            >

            </SideDrawer>

        </Toolbar>
        
      </AppBar>
    )
  }
}

export default Header
