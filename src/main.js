import React from 'react';
import Header from './components/header';
import Image from './components/image';
import logo from './img/icone_user.svg'

class Main extends React.Component {
  helpText = "Write text!!!"
  render() {
    return (<div className="name">
      <Header title="Header Project"/>
      <h1>{this.helpText}</h1>
      <input placeholder={this.helpText} onClick={this.inputClick} onMouseEnter={this.overMouse} />
      <Image image={logo}/>
    </div>)
  }

  inputClick() {console.log("Clicked!")}
  overMouse() {console.log("Mouse Over!")}
}
export default Main