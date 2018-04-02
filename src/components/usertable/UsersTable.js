import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { callAPI } from "../../actions/userListActions";
import Loader from '../common/Loader';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class UsersTable extends Component{
    /* Constructor - Bind / Initial  */
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(callAPI());
    }

    render() {
        const { userList } = this.props;
        return(
            <div>
                <h1> Loading data from API </h1>
                <BootstrapTable ref="table" data={userList}>
                    <TableHeaderColumn dataField="userId" isKey dataSort>User ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="id" dataSort>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="title" dataSort>Last Name</TableHeaderColumn>
                </BootstrapTable>
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
