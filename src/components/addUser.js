import React from 'react';

class AddUser extends React.Component {
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
      <form>
        <input placeholder='First Name' onChange={(e) => this.setState({ firstname: e.target.value })} />
        <input placeholder='Last Name' onChange={(e) => this.setState({ lastname: e.target.value })} />
        <input placeholder='Age' onChange={(e) => this.setState({ age: e.target.value })} />
        <lable htmlFor='isHappy'>Are you Happy?</lable>
        <input type='checkbox' id='isHappy' onChange={(e) => this.setState({ isHappy: e.target.checked })} />
        <button type='button' onClick={() => this.props.onAdd({
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          age: this.state.age,
          isHappy: this.state.isHappy
        })}>Continue</button>
      </form>
    )
  }
}

export default AddUser