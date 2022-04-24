// import "./styles.css";
import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Menu from './MenuComponent'
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent ';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
      }
    
      onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
    }

    render() {

        return (
            <div className="App">
                <Navbar className="bg-primary">
                    <div className="container  ">
                        <NavbarBrand href="/" style={{ color: 'white' }}>Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
               
                {/* <DishdetailCopmonent dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </div>

        );
    }
}
export default Main;
