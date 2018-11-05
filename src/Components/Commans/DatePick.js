import React, { PureComponent } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class DatePick extends PureComponent {
  state = {
    startDate: moment()
  };
  handleChange = date => {
    this.props.actions.setDate(this.props.time, date);
    this.setState({
      startDate: date
    });
  };
  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}
