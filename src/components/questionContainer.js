import React, { Component } from "react";
import Question from "./question";
import Answer from "./answer";
import Html from "./html";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  root: {
    backroundColor: "red"
  }
});
class QuestionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionId: "",
      questionText: "",
      options: [],
      selectAwnserValue: "0",
      nextQuestionYes: "",
      nextQuestionNo: "",
      question: { id: "0" }
    };
  }
  componentDidMount() {
    const { state } = this;
    const { selectAwnserValue } = state;
    this.setQuestion(1);
  }
  setQuestion = questionId => {
    const { questionJson } = this.props;

    const question = questionJson.filter(x => x.id === questionId)[0];
    const options = question.options !== undefined ? question.options : [];
    this.setState({
      nextQuestionYes: question.nextQuestionYes,
      nextQuestionNo: question.nextQuestionNo,
      extraQuestionOne: question.extraQuestionOne,
      extraQuestionTwo: question.extraQuestionTwo,
      questionText: question.questionText,
      options,
      question: question
    });
  };
  selectOption = selectAwnserValue => {
    this.setState({
      selectAwnserValue: selectAwnserValue
    });
  };
  render() {
    const { state, props } = this;
    const {
      questionText,
      options,
      selectAwnserValue,
      question,
      nextQuestionNo,
      nextQuestionYes,
      extraQuestionOne,
      extraQuestionTwo
    } = state;
    let nextQuestionId = "";
    switch (selectAwnserValue) {
      case "0":
        nextQuestionId = nextQuestionNo;
        break;
      case "1":
        nextQuestionId = nextQuestionYes;
        break;
      case "2":
        nextQuestionId = extraQuestionOne;
        break;
      case "3":
        nextQuestionId = extraQuestionTwo;
        break;
      default:
        nextQuestionId = nextQuestionNo;
        break;
    }
    const { classes } = props;
    const isFinalQuestion = question.id > 9999 ? true : false;
    const hasExtraHtml = question.extraHtml !== undefined ? true : false;
    const gridOrFinal = !isFinalQuestion ? (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Question questionText={questionText} />
          {hasExtraHtml && <Html html={question.extraHtml} />}
        </Grid>
        <Grid item xs={12}>
          {options.length > 0 && (
            <Answer
              selectAwnserValue={selectAwnserValue}
              selectOption={this.selectOption}
              options={options}
              value={selectAwnserValue}
            />
          )}
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={() => this.setQuestion(nextQuestionId)}
            variant="contained"
            color="primary"
          >
            Volgende vraag
          </Button>
        </Grid>
      </Grid>
    ) : (
      <React.Fragment>
        <Html html={question.awnser} />
      </React.Fragment>
    );

    return gridOrFinal;
  }
}

export default withStyles(styles)(QuestionContainer);
