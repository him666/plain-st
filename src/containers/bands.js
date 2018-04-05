import React, { Component } from 'react'
import {Container, Row, Col} from 'reactstrap'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import  Header  from '../components/header'

import { getBands } from "../actions"
class Bands extends Component {
  componentWillMount(){
    this.props.getBands()
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
          <Col xs="12" md="12">
            <div className="text-center">{
              this.props.bands.length > 0 ? 
               this.props.bands.map((bnd) => {
                return (
                 <div>
                   <Container>
                     <Row key={bnd.id}>
                      <h1 className="title">{bnd.attributes.name} </h1>
                      <br/>
                    
                      <p className= "description"> Biografía: {bnd.attributes.biography}</p>
                      <br/>
                      <p className= "description"> Descripcion: {bnd.attributes.description}</p>
                      <br/>
                    
                      <h3 className= "description"> Sitio Web: {bnd.attributes.site}</h3>
                      <br/>
                      <img src={bnd.attributes.logo} className="logo"/>
                      <br/>
                    
                     </Row>
                   </Container>
                 </div>
                )
               })
               : 
               <h1> No bands yet </h1>
            }
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
    bands: state.bands
  };
}

export default withRouter(connect(mapStateToProps, { getBands })(Bands));
