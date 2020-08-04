import React, { Component } from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutusComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {addComment} from '../redux/ActionCreators';
/*
//WEEK 3.3

//this mainComponent now need to get its state from react-redux store , as it does not have any information by itself.
//we can connect the component from the store as we have provided the 'Provider' tag in the App component to the main component.
//and from the provider tag we have sent the state , but it cannot directly come into the props of the main component as as we did not put the state
//in the main component tags, we put the state in a covering tag ie Provider tag.
//hence for main component to recieve the state as the props, we need to externally do this, and we do it by using the function : mapStateToProps()
//ie in this function we recieve the state value which contains the state of the redux store, and this state is then opened inside this function
//and for making that value to go to the main component in form of props, at the bottom while exporting the main component we enclose the 
//Main in the conect function.

const mapStateToProps = state => {
  return{
    dishes : state.dishes,
    comments : state.comments,
    promotions : state.promotions,
    leaders : state.leaders
  }

}

//now inside the main component, whatever we have sent from the function 'mapStateToProps', we get in the component as props.
class Main extends Component {

  constructor(props){
    super(props);
  }

  render(){

    const HomePage = () => {
      return(
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]} 
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }


    const DishWithId = ({match}) => {
      return(
        <Dishdetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    }
//we have stated 'exact path="/menu"'  before 'path="/menu/:dishId"' , which makes sure that if we have just /menu
//in the url so the exact route runs and then it does not see the next option. and if we have the Id as well in the
//URL ,then automatically the second one runs.

    return (
      <div className="App">
        <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/contactus" component={Contact} />
            <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
            <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

//we use the withrouter function ass we are using the router in the main component.
export default withRouter(connect(mapStateToProps)(Main));
*/

//WEEK 4.2

const mapStateToProps = state => {
  return{
    dishes : state.dishes,
    comments : state.comments,
    promotions : state.promotions,
    leaders : state.leaders
  }
}

//this function gets as input an inbuilt function named 'dispatch', this function is the dispatcher and it takes in an action as input and
//sends it to the reducer, ie it passes the action into all the reducers.
//the action which we are trying to create is made by the actionCreator 'addComment', and to make this action , we need to pass 4 values to the
//'addComments' function. we will get the value when we submit the form, and the form is present in the dishDetail component, so we some how have
//to send the function to that component.
//so we make a property inside this object named as 'addComment' which holds a function, this held function is responsible to create the 
//action and send it to the dispatcher, which sends the action to the reducer.
//we expect the addComment property function to recieve 4 value, and these very 4 values are needed to make the action.
//now this property function is what we send to different components.
//and this function 'mapDispatchToProps', whatever we make inside this function will be passed as a parameter in the props varaible for the 
//main component as we have mentioned so at the bottom while exporting the component.
const mapDispatchToProps = (dispatch) => ({
  addComment : (dishId, author, rating, comment) => dispatch(addComment(dishId, author, rating, comment))
});

class Main extends Component {

  constructor(props){
    super(props);
  }

  render(){

    const HomePage = () => {
      return(
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]} 
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }


    const DishWithId = ({match}) => {
      return(
        <Dishdetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
        addComment = {this.props.addComment}/>
      );
    }

    return (
      <div className="App">
        <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/contactus" component={Contact} />
            <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
            <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

//we use the with router function as we are using the router in the main component.
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));