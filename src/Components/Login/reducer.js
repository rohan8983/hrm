const initialState = {
  Username: "",
  Password: "",
  errorMsg: false
};
const login = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE_LOGIN":
      return {
        ...state,
        [action.valueType]: action.value
      };
    case "HANDLE_CLOSE_ERROR_MSG":
      return {
        ...state,
        errorMsg: !state.errorMsg
      };
    case "ERROR":
      return {
        ...state
      };
    default:
      return state;
  }
};

export default login;
