import leaders from '../data/leaders';
import _ from 'lodash';
import NavigationService from '../services/NavigationService.js';

export const GET_LEADER_BEGIN = "GET_LEADER_BEGIN";
export const GET_LEADER_SUCCESS = "GET_LEADER_SUCCESS";
export const GET_LEADER_FAILED = "GET_LEADER_FAILED";


export function getLeaderBegin(payload){
	return {
		type : GET_LEADER_BEGIN,
		payload : payload
	}
}

export function getLeaderSuccess(leaders){
	return {
		type : GET_LEADER_SUCCESS,
		data : leaders
	}
}

export function getLeaderFailed(error){
	return {
		type : GET_LEADER_FAILED,
		error : error
	}
}

export function getLeader(payload) {
  return dispatch => {
    dispatch(getLeaderBegin(payload));
    return fakeGetLeader(payload)
      .then(json => {
        dispatch(getLeaderSuccess(json.leaders));
        return json.leaders;
      })
      .catch(error =>
        dispatch(getLeaderFailed(error))
      );
  };
}

function fakeGetLeader(payload) {
  return new Promise(resolve => {
    // Resolve after a timeout so we can see the loading indicator
    setTimeout(
      () =>
        resolve({
          leaders : leaders
        }),
      1000
    );
  });
}