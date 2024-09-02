import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { toast } from 'react-toastify';
import patientService from './patientService';




const initialState = {
      isLoggedIn: false,
      patient: null,
      patients:[],
      twoFactor: false,
      isError: false,
      isSuccess: false,
      isLoading: false,
      message: "",
      
}

//REGISTER Patient

export const register = createAsyncThunk(
      'patient/registerPatient',
      async (patientData, thunkAPI) => {
            try {
                  return await patientService.register(patientData)
            } catch (error) {
                  const message = (error.response && error.response.data && error.response.data) || error.message || error.toString()

                  return thunkAPI.rejectWithValue(message)
            }
      }
)

// Login Patient
export const login = createAsyncThunk(
      'patient/loginPatient',
      async(patientData, thunkApi) =>{
        try {
          return await patientService.login(patientData)
        } catch (error) {
          const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    
          return thunkApi.rejectWithValue(message)
        }
      }
    )

    //Logout Patient

export const logout = createAsyncThunk(
      'patient/logout',
      async(_, thunkApi) =>{
        try {
          return await patientService.logout()
        } catch (error) {
          const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    
          return thunkApi.rejectWithValue(message)
        }
      }
    )
    //Logout Patient

export const loginStatus = createAsyncThunk(
      'patient/loginStatus',
      async(_, thunkApi) =>{
        try {
          return await patientService.loginStatus()
        } catch (error) {
          const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    
          return thunkApi.rejectWithValue(message)
        }
      }
    )
    //Get Patient

//GET LOGIN STATUS
export const getPatient = createAsyncThunk(
      'patient/getPatient',
      async(_, thunkApi) =>{
        try {
          return await patientService.getPatient()
        } catch (error) {
          const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    
          return thunkApi.rejectWithValue(message)
        }
      }
    )

    //UPDATE USER
export const updatePatient = createAsyncThunk(
      'patient/updatePatient',
      async(patientData, thunkApi) =>{
        try {
          return await patientService.updatePatient(patientData)
        } catch (error) {
          const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    
          return thunkApi.rejectWithValue(message)
        }
      }
    )
    //Send Verification Email
export const sendPatientVerificationEmail = createAsyncThunk(
      'patient/sendPatientVerificationEmail',
      async(_, thunkApi) =>{
        try {
          return await patientService.sendPatientVerificationEmail()
        } catch (error) {
          const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    
          return thunkApi.rejectWithValue(message)
        }
      }
    )
export const sendPatientLoginCode = createAsyncThunk(
      'patient/sendPatientLoginCode',
      async(email, thunkApi) =>{
        try {
          return await patientService.sendPatientLoginCode(email)
        } catch (error) {
          const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    
          return thunkApi.rejectWithValue(message)
        }
      }
    )


    export const loginPatientWithCode = createAsyncThunk(
      "patient/loginPatientWithCode",
      async ({code, email}, thunkAPI) => {
        try {
          return await patientService.loginPatientWithCode(code, email);
        } catch (error) {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          return thunkAPI.rejectWithValue(message);
        }
      }
    );


    export const addPatientFile = createAsyncThunk(
      "patient/addPatientFile",
      async ({patientData, email}, thunkAPI) => {
        try {
          return await patientService.addPatientFile(patientData, email);
        } catch (error) {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          return thunkAPI.rejectWithValue(message);
        }
      }
    );

    export const requestAccessToPatientData = createAsyncThunk(
      'patient/requestAccessToPatientData',
      async(email, thunkApi) =>{
        try {
          return await patientService.requestAccessToPatientData(email)
        } catch (error) {
          const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    
          return thunkApi.rejectWithValue(message)
        }
      }
    )


    export const accessPatientDataWithCode = createAsyncThunk(
      "patient/accessPatientDataWithCode",
      async ({code, email}, thunkAPI) => {
        try {
          return await patientService.accessPatientDataWithCode(code, email);
        } catch (error) {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          return thunkAPI.rejectWithValue(message);
        }
      }
    );
    export const getPatientFilesByDoctorId = createAsyncThunk(
      "patient/getPatientFilesByDoctorId",
      async (email, thunkAPI) => {
        try {
          return await patientService.getPatientFilesByDoctorId( email);
        } catch (error) {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          return thunkAPI.rejectWithValue(message);
        }
      }
    );

const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
      RESET(state){
            state.isLoggedIn= false
            state.patient= null
            state.patients=[]
            state.twoFactor= false
            state.isError= false
            state.isSuccess= false
            state.isLoading= false
            state.message= ""
      }
  },
  extraReducers: (builder) => {
      builder

            .addCase(register.pending, (state, action) => {
                  state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                  state.isLoading = false
                  state.isSuccess = true
                  state.isLoggedIn = true
                  state.patient = action.payload;
                  console.log(action.payload)
                  toast.success('Registration Succesful')
            })
            .addCase(register.rejected, (state, action) => {
                  state.isLoading = false
                  state.isError = true
                  state.isSuccess = false
                  state.message = action.payload
                  state.patient = null;
                  toast.error(action.payload)
            })
            

            //Login User
            .addCase(login.pending, (state) => {
                  state.isLoading = true;
                })
                .addCase(login.fulfilled, (state, action) => {
                  state.isLoading = false;
                  state.isSuccess = true;
                  state.isLoggedIn = true;
                  state.patient = action.payload;
                  toast.success("Login Successful");
                  console.log(action.payload);
                })
                .addCase(login.rejected, (state, action) => {
                  state.isLoading = false;
                  state.isError = true;
                  state.message = action.payload;
                  state.patient = null;
                  toast.error(action.payload);
                  if (action.payload.includes('New browser')) {
                    state.twoFactor = true
                  }
                })

            //Logout User
            .addCase(logout.pending, (state) => {
                  state.isLoading = true;
                })
                .addCase(logout.fulfilled, (state, action) => {
                  state.isLoading = false;
                  state.isSuccess = true;
                  state.isLoggedIn = false;
                  state.patient = null;
                  toast.success(action.payload);
                  
                })
                .addCase(logout.rejected, (state, action) => {
                  state.isLoading = false;
                  state.isError = true;
                  state.message = action.payload;
                  
                  toast.error(action.payload);
                  
                })


            //LoginStatus User
            .addCase(loginStatus.pending, (state) => {
                  state.isLoading = true;
                })
                .addCase(loginStatus.fulfilled, (state, action) => {
                  state.isLoading = false;
                  state.isSuccess = true;
                  state.isLoggedIn = action.payload;
                  
                })
                .addCase(loginStatus.rejected, (state, action) => {
                  state.isLoading = false;
                  state.isError = true;
                  state.message = action.payload;
                  
                })

            //getPatient
             // GET User
      .addCase(getPatient.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getPatient.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isLoggedIn = true;
            state.patient = action.payload;
          })
          .addCase(getPatient.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            
            state.message = action.payload;
            toast.error(action.payload)
          })

       // UPDATE USER
       .addCase(updatePatient.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(updatePatient.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isLoggedIn = true;
            state.patient = action.payload;
    
            toast.success('User Updated')
          })
          .addCase(updatePatient.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload)
          })

      //     dispu86tu 
       // sendPatientVerificationEmail
       .addCase(sendPatientVerificationEmail.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(sendPatientVerificationEmail.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
            toast.success(action.payload)
          })
          .addCase(sendPatientVerificationEmail.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload)
          })

          // SEND LOGIN CODE


       .addCase(sendPatientLoginCode.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(sendPatientLoginCode.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload; 
            toast.success(action.payload)
          })
          .addCase(sendPatientLoginCode.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload)
          })
          // SEND LOGIN CODE


          .addCase(loginPatientWithCode.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(loginPatientWithCode.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isLoggedIn = true;
            state.twoFactor = false;
            state.patient = action.payload;
            toast.success(action.payload)
          })
          .addCase(loginPatientWithCode.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.patient = null;
            toast.error(action.payload);
          })

          //ADD PATIENT FILE

          .addCase(addPatientFile.pending, (state, action) => {
            state.isLoading = true
      })
      .addCase(addPatientFile.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.patient = action.payload;
            console.log(action.payload)
            toast.success('Form Creation Succesful')
      })
      .addCase(addPatientFile.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = action.payload
            state.patient = null;
            toast.error(action.payload)
      })

      //REQUEST CODE
      .addCase(requestAccessToPatientData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(requestAccessToPatientData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload; 
        toast.success(action.payload)
      })
      .addCase(requestAccessToPatientData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload)
      })

      //ACCESS CODE

      .addCase(accessPatientDataWithCode.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(accessPatientDataWithCode.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.patient = action.payload;
        toast.success(action.payload)
        console.log(action.payload)
      })
      .addCase(accessPatientDataWithCode.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.patient = null;
        toast.error(action.payload);
      })
      //ACCESS CODE

      .addCase(getPatientFilesByDoctorId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPatientFilesByDoctorId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.patient = action.payload;
        toast.success(action.payload)
        console.log(action.payload)
      })
      .addCase(getPatientFilesByDoctorId.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.patient = null;
        toast.error(action.payload);
      })
          



  }
});

export const {RESET} = patientSlice.actions

export const selectIsLoggedIn = (state) => state.patient.isLoggedIn
export const selectPatient = (state) => state.patient.patient

export default patientSlice.reducer