import React from 'react';
import User from './user';

class Users extends React.Component {
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
  }

  render() {
    if(this.state.users.length > 0)
      return (
        <div>
          {this.state.users.map((el) => (
            <User key={el.id} user={el}/>
          ))}
        </div>
      )
    else 
      return (
        <div className='user'>
          <h3>List Empty!</h3>
        </div>
      )
  }
}

export default Users