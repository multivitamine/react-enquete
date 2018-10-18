import React, { Component } from "react";
import doorverwijzen from "./json/doorverwijzen";
import QuestionContainer from "./components/questionContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionJson: doorverwijzen
    };
  }

  render() {
    const { state } = this;
    const { questionJson } = state;

    return (
      <div className="container">
        <h1> doorverwijzen test</h1>
        <QuestionContainer questionJson={questionJson} />
      </div>
    );
  }
}

export default App;
