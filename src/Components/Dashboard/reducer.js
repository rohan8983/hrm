const initialState = {
  open: false,
  remarkObj: {
    remarks: "",
    employeeId: "",
    lat: "",
    lng: "",
    area: "",
    deviceType: /Linux|Windows/i.test(navigator.userAgent)
      ? "desktopType"
      : "mobileType",
    tstamp: new Date().toUTCString(),
    cid: "",
    centerId: ""
  },
  error: "",
  profile: "",
  attendanceOpen: false,
  startTime: "",
  endTime: "",
  attendanceData: "",
  attOpen: false
};

export const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_CURRENT_LOCATION":
      return {
        ...state,
        remarkObj: {
          ...state.remarkObj,
          lat: action.location.coords.latitude,
          lng: action.location.coords.longitude
        }
      };
    case "HANDLE_CHANGE_DASH":
      return {
        ...state,
        remarkObj: {
          ...state.remarkObj,
          [action.valueType]: action.value
        }
      };
    case "HANDLE_PROFILE_DIALOG":
      return {
        ...state,
        open: action.flag
      };
    case "HANDLE_ERROR_MSG":
      return {
        ...state,
        error: action.error
      };
    case "SET_PROFILE_DATA":
      return {
        ...state,
        profile: action.profile
      };
    case "HANDLE_ATTENDANCE_DIALOG":
      return {
        ...state,
        attendanceOpen: action.attendanceOpen
      };
    case "SET_DATE":
      return {
        ...state,
        [action.valueType]: action.date
      };
    case "SET_ATTENDANCE_DETAILS":
      return {
        ...state,
        attendanceData: action.data
      };
    case "SET_ATTENDANCE_DIALOG":
      return {
        ...state,
        attOpen: action.open
      };
    default:
      return state;
  }
};
