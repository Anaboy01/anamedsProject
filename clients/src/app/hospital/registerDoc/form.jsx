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
    <form action="" className='flex flex-col gap-[20px] w-full font-mavenPro font-medium'>
            
           <div className='flex items-center gap-[15px] w-[70%]'>
                <div className='flex flex-col gap-[9px] w-[50%]'>
                    <Label htmlFor="fullName" className='text-[#454545] text-[14px] font-medium uppercase'>fullName</Label>
                    <Input type="text" name="fullName" id="fullName" className='outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[24px] px-[20px]'/>
                </div>
                <div className='flex flex-col gap-[9px] w-[50%]'>
                    <Label htmlFor="email" className='text-[#454545] text-[14px] font-medium uppercase'>Email</Label>
                    <Input type="email" name="email" id="email"  className='outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[24px] px-[20px]'/>
                </div>
           </div>
           
           <div className='flex items-center gap-[15px] w-[70%]'>

                <div className='flex flex-col gap-[9px] w-[50%]'>
                    <Label htmlFor="speciality" className='text-[#454545] text-[14px] font-medium uppercase'>speciality</Label>
                    <Input type="email" name="speciality" id="speciality" className='outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[24px] px-[20px]'/>
                </div>

                <div className='flex flex-col gap-[9px] w-[50%]'>
                    <Label htmlFor="phoneNo" className='text-[#454545] text-[14px] font-medium uppercase  '>Phone Number</Label>
                    <Input type="tel" name="phoneNo" id="phoneNo"   className='text-[14px] outline-[1px] outline-[#2AA0CD] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[24px] px-[20px]'/>
                </div>
                
           </div>

           <div className='flex items-center gap-[15px] w-[70%]'>
                <div className='flex flex-col gap-[9px] w-[50%]'>
                    <Label htmlFor="licenseNo" className='text-[#454545] text-[14px] font-medium uppercase'>License number</Label>
                    <Input type="text" name="licenseNo" id="licenseNo"  className='outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[24px] px-[20px]'/>
                </div>
                <div className='flex flex-col gap-[9px] w-[50%]'>
                    <Label htmlFor="rank" className='text-[#454545] text-[14px] font-medium uppercase'>rank</Label>
                    <Input type="text" name="rank" id="rank"  className=' outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[24px] px-[20px]'/>
                </div>
           </div>

           <div className='flex items-center gap-[15px] w-[70%]'>
                <div className='flex flex-col gap-[9px] w-[50%]'>
                    <Label htmlFor="password" className='text-[#454545] text-[14px] font-medium uppercase'>password</Label>
                    <Input type="text" name="password" id="password" className='outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[24px] px-[20px]'/>
                </div>
                <div className='flex flex-col gap-[9px] w-[50%]'>
                    <Label htmlFor="confirmPassword" className='text-[#454545] text-[14px] font-medium uppercase'>Confirm Password</Label>
                    <Input type="text" name="confirmPassword" id="confirmPassword"  className='outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[24px] px-[20px]'/>
                </div>
           </div>

           <div className='flex items-center justify-center w-[70%]'>
            <Button className='bg-[#2AA0CD] p-[14px] rounded-[20px] w-[50%] text-[16px] font-inter font-normal'>Register</Button>
          </div>
                

        </form>
  )
}