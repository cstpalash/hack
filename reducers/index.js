import { combineReducers } from 'redux';

import { GET_USER_BEGIN, GET_USER_SUCCESS, GET_USER_FAILED } from "../actions/userAction";

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
 
// Combine all the reducers
export default combineReducers({
    currentUser : userReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})