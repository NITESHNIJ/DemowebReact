

import React, { Component } from 'react';
import { Media } from 'reactstrap';

import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
        Button, Modal, ModalHeader, ModalBody,
        Form, FormGroup, Input, Label } from 'reactstrap';

import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { Control, LocalForm, Errors, controls } from 'react-redux-form';
import { Col, FormFeedback, Row } from 'reactstrap';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

    constructor(props){
        super(props);
        this.state = {
          isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        this.props.addComment(this.props.dishId,values.firstname,values.yourname,values.email);
    }

    render() {
        return(
        <React.Fragment>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                </NavItem>
            </Nav>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row><Label htmlFor="firstname" md={6}>Rating</Label> </Row>
                        <Row className="form-group">
                                <Col md={10}>
                                    <Control.select model=".firstname" id="firstname" name="firstname"
                                        className="form-control">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row><Label htmlFor="yourname" md={6}>Your Name</Label></Row>
                            <Row className="form-group">
                                <Col md={10}>
                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".yourname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            
                            <Row><Label htmlFor="email" md={6}>Comment</Label></Row>
                            <Row className="form-group">
                                
                                <Col md={10}>
                                    <Control.textarea model=".email" id="email" name="email" rows="12"
                                        className="form-control"/>
                                    
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 0}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
            </Modal>
        </React.Fragment>
        );
    }
}

function RenderComments({comments,addComment,dishId}){
    if(comments!=null){
        const comments_list = comments.map((single_comment) => {
            var d = new Date(single_comment.date);
            var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
            return (
                <ul className = "list-unstyled">
                    <li>{single_comment.comment}</li>
                    <br />
                    <li>--{single_comment.author}, {monthNames[d.getMonth()]} {d.getDate()}, {d.getFullYear()}</li>
                </ul>
            );
        });
        return (
            <React.Fragment>
            {comments_list}
            <CommentForm dishId={dishId} addComment={addComment}/>
            </React.Fragment>
        );
    }
    else{
        return(
            <div></div>
        );
    }
}



function Dishdetail(props) {
        if(props.dish!=null){
            return(
                <div class="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/menu">Menu</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={props.dish.image} alt={props.dish.name} />
                                <CardBody>
                                <CardTitle>{props.dish.name}</CardTitle>
                                <CardText>{props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div  className="col-12 col-md-5 m-1">
                            <div>
                                <h4>Comments</h4>
                                <RenderComments comments={props.comments} 
                                addComment={props.addComment}
                                dishId={props.dish.id}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }    
    }




export default Dishdetail;