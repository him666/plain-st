import React, {Component} from 'react'
import {Container, Col, Row} from 'reactstrap';

export default class About extends Component {
  render() {
    return (
      <div>

        <Container>
         
            <div className="text-center">
              <h1>Who are we?</h1>
            </div>
          
          <Row>

            <Col xs="6" sm="4">
              <h1>Underground Music Oriented Platform</h1>
            </Col>
            <Col xs="6" sm="4">
              <h1>Music, not Business.</h1>
            </Col>
            <Col xs="6" sm="4">
              <h1>Jumpstart the best underground bands from everywhere!.</h1>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
