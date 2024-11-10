import React from 'react';
import Header from './components/header';
import Users from './components/users';

class Main extends React.Component {
  render() {
    return (<div>
      <Header title="List users"/>
      <main>
        <Users />
      </main>
    </div>)
  }

}
export default Main