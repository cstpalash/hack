import feeds from '../data/feeds';
import _ from 'lodash';
import NavigationService from '../services/NavigationService.js';

export const GET_POST_BEGIN = "GET_POST_BEGIN";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_FAILED = "GET_POST_FAILED";


export function getPostBegin(payload){
	return {
		type : GET_POST_BEGIN,
		payload : payload
	}
}

export function getPostSuccess(posts){
	return {
		type : GET_POST_SUCCESS,
		data : posts
	}
}

export function getPostFailed(error){
	return {
		type : GET_POST_FAILED,
		error : error
	}
}

export function getPost(payload) {
  return dispatch => {
    dispatch(getPostBegin(payload));
    return fakeGetPosts(payload)
      .then(json => {
        dispatch(getPostSuccess(json.posts));
        return json.posts;
      })
      .catch(error =>
        dispatch(getPostFailed(error))
      );
  };
}

function fakeGetPosts(payload) {
  return new Promise(resolve => {
    // Resolve after a timeout so we can see the loading indicator
    setTimeout(
      () =>
        resolve({
          posts : feeds
        }),
      1000
    );
  });
}