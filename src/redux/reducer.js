//now here we are creating the state inside the reducer, hence we move everythig inside the reducer.
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { DISHES } from '../shared/dishes';

//WEEK 3.3
/*
//we have movef this from maincomponent, as we have to move the entire state to this file
export const initialState = {
    dishes : DISHES,
    comments : COMMENTS,
    promotions : PROMOTIONS,
    leaders : LEADERS
};

//the purpose of the reducer function is to take input of an action and previous state and give output the next state, without making any change to
//previous ie recieved state.
//when the reducer is called initially ie at the start of the aplication, then we need to pass some state and initially we dont have any, therefor
//we give the variable state a default value so that in the first call to the reducer function we pass the initial state of the store.
export const Reducer = (state = initialState, action) => {
    return state;
};
*/

//WEEK 4.1, splitting reducers to different small functions to deal with different part of the state.

//now this file is  no more used as the reducers will be divided to different parts, for different parts of the state.
//and hence now we use the files : comments,leaders,dishes,promotions in place of this file.