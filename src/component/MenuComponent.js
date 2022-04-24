import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    {/* <Card onClick={() => this.props.onClick(dish.id)} style={{ display: 'flex' }}> */}
                    <Card key={dish.id}
                        onClick={() => this.props.onClick(dish.id)} style={{ display: 'flex' }}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />

                        <CardImgOverlay body className="ml-5" style={{ marginLeft: 35 }}>
                            <CardTitle heading>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            
            </div>
        );
    }
}

export default Menu;