import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const styles = theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  }
});

class Answer extends Component {
  handleChange = event => {
    const { props } = this;
    this.props.selectOption(event.target.value, 0);
  };

  renderOptions() {
    const { options } = this.props;

    return options.map(option => {
      return (
        <FormControlLabel
          value={option.id}
          control={<Radio color="primary" />}
          label={option.optiontext}
          labelPlacement="start"
        />
      );
    });
  }
  render() {
    const { props } = this;
    const { classes } = props;
    return (
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          aria-label="gender"
          name="gender2"
          className={classes.group}
          value={this.props.value}
          onChange={this.handleChange}
        >
          {this.renderOptions()}
        </RadioGroup>
      </FormControl>
    );
  }
}

export default withStyles(styles)(Answer);
