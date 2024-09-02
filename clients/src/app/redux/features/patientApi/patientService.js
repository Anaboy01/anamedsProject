import axios from 'axios'

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL

export const API_URL = `${BACKEND_URL}/api/patients/`

//Validate email

// Validate email
export const validateEmail = (email) => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };


//Register Patient

const register = async (patientData) =>{
      const response = await axios.post(API_URL + 'registerPatient', patientData)
      return response.data
}
//login Patient



const login = async (patientData) =>{
      const response = await axios.post(API_URL + 'loginPatient', patientData)
      return response.data
}

//logout Patient

const logout = async () =>{
      const response = await axios.get(API_URL + 'logout')
      return response.data.message
}
//login staus Patient

const loginStatus = async () =>{
      const response = await axios.get(API_URL + 'loginStatus')
      return response.data
}
//Get  Patient
 //GET User Profile
 const getPatient = async () => {
      const response = await axios.get(API_URL + "getPatient");
      return response.data;
    };
 //GET User Profile
 const updatePatient = async (patientData) => {
      const response = await axios.patch(API_URL + "updatePatient", patientData);
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
   
    const loginPatientWithCode = async (code, email) => {
      const response = await axios.post(API_URL + `loginPatientWithCode/${email}`, code);
      return response.data;
    };
 //  Login with Code
   
    const addPatientFile = async (patientData, email) => {
      const response = await axios.post(API_URL + `addPatientFile/${email}`, patientData);
      return response.data;
    };

    // Send Login Code
    const requestAccessToPatientData = async (email) => {
      const response = await axios.post('http://localhost:5000/api/patients/requestAccessToPatientData', email);
      return response.data.message;
    };

    //Access Patient 

    const accessPatientDataWithCode = async (code, email) => {
      const response = await axios.post(API_URL + `accessPatientDataWithCode/${email}`, code);
      return response.data;
    };

    //GET User Profile
 const getPatientFilesByDoctorId = async (email) => {
  const response = await axios.get(API_URL + `getPatientFilesByDoctorId/${email}`);
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
      addPatientFile,
      requestAccessToPatientData,
      accessPatientDataWithCode,
      getPatientFilesByDoctorId
      
}

export default patientService