import React, { Component } from "react";

class Question extends Component {
  render() {
    const { props } = this;
    const { questionText } = props;
    return <p>{questionText}</p>;
  }
}

export default Question;
