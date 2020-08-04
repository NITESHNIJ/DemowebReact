//this file content need not nessasarily made in a separate file , it could have even been a part of reducer.js file.

//WEEK 3.3
/*
import { createStore } from 'redux';
import { initialState, Reducer } from './reducer';

//this function creates a store and returns it.
export const ConfigureStore = () => {
    //this is the function which creates a store. It takes in 2 parameters .) reducer and the .)initial-state
    const store = createStore(
        Reducer,
        initialState
    );
    return store;
};
*/

//WEEK 4.1

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishes';
import { Promotions } from './promotions';
import { Comments } from './comments';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//now we create the store by combinig reducers , and we combine them with the help of an inbuilt function.
//we do not give the initial state in here now, but we rather give the default value to all the reducers while defining them.

//NOTE : REMEMBER THAT WHEN WE ARE MAKING THE REDUCER BY INTEGRATING THE DIFFERENT SMALL REDUCERS, IN EACH REDUCER
//  	 WE GIVE THE STATE VARAIBLE A DEFAULT VALUE, WHICH IS THE VALUE OF THE FILE IMPORTED. BUT DO NOT THINK THAT
//       EVERY TIME WE RUN THE REDUCER, BY THE DISPATCHER, THE REDUCER WILL TAKE THE DEFAULT VALUE, 
//       AS FROM THE SECOND TIME ITSELF, THE REDUCER WILL TAKE THE PREVIOUSLY RETURNED STATE AS THE VALUE OF THE STATE 
//       VARIABLE. IE INITIALLY WHEN WE RUN THE APPLICATION, THE REDUCERS TAKE THE GIVEN DEFAULT VALUE FOR THE STATE
//       , MAKE MODIFICATIONS AND RETURN IT, BUT NOW WHEN WE DISPATCH AN ACTION THEN THE REDUCER TAKE THE STATE VALUE AS
//       THE ONE WHICH IT RETURNED THE LAST TIME WHEN IT WAS RUN, IE THE CURRENT STATE IS TAKEN AS INPUT(NOT THE DEFAULT VALUE)
//       AND CHANGES ARE MADE TO IT AS PER THE ACTION. AND NOW NEXT TIME THIS ALTERED STATE BECOMES THE INITIAL STATE.


//here all the sub-reducers ,ie Dishes,Leader,etc , return different part of the state ie for all of them state is a different part and they
//all retun the updated version of their part of the state, so here we combine the return value of all of the sub-reducers, and make the 
//combined state. This combined state is the integrated version of all the states, so we make the combined state as an object which has properties
//whose value is equal to the individual sub-state,  ie here 'dishes' property holds the sub-state returned by 'Dishes' sub-reducer
//, the 'leader' propery holds the sub-state returned by 'Leaders' sub-reducer.
//so in the final state which we send to the main component, there we can retrieve the values of these sub-states by the use of these property names.

//Therefor in the main component in the MapStateToProps function , we get the dishes by mentioning : 'state.dishes',  this dishes is the
//name of the property here.
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes : Dishes,
            leaders : Leaders,
            promotions : Promotions,
            comments : Comments
        })
    );
    return store;
};