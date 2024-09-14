import axios from "axios";

// const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const API_URL = `${BACKEND_URL}/api/patients/`;

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

//Register Patient
const register = async (patientData) => {
  const response = await axios.post(API_URL + "registerPatient", patientData, {
    withCredentials: true,
  });
   return response.data;
};

//login Patient
const login = async (patientData) => {
  const response = await axios.post(API_URL + "loginPatient", patientData, {
    withCredentials: true,
  });
  return response.data;
};

//logout Patient

const logout = async () => {
  const response = await axios.get(API_URL + "logout");
  return response.data.message;
};
//login staus Patient

const loginStatus = async () => {
  const response = await axios.get(API_URL + "loginStatus", {
    withCredentials: true,
  });
  return response.data;
};
//Get  Patient
//GET User Profile
const getPatient = async () => {
  const response = await axios.get(API_URL + "getPatient", {
    withCredentials: true,
  });
  return response.data;
};
//GET User Profile
const updatePatient = async (patientData) => {
  const response = await axios.patch(API_URL + "updatePatient", patientData, {
    withCredentials: true,
  });
  return response.data;
};

// Send Verification Email
const sendPatientVerificationEmail = async () => {
  const response = await axios.post(API_URL + "sendPatientVerificationEmail");
  return response.data.message;
};

// Send Login Code
const sendPatientLoginCode = async (email) => {
  const response = await axios.post(API_URL + `sendPatientLoginCode/${email}`);
  return response.data.message;
};
//  Login with Code

const loginPatientWithCode = async (loginCode, email) => {
  console.log(loginCode);
  const response = await axios.post(
    API_URL + `loginPatientWithCode/${email}`,
    loginCode,
    { withCredentials: true }
  );
  return response.data;
};

const getPatientFiles = async () => {
  const response = await axios.get(API_URL + "getPatientFiles", {
    withCredentials: true,
  });
  return response.data;
};


const patientService = {
  register,
  login,
  logout,
  loginStatus,
  getPatient,
  updatePatient,
  sendPatientVerificationEmail,
  sendPatientLoginCode,
  loginPatientWithCode,
  getPatientFiles
};

export default patientService;
