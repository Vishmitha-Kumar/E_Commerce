import React,{useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Collapse,  CardBody, Card } from 'reactstrap';
import { ListGroup, ListGroupItem,Badge } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
  Navbar,

  NavbarToggler,

  NavbarBrand,

  Nav,

  NavItem,

  NavLink, Pagination, PaginationItem, PaginationLink,

  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,

  DropdownMenu,

  DropdownItem,

  NavbarText

} from 'reactstrap';

const Navb = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const buttonLabel='Login';

  const [modal, setModal] = useState(false);

 

  const togglemodel = () => setModal(!modal);

  return (
    <div>
      <Navbar style={{ backgroundColor: '#003200' }} expand="md">
        <NavbarBrand href="/" style={{color:'white',fontFamily:"initial",fontSize:'30px',fontWeight:'bolder'}}>Clovers</NavbarBrand>
        <NavbarToggler onClick={toggle} style={{color:'white'}}/>
        <Collapse isOpen={isOpen} style={{color:'white'}} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem >
              <NavLink href=""style={{color:'white',fontFamily:"initial",fontSize:'20px'}}>Deals</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{color:'white',fontFamily:"initial",fontSize:'20px'}}>
                Food
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Vegetables
                </DropdownItem>
                <DropdownItem>
                  Fruits
                </DropdownItem>
                <DropdownItem>
                  Bakery
                </DropdownItem>
                <DropdownItem>
                  Fish&Meats
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar >
              <DropdownToggle nav caret style={{color:'white',fontFamily:"initial",fontSize:'20px'}}>
                Beverages
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Tea
                </DropdownItem>
                <DropdownItem>
                  Coffe
                </DropdownItem>
                <DropdownItem>
                  Soft Drinks
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar >
              <DropdownToggle nav caret style={{color:'white',fontFamily:"initial",fontSize:'20px'}}>
                Household
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Home&Kitchen
                </DropdownItem>
                <DropdownItem>
                  Cleaning Supplies
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{color:'white',fontFamily:"initial",fontSize:'20px'}}>
                Personal Care
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Personal Hygiene
                </DropdownItem>
                <DropdownItem>
                  Babies
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/components/" style={{color:'white',fontFamily:"initial",fontSize:'20px'}}>Most Popular</NavLink>
            </NavItem>
          </Nav>
    
        </Collapse>
        <Button color="primary" onClick={togglemodel}>{buttonLabel}</Button>

<Modal isOpen={modal} toggle={togglemodel}>

  <ModalHeader style={{paddingLeft:'45%',fontStyle:"inherit",fontWeight:"bolder",fontSize:"30px"}}>Login</ModalHeader>

  
  <Form>
      <FormGroup row>
        <Row>
        <Col md={6}>
        <img src="https://cityfurnish.com/blog/wp-content/uploads/2023/08/healthy-positive-happy-woman-holding-paper-shopping-bag-full-fruit-vegetables-min-1200x900.jpg" style={{width:'100%',borderRadius:'20px'}}></img>
        </Col>
        <Col md={6}>
        <Label for="exampleEmail">Mobile Number</Label>
          <Input type="number" name="number" id="exampleEmail" placeholder="Enter Mobile Number" required/>
        <Label for="examplePassword" >Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Enter Password" required/>
        </Col>
        </Row>
      </FormGroup>
</Form>
  <ModalFooter>

    <Button color="primary" onClick={toggle} style={{width:'100%',borderRadius:'20px'}}>Login</Button>{' '}

  </ModalFooter>

</Modal>

      </Navbar>
    </div>
  );
}

export default Navb;
