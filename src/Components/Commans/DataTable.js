import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

const CustomizedTable = props => {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      {props.attendanceData && props.attendanceData.length > 0 ? (
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Attendance Id</CustomTableCell>
              <CustomTableCell>Employee Id</CustomTableCell>
              <CustomTableCell>Date</CustomTableCell>
              <CustomTableCell>Sheduled Login</CustomTableCell>
              <CustomTableCell>Actual Login</CustomTableCell>
              <CustomTableCell>Sheduled Logout</CustomTableCell>
              <CustomTableCell>Actual Logout</CustomTableCell>
              <CustomTableCell>Est Hours</CustomTableCell>
              <CustomTableCell>Total Hours</CustomTableCell>
              <CustomTableCell>Status</CustomTableCell>
              <CustomTableCell>Center Id</CustomTableCell>
              <CustomTableCell>Login Report</CustomTableCell>
              <CustomTableCell>Logout Report</CustomTableCell>
              <CustomTableCell>Is Generated</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.attendanceData
              ? props.attendanceData.map((attendance, index) => {
                  return (
                    <TableRow className={classes.row} key={index}>
                      <CustomTableCell component="th" scope="row">
                        {attendance.attendanceId}
                      </CustomTableCell>
                      <CustomTableCell>{attendance.employeeId}</CustomTableCell>
                      <CustomTableCell>{`${new Date(
                        attendance.myDate
                      ).getDate()}/${new Date(
                        attendance.myDate
                      ).getMonth()}/${new Date(
                        attendance.myDate
                      ).getFullYear()}`}</CustomTableCell>
                      <CustomTableCell>{`${new Date(
                        attendance.scheduledLogin
                      ).getDate()}/${new Date(
                        attendance.scheduledLogin
                      ).getMonth()}/${new Date(
                        attendance.scheduledLogin
                      ).getFullYear()}`}</CustomTableCell>
                      <CustomTableCell>{`${new Date(
                        attendance.actualLogin
                      ).getDate()}/${new Date(
                        attendance.actualLogin
                      ).getMonth()}/${new Date(
                        attendance.actualLogin
                      ).getFullYear()}`}</CustomTableCell>
                      <CustomTableCell>{`${new Date(
                        attendance.scheduledLogout
                      ).getDate()}/${new Date(
                        attendance.scheduledLogout
                      ).getMonth()}/${new Date(
                        attendance.scheduledLogout
                      ).getFullYear()}`}</CustomTableCell>
                      <CustomTableCell>{`${new Date(
                        attendance.actualLogin
                      ).getDate()}/${new Date(
                        attendance.actualLogin
                      ).getMonth()}/${new Date(
                        attendance.actualLogin
                      ).getFullYear()}`}</CustomTableCell>
                      <CustomTableCell>{attendance.estHours}</CustomTableCell>
                      <CustomTableCell>
                        {Math.trunc(attendance.totalHours)}
                      </CustomTableCell>
                      <CustomTableCell>{attendance.status}</CustomTableCell>
                      <CustomTableCell>{attendance.centerId}</CustomTableCell>
                      <CustomTableCell>
                        {attendance.loginReport}
                      </CustomTableCell>
                      <CustomTableCell>
                        {attendance.logoutReport}
                      </CustomTableCell>
                      <CustomTableCell>
                        {attendance.isGenerated ? "Yes" : "No"}
                      </CustomTableCell>
                    </TableRow>
                  );
                })
              : "No Data"}
          </TableBody>
        </Table>
      ) : (
        "No Data Available"
      )}
    </Paper>
  );
};

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTable);
