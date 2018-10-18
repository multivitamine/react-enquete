import React, { Component } from "react";

class Final extends Component {
  createMarkup() {
    const { props } = this;
    const { html } = props;
    return { __html: html };
  }
  render() {
    return <div dangerouslySetInnerHTML={this.createMarkup()} />;
  }
}

export default Final;
