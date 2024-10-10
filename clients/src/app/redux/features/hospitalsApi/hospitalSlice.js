
import hospitalService from './hospitalService'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { toast } from 'react-toastify';



const initialState = {
  isLoggedIn: false,
  hospital: null,
  hospitals:[],
  twoFactor: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  
}

export const registerHospital = createAsyncThunk(
  'hospital/registerHospital',
  async (hospitalData, thunkAPI) => {
        try {
              return await hospitalService.registerHospital(hospitalData)
        } catch (error) {
              const message = (error.response && error.response.data && error.response.data) || error.message || error.toString()

              return thunkAPI.rejectWithValue(message)
        }
  }
)



// Login Patient
export const loginHospital = createAsyncThunk(
  'hospital/loginHospital',
  async(hospitalData, thunkApi) =>{
    try {
      return await hospitalService.loginHospital(hospitalData)
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

      return thunkApi.rejectWithValue(message)
    }
  }
)

//Logout Patient

export const logoutHospital = createAsyncThunk(
  'hospital/logoutHospital',
  async(_, thunkApi) =>{
    try {
      return await hospitalService.logoutHospital()
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

      return thunkApi.rejectWithValue(message)
    }
  }
)
//Logout Patient

export const hospitalLoginStatus = createAsyncThunk(
  'hospital/hospitalLoginStatus',
  async(_, thunkApi) =>{
    try {
      return await hospitalService.hospitalLoginStatus()
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

      return thunkApi.rejectWithValue(message)
    }
  }
)
//Get Patient

//GET LOGIN STATUS
export const getHospital = createAsyncThunk(
  'hospital/getHospital',
  async(_, thunkApi) =>{
    try {
      return await hospitalService.getHospital()
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

      return thunkApi.rejectWithValue(message)
    }
  }
)

//UPDATE USER
export const updateHospital = createAsyncThunk(
  'hospital/updateHospital',
  async(hospitalData, thunkApi) =>{
    try {
      return await hospitalService.updateHospital(hospitalData)
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

      return thunkApi.rejectWithValue(message)
    }
  }
)

export const registerDoctor = createAsyncThunk(
    'hospital/registerDoctor',
    async (doctorData, thunkAPI) => {
          try {
                return await hospitalService.registerDoctor(doctorData)
          } catch (error) {
                const message = (error.response && error.response.data && error.response.data) || error.message || error.toString()
  
                return thunkAPI.rejectWithValue(message)
          }
    }
  )

export const getDoctorsByHospitalId = createAsyncThunk(
    'hospital/getDoctorsByHospitalId',
    async(_, thunkApi) =>{
      try {
        return await hospitalService.getDoctorsByHospitalId()
      } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
  
        return thunkApi.rejectWithValue(message)
      }
    }
  )



const hospitalSlice = createSlice({
  name: 'hospital',
  initialState,
  reducers: {
    HOSPITALRESET(state){
      state.isLoggedIn= false
      state.hospital= null
      state.hospitals=[]
      state.twoFactor= false
      state.isError= false
      state.isSuccess= false
      state.isLoading= false
      state.message= ""
}
  },
  extraReducers: (builder) => {
    builder

          .addCase(registerHospital.pending, (state, action) => {
                state.isLoading = true
          })
          .addCase(registerHospital.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isLoggedIn = true
                state.hospital = action.payload;
                console.log(action.payload)
                toast.success('Registration Succesful')
          })
          .addCase(registerHospital.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.payload
                state.hospital = null;
                toast.error(action.payload)
          })
          

          //Login User
          .addCase(loginHospital.pending, (state) => {
                state.isLoading = true;
              })
              .addCase(loginHospital.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isLoggedIn = true;
                state.hospital = action.payload;
                toast.success("Login Successful");
                console.log(action.payload);
              })
              .addCase(loginHospital.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.hospital = null;
                toast.error(action.payload);
                if (action.payload.includes('New browser')) {
                  state.twoFactor = true
                }
              })

          //Logout User
          .addCase(logoutHospital.pending, (state) => {
                state.isLoading = true;
              })
              .addCase(logoutHospital.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isLoggedIn = false;
                state.hospital = null;
                toast.success(action.payload);
                
              })
              .addCase(logoutHospital.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                
                toast.error(action.payload);
                
              })


          //LoginStatus User
          .addCase(hospitalLoginStatus.pending, (state) => {
                state.isLoading = true;
              })
              .addCase(hospitalLoginStatus.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isLoggedIn = action.payload;
                
              })
              .addCase(hospitalLoginStatus.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                
              })

          //getPatient
           // GET User
    .addCase(getHospital.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getHospital.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isLoggedIn = true;
          state.hospital = action.payload;
        })
        .addCase(getHospital.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          
          state.message = action.payload;
          toast.error(action.payload)
        })

     // UPDATE USER
     .addCase(updateHospital.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(updateHospital.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isLoggedIn = true;
          state.hospital = action.payload;
  
          toast.success('User Updated')
        })
        .addCase(updateHospital.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          toast.error(action.payload)
        })

        .addCase(registerDoctor.pending, (state, action) => {
            state.isLoading = true
      })
      .addCase(registerDoctor.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.doctor = action.payload;
            console.log(action.payload)
            toast.success('Registration Succesful')
      })
      .addCase(registerDoctor.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = action.payload
            state.doctor = null;
            toast.error(action.payload)
      })

            //GetDocsById
            .addCase(getDoctorsByHospitalId.pending, (state) => {
                state.isLoading = true;
              })
              .addCase(getDoctorsByHospitalId.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.doctors = action.payload;
              })
              .addCase(getDoctorsByHospitalId.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                toast.error(action.payload)
              })

  


}
});

export const {HOSPITALRESET} = hospitalSlice.actions

export const selectIsHospitalLoggedIn = (state) => state.hospital.isLoggedIn
export const selectHospital = (state) => state.hospital.hospital

export default hospitalSlice.reducer