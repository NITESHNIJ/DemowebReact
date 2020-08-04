
//WEEK 4.1
import * as ActionTypes from './ActionTypes';

//when we give the format of the arrow function as  fn-name => ({...}) , these paranthesis mean that the function will return every thing which 
//is stated inside the paranthesis, therefor here we are returning an object.

//this function is an action creator, ie  this function is used to create an action, and we specifically make this function to create action which
//is specifically used to alter the comments in the store.
//ie now whenever we will need an action to alter the comments in the store, we will always use this function to create the action for it.

export const addComment = (dishId, rating, author, comment) => ({
    type : ActionTypes.ADD_COMMENT,
    payload : {
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
});
