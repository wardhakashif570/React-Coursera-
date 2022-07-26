import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <Card>
             <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle heading>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }
    else {
        return <div></div>
    }
}
function RenderComments({comments, postComment, dishId,addComment}) {


    return (<div>
        <h4>Comments</h4>
        <ul class="list-group">
            {comments.map(item => {

                return (
                    <div >
                        <li class="list-group-item">{item.comment}</li>
                        <li class="list-group-item">-- {item.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(item.date)))}</li>

                    </div>
                )
            })}
        </ul>
        <CommentForm addComment={addComment}dishId={dishId} postComment={postComment} />
    </div>)

}
const DishDetail = (props) => {
    let a = props.addComment;
    debugger
    // console.log(dish.comments.comment)
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    {/* {this.props.postComment(this.props.dishId, values.rating, values.author, values.comment)} */}
                
                        <RenderComments comments={props.comments}
                            addComment={props.addComment}
                            dishId={props.dish.id}
                            postComment={props.postComment}
                            
                        />

                    </div>
                </div>
            </div>
        );
    }


}

export default DishDetail;


