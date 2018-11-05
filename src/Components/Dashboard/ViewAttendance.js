import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import classNames from "classnames";
import DatePicker from "react-datepicker";
import "./dashboard.css";
import DatePick from "../Commans/DatePick";
import AttendanceDialog from "./AttendanceDialog";

const styles = {
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  }
};

const Transition = props => {
  return <Slide direction="up" {...props} />;
};

const FullScreenDialog = props => {
  const { classes } = props;
  return (
    <div>
      <Dialog
        open={props.attendanceOpen}
        onClose={e => props.actions.attendanceDialog(false)}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={e => props.actions.attendanceDialog(false)}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h8" color="inherit" className={classes.flex}>
              View Attendance
            </Typography>
          </Toolbar>
        </AppBar>
        Start Time:
        <input
          type="date"
          style={{ width: "250px" }}
          onChange={e => {
            props.actions.setDate("startTime", e.target.value);
          }}
        />
        End Time:
        <input
          type="date"
          style={{ width: "250px" }}
          onChange={e => props.actions.setDate("endTime", e.target.value)}
        />
        &nbsp;&nbsp;
        <Button
          style={{ width: "250px" }}
          color="secondary"
          variant="contained"
          size="small"
          className={props.button}
          onClick={e =>
            props.actions.viewAttendance(props.startTime, props.endTime, true)
          }
        >
          Show
        </Button>
        <AttendanceDialog {...props} />
      </Dialog>
    </div>
  );
};

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullScreenDialog);
