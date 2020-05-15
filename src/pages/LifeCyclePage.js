import React, { Component } from "react";

// if (ctc.componentWillMount) {
//   ctc.componentWillMount();
// }

export default class LifeCyclePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("constructor", this.state);
  }
  static getDerivedStateFromProps(props, state) {//componentWillMount+componentWillUpdate
    console.log("getDerivedStateFromProps", state);
    return state.counter < 6 ? null : { counter: 0 };
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {//更新前
    console.log("getSnapshotBeforeUpdate", prevState);
    return { ...prevState, omg: "omg" };
  }
  // UNSAFE_componentWillMount() {
  //   console.log("componentWillMount", this.state);
  // }
  componentDidMount() {
    console.log("componentDidMount", this.state);
  }
  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   console.log("componentWillUpdate", this.state, nextState);
  // }
  componentDidUpdate() {
    console.log("componentDidUpdate", arguments);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount", this.state);
  }

  shouldComponentUpdate() {
    const { counter } = this.state;
    console.log("shouldComponentUpdate", this.state);
    return counter !== 3; //返回true就执行，返回false就不执行
  }

  setCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  render() {
    console.log("render", this.state);
    const { counter } = this.state;
    return (
      <div>
        <h3>LifeCyclePage</h3>
        <button onClick={this.setCounter}>{counter}</button>
        {!!(counter % 2) && <Foo counter={counter} />}
      </div>
    );
  }
}

class Foo extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  //只有在已挂载的组件的props更新之前执行
  UNSAFE_componentWillReceiveProps() {
    console.log("Foo componentWillReceiveProps", this.props);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    const { counter } = this.props;
    return (
      <div>
        <p>{counter}</p>
      </div>
    );
  }
}
