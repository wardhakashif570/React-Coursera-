import React, { Component } from 'react';
import {
  Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label, Breadcrumb, BreadcrumbItem,
  Row, Col
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

export default class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      touched: {
        name: false,

      }
    };
    this.RenderComments = this.RenderComments.bind(this);
  }
  RenderComments() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
  validate(name) {
    const errors = {
      name: '',

    };

    if (this.state.touched.name && name.length < 3)
      errors.name = 'First Name should be >= 3 characters';
    else if (this.state.touched.name && name.name > 10)
      errors.name = 'First Name should be <= 15 characters';

    return errors;
  }
  render() {
    const errors = this.validate(this.state.name);
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);

    return (
      <div>
        <Button outline onClick={this.RenderComments} style={{ marginTop: 10 }}><span className="fa fas fa-edit"></span> Submit Comment</Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.RenderComments}>
          <ModalHeader toggle={this.RenderComments}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label for="Rating">Rating</Label>
                <Input style={{ width: 465, marginLeft: 10, marginBottom: 10 }} type="select" name="select" id="exampleSelect" innerRef={(input) => this.Rating = input}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </Row>
              <Row className="form-group">
                <Label htmlFor="name" style={{ display: 'block' }}>Your Name</Label>
                <Col >
                  <Control.text model=".name" id="name" name="name"
                    placeholder="Name"
                    className="form-control"
                    style={{ display: 'block' }}
                    validators={{
                      required, minLength: minLength(3), maxLength: maxLength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      required: 'Required',
                      minLength: 'Must be greater than 2 characters',
                      maxLength: 'Must be 15 characters or less'
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="message" >Comments</Label>
                <Col >
                  <Control.textarea model=".message" id="message" name="message"
                    rows="6"
                    className="form-control" />
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Button style={{ marginTop: 10 }}
                    type="submit" value="submit" color="primary">Submit</Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
