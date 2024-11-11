import React from 'react';
import Header from './components/header';
import Users from './components/users';
import AddUser from './components/addUser';

class Main extends React.Component {
  render() {
    return (<div>
      <Header title="List users"/>
      <main>
        <Users />
      </main>
      <aside>
        <AddUser />
      </aside>
    </div>)
  }

}
export default Main