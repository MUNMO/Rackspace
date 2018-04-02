import Request from 'superagent';
import * as types from './actionTypes';

export function fetchRequest(){
	return {
		type: types.FETCH_REQUEST
	};
}
  
export function fetchSuccess(usertabledata) {
	return {
		type: types.FETCH_SUCCESS,
		usertabledata
	};
}
  
export function fetchError() {
	return {
		type: types.FETCH_ERROR
	};
}

// Handle HTTP errors since fetch won't.
export function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}