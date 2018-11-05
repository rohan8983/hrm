import { callLoginApi } from "./services";

export const handleChange = (valueType, value) => ({
  type: "HANDLE_CHANGE_LOGIN",
  valueType,
  value
});
export const handleClose = () => ({
  type: "HANDLE_CLOSE_ERROR_MSG"
});
export const login = (username, password, history) => {
  return async () => {
    try {
      const data = await callLoginApi(username, password);
      history.push("/dashboard");
      localStorage.setItem("userAuthToken", data.data.token);
    } catch (err) {
      console.log(err);
    }
  };
};
