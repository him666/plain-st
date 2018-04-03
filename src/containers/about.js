import React, {Component} from 'react'
import {Container, Col, Row} from 'reactstrap';
import  Header  from '../components/header';
import musocial from '../assets/music-social-group.png';
import munotes from '../assets/musical-notes.png';
import mubuss from '../assets/handshake.png';

export default class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col xs="12" sm="4" md="4">
              
                <img src={mubuss} alt="mubuss" className="imageus"/>
                  <h3>Underground Music Oriented Platform</h3>
                    <p>have a band? want to be heard by everyone but none of the bureaucracy?</p>
              
            </Col>
            <Col xs="12" sm="4" md="4">
              
                <img src={munotes} alt="munotes" className="imageus"/>
                <h3>Music, not Business.</h3>
                <p> we care about Music, we want to be the "must be" place to start your band career to success</p>
              
            </Col>
            <Col xs="12" sm="4" md="4">
              
                <img src={musocial} alt="musocial" className="imageus"/>
                <h3>Jumpstart the best underground bands from everywhere!.</h3>
                <p>Want to hear what's on the minds of real musicians, who doesnt have a totally plastic producer behind? this is the place!</p>
              
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
