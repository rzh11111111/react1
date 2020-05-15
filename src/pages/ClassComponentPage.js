import React, { Component } from "react";

export default class ClassComponentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      counter: 0
    };
  }
  //组件挂载完成之后执行
  componentDidMount() {
    this.timer = setInterval(() => {
      // console.log("qqq");
      // this.state.date = new Date();
      // this.forceUpdate();
      this.setState({
        date: new Date()
      });
    }, 1000);
//同步方式2
    // setTimeout(() => {
    //   this.setCounter();
    // }, 1000);
    //同步方式3
    document.getElementById("test").addEventListener("click", this.setCounter);
  }
  //组件卸载之前执行
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  setCounter = () => {
    this.setState(
      {
        counter: this.state.counter + 1
      },
      //setState第二个参数是回调，第一个参数结束后开始第二个
      () => {
        console.log("omg", this.state.counter);
      }
    );
    // this.setState({
    //   counter: this.state.counter + 2
    // });
    console.log("counter", this.state.counter);
    //同步方式1
      //nextState可以把上一个结果当成这个结果
    // this.setState(nextState => {
      //return{}可以不写
    //   return {
    //     counter: nextState.counter + 1
    //   };
    // });
    // this.setState(nextState => {
    //   return {
    //     counter: nextState.counter + 2
    //   };
    // });
  };
  render() {
    const { date, counter } = this.state;
    return (
      <div>
        <h3>ClassComponentPage</h3>
        <p>{date.toLocaleTimeString()}</p>
        <button onClick={this.setCounter}> {counter}</button>
        <button id="test"> {counter}</button>
      </div>
    );
  }
}
