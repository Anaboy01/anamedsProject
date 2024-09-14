import React, { useEffect } from 'react'

import { toast } from 'react-toastify'
import patientService from '../redux/features/patientApi/patientService'
import { useRouter } from 'next/navigation'



const useRedirectLoggedPatient = (path) => {
      const router = useRouter()

      useEffect(() => {

            let isLoggedIn;

            const redirectLoggedOutPatient = async () => {
                  try {
                        isLoggedIn = await patientService.loginStatus()
                  } catch (error) {
                        console.log(error.message)
                  }

                  if(!isLoggedIn){
                        toast.info('Session expired, please login to continue')
                        router.push(path)
                        return
                  }
            }

            redirectLoggedOutPatient()

      }, [path, router])
}

export default useRedirectLoggedPatient