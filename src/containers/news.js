import React, { Component } from 'react'
import {Container, Col, Row} from 'reactstrap';
import  Header  from '../components/header'

export default class News extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
          <Col sm="2" md={{ size: 12, offset: 2 }}>
            <div className="text-center">
               <h1> find out what's going on </h1>
             </div>
           </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
