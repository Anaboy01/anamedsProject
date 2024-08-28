'use client'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Alert } from '../../components/ui/alert'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { Button } from '../../components/ui/button'
import GoogleButton from '../../components/GoogleButton'

export const Form = ({profile}) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
        callbackUrl
      })
      console.log('Res', res)
      if (!res?.error) {
        router.push(callbackUrl)
      } else {
        setError('Invalid email or password')
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <p>loading</p>

  return (
    <form action="" className='flex flex-col gap-[20px]'>
            
           <div className='flex items-center gap-[15px]'>
                <div className='flex flex-col gap-[9px]'>
                    <label htmlFor="firstName" className='text-[#454545] text-[14px] font-medium uppercase'>First Name</label>
                    <input type="text" name="firstName" id="firstName" defaultValue={profile.firstName} className='text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]'/>
                </div>
                <div className='flex flex-col gap-[9px]'>
                    <label htmlFor="lastName" className='text-[#454545] text-[14px] font-medium uppercase'>Last Name</label>
                    <input type="text" name="lastName" id="lastName" defaultValue={profile.lastName} className='text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]'/>
                </div>
           </div>

           <div className='flex flex-col gap-[9px]'>
                    <label htmlFor="speciality" className='text-[#454545] text-[14px] font-medium uppercase '>Speciality</label>
                    <input type="text" name="speciality" id="speciality" defaultValue={profile.speciality} className='text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]'/>
            </div>
           <div className='flex flex-col gap-[9px]'>
                    <label htmlFor="liscenseNo" className='text-[#454545] text-[14px] font-medium uppercase'>license number</label>
                    <input type="text" name="liscenseNo" id="liscenseNo" defaultValue={profile.liscenseNo} className='text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]'/>
            </div>
           <div className='flex flex-col gap-[9px]'>
                    <label htmlFor="phoneNo" className='text-[#454545] text-[14px] font-medium uppercase'>phone number</label>
                    <input type="text" name="phoneNo" id="phoneNo" defaultValue={profile.phoneNo} className='text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]'/>
            </div>
           <div className='flex flex-col gap-[9px]'>
                    <label htmlFor="email" className='text-[#454545] text-[14px] font-medium uppercase'>email address</label>
                    <input type="text" name="email" id="email" defaultValue={profile.email} className='text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]'/>
          </div>


          <div className='flex items-center justify-center'>
            <button className='bg-[#2AA0CD] p-[10px] rounded-[20px] w-[324px] text-[16px] font-normal'>Update Profile</button>
          </div>

                

        </form>
  )
}