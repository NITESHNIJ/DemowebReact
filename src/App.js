import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar,NavbarBrand } from 'reactstrap';
//import Menu from './components/MenuComponent';
import Main from './components/MainComponent';
import './App.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
//import { DISHES } from './shared/dishes';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';


//Week 3.3

//here I have called for a store.
const store = ConfigureStore();


class App extends Component {


  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            < Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}


export default App;
