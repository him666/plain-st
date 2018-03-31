import React, { Component } from 'react'
import '../App.css';
import header from '../assets/rsz_1header-logo.png'
import menuItems from '../assets/menuData.json'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Container,
  Row,
  Col
} from 'reactstrap';

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
          isOpen: false
        }
      }
    
    
    handleSelect = (selectedKey) => {
        alert(`selected ${selectedKey}`);
    }

    toggle = () => {
    
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

  render() {
    return (
        <div>
        <div className="header-container">
          <img src={header} alt="nightMusic-header" className="img-head"/>
        </div>

        <Container>
          <Row>
            <Col lg="12">
              <Navbar dark expand="md" className="navBar1">

                <NavbarBrand className="navbar-title" href="/">
                <h3 className= "navBar-title">NightMusic</h3>
                </NavbarBrand>
                <NavbarToggler   onClick={this.toggle}/>

                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="md" navbar>
                    {menuItems.map((item) => {
                      return <li key={item.text}>
                        <a href={item.url}>{item.text}</a>
                      </li>
                    })}
                  
                    </Nav>
                </Collapse>

              </Navbar>
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}
