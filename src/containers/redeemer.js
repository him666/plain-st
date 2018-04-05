import React, { Component } from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import  Header  from '../components/header'
/**
|--------------------------------------------------
| keep in mind that:
| each col should be a stateless component dude!
|--------------------------------------------------
*/
export default class Redeemer extends Component {
constructor(props) {
  super(props)
  this.state = {
    
  }
}


handleCodeChange = (e) => {
  if (e.target.value.length === 15) {
    //check if code is valid
    console.log(e.target.value)
    this.setState({content: "sorry not a valid code..."})
  }
}
  render() {
    return (
    <div>  
       <Header />
      <div>
      <Container>
          <Row>
           <Col sm="2" md={{ size: 12, offset: 2 }}>
            <div className="text-center">
                <h1>Claim your Music now!</h1>
                <input maxLength={15} placeholder= "insert Code"  value={this.state.code} type="text" size={35} onChange={this.handleCodeChange}/>
                <h1>{this.state.content}</h1>
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    )
  }
}
