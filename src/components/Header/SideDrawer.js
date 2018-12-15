import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { scroller } from 'react-scroll'

const SideDrawer = (props) => {

  const scrollTo = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -100
    })
    props.onClose(false)
  }

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false) }
    >
      <List component="nav">
          {['Event starts in', 'Venue NFO', 'Highlights', 'Pricing', 'Location'].map((text, index) => (
            <ListItem button key={text} onClick={ () => {
                                          const textC = text.replace(/ /g, "")
                                          const textLink = textC.toLocaleLowerCase()
                                          scrollTo(textLink)
                                        }}>
              {text}
            </ListItem>
          ))}
        </List>
    </Drawer>
  )
}

export default SideDrawer
