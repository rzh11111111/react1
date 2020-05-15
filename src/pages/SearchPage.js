import React, { Component } from "react";

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    // this.submit = this.submit.bind(this);
  }
  submit = () => {
    // const val = this.refs.input;
    // console.log("val", val.value);
    this.props.tell("search");//tell在app.js
    console.log("name", this.state.name);
  };
  //改变的时候触发
  change = event => {
    this.setState({
      name: event.target.value
    });
  };
  render() {
    const { name } = this.state;
    return (
      <div>
        <h3>SearchPage</h3>
        <input /* ref="input" */ value={name} onChange={this.change} />
        <button onClick={this.submit}>提交</button>
      </div>
    );
  }
}
