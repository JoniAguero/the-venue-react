import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import BuyButton from '../utils/BuyButton';

export default class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30
    }
    porcentage = () => {
        if(this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }


    componentDidUpdate() {
        setTimeout(() => {
            this.porcentage()
        }, 30);
    }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
            <Fade onReveal={() => this.porcentage()}>
                <div className="discount_porcentage">
                    <span>{this.state.discountStart}%</span>
                    <span>OFF</span>
                </div>
            </Fade>
            <Slide right>
                <div className="discount_description">
                    <h3>Purchase tickets before 20th MAY</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                    <div>
                        <BuyButton 
                            text='Purchase tickets'
                            bck='#ffa800'
                            color='#ffffff'
                            link='https://www.linkedin.com/in/jonathan-aguero-256648137/'
                        />
                    </div>

                </div>
            </Slide>


        </div>
      </div>
    )
  }
}
