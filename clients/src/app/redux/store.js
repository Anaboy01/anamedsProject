import { configureStore } from "@reduxjs/toolkit";
import patientReducer from '../redux/features/patientApi/patientSlice'
// import doctorReducer from '../redux/features/doctors/doctorsSlice'
// import hospitalReducer from '../redux/features/hospital/hospitalSlice'
// import emailReducer from '../redux/features/email/emailSlice'

export const store = configureStore({
    reducer:{
          patient: patientReducer,
        //   doctor: doctorReducer,
        //   hospital: hospitalReducer,
        //   email:emailReducer,

    }
})