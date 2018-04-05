import React, { Component } from 'react'
import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";
import {Container, Col, Row} from 'reactstrap';

import { getEvents } from '../actions'

import  Header  from '../components/header'
import img1 from '../assets/worldwide.png'


class News extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    }
  }

  componentWillMount(){
    this.setState({ events: this.props.getEvents() })
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col xs="12" sm="4" md="4">
            </Col>
            <Col xs="12" sm="4" md="4">
              <div>
                 <img src={img1} alt="news" className="imageus"/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
   events: state.events
  }
}

export default withRouter(connect(mapStateToProps, {getEvents})(News)); 