import React from 'react'
import {Col, Row} from 'reactstrap';


const Event = ({ props }) => (
    <Row>
	  <div className="Event">
		  <h4>{ props.attributes.title }</h4> { /*This is a example text*/ }
              <p>{ `${props.attributes.content}` }</p>
		
	  </div>
    </Row>
)

export default Event