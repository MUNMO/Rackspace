import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
	return(
		<nav className="navbar navbar-default navbar-inverse navbar-fixed-top">
			<div className="container-fluid">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#res-admin-app" aria-expanded="false">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar" />
						<span className="icon-bar" />
						<span className="icon-bar" />
					</button>
					<IndexLink to="/table" className="navbar-brand">Fetch API</IndexLink>
				</div>
				<div className="collapse navbar-collapse" id="res-admin-app">
					<ul className="nav navbar-nav">
					<li >
						<IndexLink to="/" activeClassName="active">Home</IndexLink>
					</li>
					<li>
						<Link to="/table" activeClassName="active">Table</Link>
					</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
