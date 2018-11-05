import React from "react";
import PropTypes from "prop-types";
import Map from "../Commans/GoogleMap";
import "./dashboard.css";
import { connect } from "react-redux";
import * as dashAction from "./actions";
import { bindActionCreators } from "redux";
import { withStyles } from "@material-ui/core/styles";
import { Remark } from "./Remark";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

const Dashboard = props => {
  return (
    <div>
      <Map {...props} />
      <div className="remark">
        <Remark {...props} />
      </div>
    </div>
  );
};
Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    open: state.dashboard.open,
    remarkObj: state.dashboard.remarkObj,
    profile: state.dashboard.profile,
    attendanceOpen: state.dashboard.attendanceOpen,
    startTime: state.dashboard.startTime,
    endTime: state.dashboard.endTime,
    attOpen: state.dashboard.attOpen,
    attendanceData: state.dashboard.attendanceData
  };
};

const mapDispatchToprops = dispatch => ({
  actions: bindActionCreators(dashAction, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(withStyles(styles)(Dashboard));
