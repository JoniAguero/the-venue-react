import React from 'react'
import Button from '@material-ui/core/Button';
import ticket_icon from '../../images/icons/ticket.png';

const BuyButton = (props) => {
  return (
    <Button 
        href={props.link}
        variant='contained'
        size='small'
        style={{
            background: `${props.bck}`,
            color: `${props.color}`
        }}
    >
        <img 
            src={ticket_icon}
            className="iconImage"
            alt="icon_button"
        /> {props.text}
    </Button>
  )
}

export default BuyButton
