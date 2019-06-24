import React from "react";
import { connect } from "react-redux";

import { fetchAllUsers } from "../store/actions/users_actions";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }
  render() {
    console.log("this.props___", this.props);
    return <div />;
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  fetchAllUsers: () => {
    dispatch(fetchAllUsers());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
