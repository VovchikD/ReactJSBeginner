import React from 'react';

class AddUser extends React.Component {
  userAdd = {}
  constructor(props) {
    super(props)
    this.state = {
      firstname: "",
      lastname: "",
      age: 0,
      isHappy: false
    }
  }
  render() {
    return (
      <form ref={(el) => this.myForm = el}>
        <input placeholder='First Name' onChange={(e) => this.setState({ firstname: e.target.value })} />
        <input placeholder='Last Name' onChange={(e) => this.setState({ lastname: e.target.value })} />
        <input placeholder='Age' onChange={(e) => this.setState({ age: e.target.value })} />
        <lable htmlFor='isHappy'>Are you Happy?</lable>
        <input type='checkbox' id='isHappy' onChange={(e) => this.setState({ isHappy: e.target.checked })} />
        <button type='button' onClick={() => {
          this.myForm.reset()
          this.userAdd = {
              firstname: this.state.firstname,
              lastname: this.state.lastname,
              age: this.state.age,
              isHappy: this.state.isHappy
          }
          if(this.props.user)
            this.userAdd.id = this.props.user.id
            this.props.onAdd(this.userAdd)}}>Continue</button>
      </form>
    )
  }
}

export default AddUser