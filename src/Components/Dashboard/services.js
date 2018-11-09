import Axios from "axios";
import URls from "../Commans/ApiUrl";

export const callGetProfileData = async () => {
  const token = localStorage.getItem("userAuthToken");
  const data = await Axios.get(`${URls.API_URL}Employee/profile/6464`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return data;
};

export const callMarkAttendanceApi = async remarkObj => {
  const token = localStorage.getItem("userAuthToken");
  const data = await Axios.post(`${URls.API_URL}Employee/MarkAttendance`, {
    employeeId: remarkObj.employeeId,
    lat: remarkObj.lat,
    lng: remarkObj.lng,
    area: remarkObj.area,
    deviceType: remarkObj.deviceType,
    tstamp: remarkObj.tstamp,
    cid: remarkObj.cid,
    centerId: remarkObj.centerId,
    remarks: remarkObj.remarks,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
  return data;
};

export const callGetAttendanceApi = async (startTime, endTime) => {
  const token = localStorage.getItem("userAuthToken");

  const year = new Date(startTime).getFullYear();
  const month = new Date(startTime).getMonth() + 1;
  const date = new Date(startTime).getDate();

  const year2 = new Date(endTime).getFullYear();
  const month2 = new Date(endTime).getMonth() + 1;
  const date2 = new Date(endTime).getDate();

  return await Axios.get(
    `${
      URls.API_URL
    }Employee/Attendance/0018?StartTime=${year}-${month}-${date}&EndTime=${year2}-${month2}-${date2}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};
