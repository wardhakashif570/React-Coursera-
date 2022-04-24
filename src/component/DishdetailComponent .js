import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

export default class DishDetail extends Component {
    renderDish = (dish) => {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
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
    renderComments = (dish) => {

        return (<div>
            <h4>Comments</h4>
            <ul class="list-group">
                {dish.map(item => {
                    return (
                        <div >
                            <li class="list-group-item">{item.comment}</li>
                            <li class="list-group-item">-- {item.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(item.date)))}</li>

                        </div>
                    )
                })}
            </ul>
        </div>)

    }
    render() {

        const { dish } = this.props;
        // console.log(dish.comments.comment)
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-20">
                    {this.renderDish(dish)}
                </div>

                <div className="col-12 col-md-6 m-1">
                    {
                        dish != null ?
                            this.renderComments(dish.comments)
                            : <div></div>
                    }


                </div>

            </div>
        )
    }
}
