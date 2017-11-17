import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import header from './assets/rsz_1header-logo.png'
import menuItems from './assets/menuData.json'
import {Image, NavDropdown, DropdownButton, MenuItem} from 'react-bootstrap'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col
} from 'reactstrap';


class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }
  //   render() {     return (       <div className="App">         <header
  // className="App-header">           <img src={logo} className="App-logo"
  // alt="logo" />           <h1 className="App-title">Welcome to React</h1>
  //   </header>         <p className="App-intro">           To get started, edit
  // <code>src/App.js</code> and save to reload.         </p>       </div>     );
  //  }

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
              <Navbar light expand="md" className="navBar1">

                <NavbarBrand className="navbar-title" href="/"><h3 className= "navBar-title">NightMusic</h3></NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>

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

export default AppContainer;
