import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
          Users!
          <ul>
            {this.props.users.map((user) => <li>{user.username}</li>)}
          </ul>
          {this.props.numOfUsers}
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps(state) {
  return {users: state.users, numOfUsers: state.users.length}
}

export default connect(mapStateToProps)(Users)

