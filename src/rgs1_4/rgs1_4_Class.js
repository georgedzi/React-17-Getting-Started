import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClickFunction}>
          +1
        </button>
      </div>
    );
  }
}

class Display extends Component {
  render() {
    console.log(this.props);
    return (
      <div>{this.props.message}</div>
    )
  }
}

class Rgs1_4_Class extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 64 };
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <Button onClickFunction={this.incrementCounter} />
        <Display message={this.state.counter} />
      </div>
    );
  }
}

export default Rgs1_4_Class;