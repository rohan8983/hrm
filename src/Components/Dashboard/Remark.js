import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./dashboard.css";
import classNames from "classnames";
import ProfileDialog from "./ProfileDialog";
import ViewAttendance from "./ViewAttendance";

export const Remark = props => {
  return (
    <div className="mainRemark">
      <div className="btnDiv">
        <Button
          color="default"
          variant="contained"
          component="span"
          fullWidth
          onClick={e => props.actions.getProfileData(true)}
        >
          Profile
        </Button>
        <Button
          variant="contained"
          component="span"
          color="default"
          fullWidth
          onClick={e => props.actions.attendanceDialog(true)}
        >
          Attendance
        </Button>
      </div>
      <div className="insideMain">
        <TextField
          id="Employee Id"
          label="Employee Id"
          onChange={e =>
            props.actions.handleChange("employeeId", e.target.value)
          }
          fullWidth
          margin="normal"
        />
      </div>
      <div>
        <TextField
          id="area"
          label="Area"
          onChange={e => props.actions.handleChange("area", e.target.value)}
          margin="normal"
          fullWidth
        />
      </div>
      <div>
        <TextField
          id="remark"
          label="Company Id"
          onChange={e => props.actions.handleChange("cid", e.target.value)}
          margin="normal"
          fullWidth
        />
      </div>
      <div>
        <TextField
          id="remark"
          label="Center Id"
          onChange={e => props.actions.handleChange("centerId", e.target.value)}
          margin="normal"
          fullWidth
        />
      </div>
      <div>
        <TextField
          id="remark"
          label="Remark*"
          onChange={e => props.actions.handleChange("remarks", e.target.value)}
          margin="normal"
          fullWidth
        />
      </div>
      <Button
        variant="contained"
        component="span"
        color="primary"
        size="large"
        fullWidth
        className={classNames("sendBtn", props.classes.button)}
        onClick={e => props.actions.setRemark(props.remarkObj)}
      >
        Send
      </Button>
      <Button
        variant="contained"
        component="span"
        color="inherit"
        size="large"
        fullWidth
        className={classNames("sendBtn", props.classes.button)}
        onClick={e => {
          localStorage.removeItem("userAuthToken");
          props.history.push("/");
        }}
      >
        Logout
      </Button>
      <ProfileDialog {...props} />
      <ViewAttendance {...props} />
    </div>
  );
};
