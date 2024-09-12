import axios from 'axios'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const API_URL = `${BACKEND_URL}/api/doctors/`



const registerDoctor = async (doctorData) =>{
      const response = await axios.post(API_URL + 'registerDoctor', doctorData)
      return response.data
}


const loginDoctor = async (doctorData) =>{
      const response = await axios.post(API_URL + 'loginDoctor', doctorData)
      return response.data
}




const logoutDoctor = async () =>{
      const response = await axios.get(API_URL + 'logoutDoctor')
      return response.data.message
}


const doctorloginStatus = async () =>{
      const response = await axios.get(API_URL + 'loginStatus')
      return response.data
}

 const getDoctor = async () => {
      const response = await axios.get(API_URL + "getDoctor");
      return response.data;
    };


 const getDoctorsByHospitalId = async () => {
      const response = await axios.get(API_URL + "getDoctor");
      console.log(response.data)
      return response.data;

    };

 const updateDoctor = async (doctorData) => {
      const response = await axios.patch(API_URL + "updateDoctor", doctorData);
      return response.data;
    };

    const addPatientFile = async (patientData, email) => {
        const response = await axios.post(API_URL + `addPatientFile/${email}`, patientData);
        return response.data;
      };

        
    const requestAccessToPatientData = async (email) => {
        const response = await axios.post('http://localhost:5000/api/doctors/requestAccessToPatientData', email);
        return response.data.message;
      };
  

  
      const accessPatientDataWithCode = async (code, email) => {
        const response = await axios.post(API_URL + `accessPatientDataWithCode/${email}`, code);
        return response.data;
      };
  

   const getPatientFilesByDoctorId = async (email) => {
    const response = await axios.get(API_URL + `getPatientFilesByDoctorId/${email}`);
    return response.data;
  };

  

const doctorService = {
 
      loginDoctor,
      logoutDoctor,
      doctorloginStatus,
      getDoctor,
      updateDoctor,
      registerDoctor,
      getDoctorsByHospitalId,
      addPatientFile,
      requestAccessToPatientData,
      accessPatientDataWithCode,
      getPatientFilesByDoctorId
}

export default doctorService