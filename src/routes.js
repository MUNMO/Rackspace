import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import UsersTable from './components/usertable/UsersTable';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="table" component={UsersTable} />
	</Route>
);