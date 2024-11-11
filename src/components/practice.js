import { Component } from "react";

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 28,
      position: ''
    };
  }

  changeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  commitInputChanges = (e) => {
    this.setState({
      position: e.target.value
    });
  }

  render() {
    const {name, age, position} = this.state;
    return (
      <div>
        <h1>My name is {name}, age - {age}, position - {position}</h1>
        <input type="text" onChange={this.changeName} />
        <button onClick={this.changeAgeValue}>Click</button>
        <form >
          <span>Введите должность</span>
          <input type="text" onChange={this.commitInputChanges} />
        </form>
      </div>
    );
  }
}

export default WhoAmI;