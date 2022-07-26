import React, { Component } from 'react';
import {
  Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  FormGroup, Input, Label, Breadcrumb, BreadcrumbItem,
  Row, Col
} from 'reactstrap';
import { Control, Form, Errors, actions } from 'react-redux-form';

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
  handleCommentFormSubmit(values) {
    this.props.addComment(this.props.dishId, values.rating, values.author, values.comment)
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values));
    // this.props.resetFeedbackForm();
    // event.preventDefault();
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
          <Form model="feedback" onSubmit={(values) => this.handleCommentFormSubmit(values)}>

              {/* rating */}
              <Row className="form-group">
                <Label htmlFor="rating" md={12} >Rating</Label>
                <Col md={12}>
                  <Control.select model=".rating"
                    className="form-control"
                    name="rating"
                    id="rating"
                    validators={{
                      required
                    }}
                  >
                    <option>Please Select</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      required: 'Required',
                    }}
                  />
                </Col>
              </Row>


              {/* author */}
              <Row className="form-group">
                <Label htmlFor="author" md={12}> Your Name </Label>
                <Col md={12}>
                  <Control.text model=".author" id="author" name="author"
                    placeholder="First Name"
                    className="form-control"
                    validators={{
                      required, minLength: minLength(3), maxLength: maxLength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      required: 'Required',
                      minLength: 'Must be greater than 2 characters',
                      maxLength: 'Must be 15 characters or less'
                    }}
                  />
                </Col>
              </Row>
              {/* comment */}
              <Row className="form-group">
                <Label htmlFor="comment" md={12}>Comment</Label>
                <Col md={12}>
                  <Control.textarea model=".comment" id="comment" name="comment"
                    rows="6"
                    className="form-control"
                    validators={{
                      required
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      required: 'Required',
                    }}
                  />
                </Col>

              </Row>

              {/* submit button */}
              <Row className="form-group">
                <Col>
                  <Button type="submit" color="primary" style={{marginTop:10}}>
                    Submit
                  </Button>
                </Col>
              </Row>
              </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
