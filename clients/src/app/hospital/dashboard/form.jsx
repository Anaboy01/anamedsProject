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
    <form action="" className='flex flex-col gap-[20px] w-full'>
            
           <div className='flex items-center gap-[15px] w-[70%]'>
                <div className='flex flex-col gap-[9px] w-[50%]'>
                    <label htmlFor="name" className='text-[#454545] text-[14px] font-medium uppercase'>Name</label>
                    <input type="text" name="name" id="name" defaultValue={profile.name} className='outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]'/>
                </div>
                <div className='flex flex-col gap-[9px] w-[50%]'>
                    <label htmlFor="description" className='text-[#454545] text-[14px] font-medium uppercase'>Description</label>
                    <input type="text" name="description" id="description" defaultValue={profile.description} className='outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]'/>
                </div>
           </div>
           
           <div className='flex items-center gap-[15px] w-[70%]'>
                <div className='flex flex-col gap-[9px] w-[50%]'>
                    <label htmlFor="phoneNo" className='text-[#454545] text-[14px] font-medium uppercase'>Phone Number</label>
                    <input type="text" name="phoneNo" id="phoneNo" defaultValue={profile.phoneNo} className='outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]'/>
                </div>
                <div className='flex flex-col gap-[9px] w-[50%]'>
                    <label htmlFor="email" className='text-[#454545] text-[14px] font-medium uppercase'>email</label>
                    <input type="email" disabled name="email" id="email" defaultValue={profile.email} className='outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]'/>
                </div>
           </div>

           <div className='flex items-center gap-[15px] w-[70%]'>
                <div className='flex flex-col gap-[9px] w-[50%]'>
                    <label htmlFor="website" className='text-[#454545] text-[14px] font-medium uppercase'>website</label>
                    <input type="text" name="website" id="website" defaultValue={profile.website} className='outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]'/>
                </div>
                <div className='flex flex-col gap-[9px] w-[50%]'>
                    <label htmlFor="state" className='text-[#454545] text-[14px] font-medium uppercase'>State</label>
                    <input type="text"  name="state" id="state" defaultValue={profile.state} className='outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]'/>
                </div>
           </div>

           <div className='flex items-center gap-[15px] w-[70%]'>
                <div className='flex flex-col gap-[9px] w-[50%]'>
                    <label htmlFor="city" className='text-[#454545] text-[14px] font-medium uppercase'>city</label>
                    <input type="text" name="city" id="city" defaultValue={profile.city} className='outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]'/>
                </div>
                <div className='flex flex-col gap-[9px] w-[50%]'>
                    <label htmlFor="country" className='text-[#454545] text-[14px] font-medium uppercase'>country</label>
                    <input type="text" name="country" id="country" defaultValue={profile.country} className='outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]'/>
                </div>
           </div>

           <div className='flex items-center justify-center w-[70%]'>
            <button className='bg-[#2AA0CD] p-[10px] rounded-[20px] w-[353px] text-[16px] font-normal'>Update Profile</button>
          </div>
                

        </form>
  )
}