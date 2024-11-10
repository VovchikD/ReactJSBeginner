import React from 'react';

class Users extends React.Component {
  users = [
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

  render() {
    if(this.users.length > 0)
      return (
        <div>
          {this.users.map((el) => (<div className="user" key={el.id}>
            <h3>{el.firstname} {el.lastname}</h3>
            <h5>{el.age}</h5>
            <b>{el.isHappy ? 'He is happy ;)' : 'He does not happy :('}</b>
            </div>))}
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