import React, {Component} from 'react'
import {Container, Col, Row} from 'reactstrap';
import  Header  from '../components/header'
export default class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>  
          <Row>
            <Col xs="6" sm="4">
              <h3>Underground Music Oriented Platform</h3>
                <p>have a band? want to be heard by everyone but none of the bureaucracy?</p>
            </Col>
            <Col xs="6" sm="4">
              <h3>Music, not Business.</h3>
              <p> we care about Music, we want to be the "must be" place to start your band career to success</p>
            </Col>
            <Col xs="6" sm="4">
              <h3>Jumpstart the best underground bands from everywhere!.</h3>
              <p>Want to hear what's on the minds of real musicians, who doesnt have a totally plastic producer behind? this is the place!</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
