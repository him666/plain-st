import React from 'react'
import {Col, Row} from 'reactstrap';


const Event = ({ props }) => (
    <div>
      <Row key={props.id}>
         <h1 className="title">{props.attributes.title} </h1>
         <p className= "description"> Descripcion: {props.attributes.content}</p>
         <img src={props.attributes.header} className="banner"/>
      </Row>
  </div>
)

export default Event