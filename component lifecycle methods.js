import React, { Component } from "react";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor : component is being initializes");
  }

  componentDidMount() {
    console.log("componentDidMount : component mounted");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate: Deciding whether to re-render");
    return true
  }

  componentDidUpdate(){
    console.log("componentDidUpdate: Component updated");
    
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Component is about to be removed");
  }


  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Render: Updating the UI");
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increase</button>
      </div>
    );
  }
}

export default App;


