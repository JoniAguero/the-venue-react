import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false) }
    >
      <List component="nav">
          {['Event starts in', 'Venue NFO', 'Highlights', 'Pricing', 'Location'].map((text, index) => (
            <ListItem button key={text} onClick={ () => console.log(text)}>
              {text}
            </ListItem>
          ))}
        </List>
    </Drawer>
  )
}

export default SideDrawer
