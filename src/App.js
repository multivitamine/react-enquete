import React, { Component } from "react";
import doorverwijzen from "./json/doorverwijzen";
import niveaubepaling from "./json/niveaubepaling";
import QuestionContainer from "./components/questionContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionJson: []
    };
  }
  componentDidMount() {
    const { test } = this.props;
    let json = [];
    switch (test) {
      case "doorverwijzen":
        json = doorverwijzen.questions;
        break;
      case "niveaubepaling":
        json = niveaubepaling.questions;
        break;
      default:
    }
    this.setState({
      questionJson: json
    });
  }
  render() {
    const { state, props } = this;
    const { questionJson } = state;
    const theJson = questionJson.length > 0 ? true : false;
    console.log(theJson);
    console.log(questionJson);

    return (
      <div className="react-enquete">
        {theJson && <QuestionContainer questionJson={questionJson} />}
      </div>
    );
  }
}

export default App;
