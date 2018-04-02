import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { callAPI } from "../../actions/userListActions";
import Loader from '../common/Loader';

class UsersTable extends Component{
    /* Constructor - Bind / Initial  */
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(callAPI());
    }

    render() {
        return(
            <div>
                <h1> Loading data from API </h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.userList ? this.props.userList.map((user,i) => {
                                return(
                                    <tr key={i}>
                                        <td>{user.userId}</td>
                                        <td>{user.id}</td>
                                        <td>{user.title}</td>
                                    </tr>
                                );
                            })
                            :  <tr>
                                    <td style={{textAlign: "center"}} colSpan="3">
                                        <Loader />
                                    </td>
                                </tr>
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

/* propTypes */
UsersTable.propTypes = {
    dispatch: PropTypes.func.isRequired,
    actions: PropTypes.object,
    userList: PropTypes.array
};

/* Reduc connect and its related functions */
function mapStateToProps(state, ownProps) {
    return {
      userList: state.userList[0]
    };
}

export default connect(mapStateToProps)(UsersTable);
