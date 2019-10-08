import { combineReducers } from 'redux';

import { GET_USER_BEGIN, GET_USER_SUCCESS, GET_USER_FAILED } from "../actions/userAction";
import { GET_POST_BEGIN, GET_POST_SUCCESS, GET_POST_FAILED } from "../actions/postAction";

const initialStateUser = {
	processing : false,
	error: null,
	user: { email: "", name: "", country: "", city: "", profile: "", coins: ""}
};

const userReducer = (state = initialStateUser, action) => {
    switch (action.type) {
        case GET_USER_BEGIN:
            return {
		        ...state,
		        processing: true,
		        error: null
		    };
		case GET_USER_SUCCESS:
            return {
		        ...state,
		        processing: false,
		        user: action.data,
		        error: null
		    };
		case GET_USER_FAILED:
            return {
		        ...state,
		        processing: false,
		        error: action.error
		    };
        default:
            return state;
    }
};

const initialStatePosts = {
	processing : false,
	error: null,
	posts: []
};

const postReducer = (state = initialStatePosts, action) => {
    switch (action.type) {
        case GET_POST_BEGIN:
            return {
		        ...state,
		        processing: true,
		        error: null
		    };
		case GET_POST_SUCCESS:
            return {
		        ...state,
		        processing: false,
		        posts: action.data,
		        error: null
		    };
		case GET_USER_FAILED:
            return {
		        ...state,
		        processing: false,
		        error: action.error
		    };
        default:
            return state;
    }
};
 
// Combine all the reducers
export default combineReducers({
    currentUser : userReducer,
    posts : postReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})