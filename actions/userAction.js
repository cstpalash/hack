import users from '../data/users';
import _ from 'lodash';
import NavigationService from '../services/NavigationService.js';

export const GET_USER_BEGIN = "GET_USER_BEGIN";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export function getUserBegin(payload){
	return {
		type : GET_USER_BEGIN,
		payload : payload
	}
}

export function getUserSuccess(user){
	return {
		type : GET_USER_SUCCESS,
		data : user
	}
}

export function getUserFailed(error){
	return {
		type : GET_USER_FAILED,
		error : error
	}
}

export function getUser(payload) {
  return dispatch => {
    dispatch(getUserBegin(payload));
    return fakeGetUser(payload)
      .then(json => {
        dispatch(getUserSuccess(json.user));
        dispatch(NavigationService.navigate('Home'));
        return json.user;
      })
      .catch(error =>
        dispatch(getUserFailed(error))
      );
  };
}

function fakeGetUser(payload) {
  return new Promise(resolve => {
    // Resolve after a timeout so we can see the loading indicator
    setTimeout(
      () =>
        resolve({
          user : _.find(users, (item) => item.email.toLowerCase() === payload.email.toLowerCase())
        }),
      1000
    );
  });
}