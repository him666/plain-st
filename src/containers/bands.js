import React, { Component } from 'react'
import {Container, Row, Col} from 'reactstrap'
import  Header  from '../components/header'
export default class Bands extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
          <Col sm="2" md={{ size: 12, offset: 2 }}>
            <div className="text-center">
               <h1> These Are Some of our Bands!</h1>
             </div>
           </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
