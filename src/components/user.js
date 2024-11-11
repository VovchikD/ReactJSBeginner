import React from 'react';
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'

class User extends React.Component {
  user = this.props.user
  render() {
    return (
      <div className="user">
        <IoCloseCircleSharp className="delete-icon"/>
        <IoHammerSharp className="edit-icon"/>
        <h3>{this.user.firstname} {this.user.lastname}</h3>
        <h5>{this.user.age}</h5>
        <b>{this.user.isHappy ? 'He is happy ;)' : 'He does not happy :('}</b>
      </div>
    )
  }
}

export default User