import {
  callGetProfileData,
  callMarkAttendanceApi,
  callGetAttendanceApi
} from "./services";

export const saveLocation = location => {
  return {
    type: "SAVE_CURRENT_LOCATION",
    location
  };
};

export const handleChange = (valueType, value) => {
  return {
    type: "HANDLE_CHANGE_DASH",
    valueType,
    value
  };
};

export const handleProfileDialog = flag => {
  return {
    type: "HANDLE_PROFILE_DIALOG",
    flag
  };
};

export const errorMsg = error => {
  return {
    type: "HANDLE_ERROR_MSG",
    error
  };
};

export const setProfileData = profile => {
  return {
    type: "SET_PROFILE_DATA",
    profile
  };
};

export const attendanceDialog = attendanceOpen => {
  return {
    type: "HANDLE_ATTENDANCE_DIALOG",
    attendanceOpen
  };
};

export const setDate = (valueType, date) => {
  return {
    type: "SET_DATE",
    valueType,
    date
  };
};

export const setAttendanceDetails = data => {
  return {
    type: "SET_ATTENDANCE_DETAILS",
    data
  };
};

export const attDialog = open => {
  return {
    type: "SET_ATTENDANCE_DIALOG",
    open
  };
};

export const setRemark = remarkObj => {
  return async dispatch => {
    const data = await callMarkAttendanceApi(remarkObj);
  };
};

export const getProfileData = flag => {
  return async dispatch => {
    try {
      const profile = await callGetProfileData();
      dispatch(setProfileData(profile.data));
      dispatch(handleProfileDialog(true));
    } catch (err) {
      console.log(err);
    }
  };
};

export const viewAttendance = (startTime, endTime, open) => {
  debugger;
  return async dispatch => {
    try {
      const attendance = await callGetAttendanceApi(startTime, endTime);
      dispatch(setAttendanceDetails(attendance.data));
      dispatch(attDialog(open));
      debugger;
    } catch (error) {
      console.log(error);
    }
  };
};
