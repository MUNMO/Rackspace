import * as types from './actionTypes';
import { fetchRequest, fetchSuccess, fetchError, handleErrors } from './fetch';

export function callAPI() {
	return dispatch => {
		dispatch(fetchRequest());
		return fetch(types.URL)
			.then(handleErrors)
			.then(res => res.json())
			.then(json => {
				dispatch(fetchSuccess(json));
				return json;
			})
			.catch(error => dispatch(fetchError(error)));
	};
}