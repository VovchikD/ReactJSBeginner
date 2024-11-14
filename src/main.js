import React from 'react';
import Header from './components/header';
import Users from './components/users';
import AddUser from './components/addUser';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          id: 1,
          firstname: 'John',
          lastname: 'Heors',
          age: 23,
          isHappy: true
        },
        {
          id: 2,
          firstname: 'Alex',
          lastname: 'Yans',
          age: 45,
          isHappy: false
        },
        {
          id: 3,
          firstname: 'Bob',
          lastname: 'Doe',
          age: 18,
          isHappy: true
        }
      ]
    }
    this.addUser = this.addUser.bind(this)
    this.editUser = this.editUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
  }

  render() {
    return (<div>
      <Header title="List users"/>
      <main>
        <Users  users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser}/>
      </main>
      <aside>
        <AddUser onAdd={this.addUser}/>
      </aside>
    </div>)
  }
  deleteUser(id){
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })
  }
  editUser(user) {
    let allUsers = this.state.users
    allUsers[user.id - 1] = user

    this.setState({users: []}, () => {
      this.setState({ users: [...allUsers] })
    })
  }
  addUser(user) {
    const id = this.state.users.length + 1
    this.setState({ users: [...this.state.users, {id, ...user}] })

  }
}
export default Main