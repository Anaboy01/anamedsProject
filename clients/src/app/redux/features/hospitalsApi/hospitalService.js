import axios from 'axios'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const API_URL = `${BACKEND_URL}/api/hospitals/`









const registerHospital = async (hospitalData) =>{
      const response = await axios.post(API_URL + 'registerHospital', hospitalData)
      return response.data
}



const loginHospital = async (hospitalData) =>{
      const response = await axios.post(API_URL + 'loginHospital', hospitalData)
      return response.data
}



const logoutHospital = async () =>{
      const response = await axios.get(API_URL + 'logoutHospital')
      return response.data.message
}


const hospitalLoginStatus = async () =>{
      const response = await axios.get(API_URL + 'hospitalLoginStatus')
      return response.data
}

 const getHospital = async () => {
      const response = await axios.get(API_URL + "getHospital");
      return response.data;
    };

 const updateHospital = async (hospitalData) => {
      const response = await axios.patch(API_URL + "updateHospital", hospitalData);
      return response.data;
    };

    const getDoctorsByHospitalId = async () => {
        const response = await axios.get(API_URL + "getDoctorsByHospitalId");
        console.log(response.data)
        return response.data;
  
      };

      const registerDoctor = async (doctorData) =>{
        const response = await axios.post(API_URL + 'registerDoctor', doctorData)
        return response.data
  }



   

const hospitalService = {
      registerHospital,
      loginHospital,
      logoutHospital,
      hospitalLoginStatus,
      getHospital,
      updateHospital,
     
     
}

export default hospitalService