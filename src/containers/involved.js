import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap' 
import  Header  from '../components/header'
export default class Involved extends Component {
  render() {
    return (
      <div>
        <Header />
          <Container>
            <Row>
              <Col sm="2" md={{ size: 12, offset: 2 }}>
                <div className="text-center">
                  <h1>Get Your Band Involved!</h1>
                </div>
              </Col>
            </Row>
          </Container>
      </div>
    )
  }
}
