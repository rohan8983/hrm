import Axios from "axios";
import URLs from "../Commans/ApiUrl";

// export const callLoginApi = async (userName, password) => {
//   const token = await fetch(`${URL}Auth/employee`, {
//     method: "POST",
//     body: JSON.stringify({
//       Username: userName,
//       Password: password
//     }),
//     headers: new Headers({
//       "Content-Type": "application/json"
//     })
//   });
//   return await token.json();
// };

export const callLoginApi = async (Username, Password) => {
  return await Axios.post(`${URLs.API_URL}Auth/employee`, {
    Username,
    Password
  });
};
