import React from "react";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  // componentWillMount() {
  //   console.log('********** componentWillMount **********', this.state.isLogin);
  // }
  componentDidMount() {
    console.log("********** componentDidMount **********");
    console.log(this.props)
  }
  componentWillReceivedProps(nextProps) {
    console.log("********** componentWillReceivedProps **********", nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "********** shouldComponentUpdate **********",
      nextProps,
      nextState
    );
  }
  // componentWillUpdate(nextProps, nextState) {
  //   console.log('********** componentWillUpdate **********', nextProps, nextState);
  // }
  componentDidUpdate(prevProps, prevState) {
    console.log(
      "********** componentDidUpdate **********",
      prevProps,
      prevState
    );
  }
  componentWillUnmount() {
    console.log("********** componentWillUnmount **********");
  }
  render() {
    const element = <div>主页</div>;
    return element;
  }
}
