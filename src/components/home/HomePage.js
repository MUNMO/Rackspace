import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div>
        <div className="jumbotron">
          <h1>Home Page</h1>
          
          <Link to="table" className="btn btn-primary btn-lg">Click to Fetch Data</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;