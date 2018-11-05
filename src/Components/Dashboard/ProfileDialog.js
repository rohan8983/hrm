import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import { CustomTextField } from "../Commans/TextField";

const Transition = props => {
  return <Slide direction="up" {...props} />;
};

const ProfileDialog = props => {
  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={e => props.actions.handleProfileDialog(false)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Profile View"}
        </DialogTitle>
        <DialogContent>
          <CustomTextField
            label="Employee Id"
            value={props.profile.employeeId}
            textField={props.classes}
          />
          <CustomTextField
            label="Email Address"
            value={props.profile.emailAddress}
            textField={props.classes}
          />
          <CustomTextField
            label="Employee Name"
            value={props.profile.employeeName}
            textField={props.classes}
          />
          <CustomTextField
            label="Address"
            value={props.profile.address}
            textField={props.classes}
          />
          <CustomTextField
            label="Gender"
            value={props.profile.gender}
            textField={props.classes}
          />
          <CustomTextField
            label="Phone"
            value={props.profile.phone}
            textField={props.classes}
          />
          <CustomTextField
            label="Alternate Phone"
            value={props.profile.alternatePhone}
            textField={props.classes}
          />
          <CustomTextField
            label="User Id"
            value={props.profile.userId}
            textField={props.classes}
          />
          <CustomTextField
            label="Company"
            value={props.profile.company}
            textField={props.classes}
          />
          <CustomTextField
            label="Center Id"
            value={props.profile.centerId}
            textField={props.classes}
          />
          <CustomTextField
            label="Designation"
            value={props.profile.designation}
            textField={props.classes}
          />
          <CustomTextField
            label="Department"
            value={props.profile.department}
            textField={props.classes}
          />
          <CustomTextField
            label="Process"
            value={props.profile.process}
            textField={props.classes}
          />
          <CustomTextField
            label="Date Of Joining"
            value={
              new Date(props.profile.dateofJoining).getDate() +
              "/" +
              new Date(props.profile.dateofJoining).getMonth() +
              "/" +
              new Date(props.profile.dateofJoining).getFullYear()
            }
            textField={props.classes}
          />
          <CustomTextField
            label="FireBase Id"
            value={props.profile.firebaseId}
            textField={props.classes}
          />
          <CustomTextField
            label="DOB"
            value={
              new Date(props.profile.dateOfBirth).getDate() +
              "/" +
              new Date(props.profile.dateOfBirth).getMonth() +
              "/" +
              new Date(props.profile.dateOfBirth).getFullYear()
            }
            textField={props.classes}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={e => props.actions.handleProfileDialog(false)}
            color="primary"
          >
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProfileDialog;
