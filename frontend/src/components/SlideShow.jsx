import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/carousel';
import p1 from '../images/p1.jpg';
import p2 from '../images/p2.jpg';
import p3 from '../images/p3.jpg';

class SlideShow extends Component {
  render() {
    return (
    
      

        <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={p1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>ASSASSINS CREED SYNDICATE</h3>
            <p>Assassin's Creed Syndicate is an action-adventure video game developed by Ubisoft Quebec and published by Ubisoft. It was released on October 23, 2015, for PlayStation 4 and Xbox One, and on November 19, 2015, for Microsoft Windows.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <img
            className="d-block w-100"
            src={p2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>ASSASSINS CREED UNITY</h3>
            <p>Assassin's Creed Unity is an action-adventure video game developed by Ubisoft Montreal and published by Ubisoft. It was released in November 2014 for Microsoft Windows, PlayStation 4 and Xbox One, and in December 2020 for Stadia</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1300}>
          <img
            className="d-block w-100"
            src={p3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>ASSASSINS CREED ROUGE</h3>
            <p>Assassin's Creed Rogue is an action-adventure video game developed by Ubisoft Sofia and published by Ubisoft. It is the seventh major installment in the Assassin's Creed series, and is set between 2013's Assassin's Creed IV: Black Flag and 2012's Assassin's Creed III</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>





    );
  }
}

export default SlideShow;
