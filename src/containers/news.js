import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";

import { getEvents } from "../actions";

import Header from "../components/header";
import img1 from "../assets/worldwide.png";

class News extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }
  componentDidMount() {}

  componentWillMount() {
    this.props.getEvents();
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col xs="12" md="12">
             <h1> Próximos Eventos: </h1>
            </Col>
            <Col xs="12" md="12">
              <div>
                <Container>
                 {
                   this.props.events.length > 0 ? 
                      this.props.events.map((ev) => {
                       return (
                        <div>
                          <Row key={ev.id}>
                           <h1 className="title">{ev.attributes.title} </h1>
                           <p className= "description"> Descripcion: {ev.attributes.content}</p>
                           <img src={ev.attributes.header} className="banner"/>
                          </Row>
                        </div>
                       )
                      })
                    : 
                    <div>
                      <img src={img1} alt="news" className="imageus"/>
                      <h1> No news to Display </h1>
                    </div>
                 } </Container>
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
  };
}

export default withRouter(connect(mapStateToProps, { getEvents })(News));
