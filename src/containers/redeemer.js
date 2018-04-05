import React, { Component } from 'react'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import { getSong } from "../actions";
import songlist from '../assets/songlist.json'
import  Header  from '../components/header'


class Redeemer extends Component {
constructor(props) {
  super(props)
  this.state = {
    
  }
}


handleCodeChange = (e) => {
  if (e.target.value.length === 15) {
    //check if code is valid
    console.log(e.target.value)
    if(songlist.codes[e.target.value]!= undefined){

      console.log(songlist.codes[e.target.value])

      this.props.getSong(songlist.codes[e.target.value])
      this.setState({content: "valid code..."})
    } else {
    this.setState({content: "sorry not a valid code..."})
    }
  }
}
  render() {
    return (
    <div>  
       <Header />
      <div>
      <Container>
          <Row>
            <Col xs="12" md="12">
            <div className="text-center">
                <h1>Claim your Music now!</h1>
                <p> {JSON.stringify(songlist)} </p>
                <input maxLength={15} placeholder= "insert Code"  value={this.state.code} type="text" size={35} onChange={this.handleCodeChange}/>
                <h1>{this.state.content}</h1>
                {
                  this.props.song.length > 0  ? 
                  this.props.song.map((song) => {
                    return (
                     <div>
                       <Container>
                         <Row key={song.id}>
                        
                          
                        
                          <br/>
                        
                         </Row>
                       </Container>
                     </div>
                    )
                   }) : <p></p>
                  }
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    song: state.song
  };
}

export default withRouter(connect(mapStateToProps, { getSong })(Redeemer));