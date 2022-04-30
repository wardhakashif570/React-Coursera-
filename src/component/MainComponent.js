// import "./styles.css";
import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Menu from './MenuComponent'
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent ';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

const HomePage = () => {
    return (
        <Home
        />
    );
}
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId });
    // }

    render() {

        return (

            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" /> 
                    {/* default Route */}
                </Switch>
                <Footer />

            </div>

        );
    }
}
export default Main;
