'use client'
import { signIn } from 'next-auth/react'
import { Alert } from '../../components/ui/alert'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { Button } from '../../components/ui/button'
import GoogleButton from '../../components/GoogleButton'

export const Form = ({ profile }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Logic for form submission can go here, such as making API calls.
    console.log('Form submitted');
  }

  return (
    <form action="" className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
      <div className="flex items-center gap-[15px]">
        <div className="flex flex-col gap-[9px]">
          <label htmlFor="firstName" className="text-[#454545] text-[14px] font-medium uppercase">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            defaultValue={profile.firstName}
            className="outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]"
          />
        </div>
        <div className="flex flex-col gap-[9px]">
          <label htmlFor="lastName" className="text-[#454545] text-[14px] font-medium uppercase">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            defaultValue={profile.lastName}
            className="outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[9px]">
        <label htmlFor="speciality" className="text-[#454545] text-[14px] font-medium uppercase">
          Speciality
        </label>
        <input
          type="text"
          name="speciality"
          id="speciality"
          defaultValue={profile.speciality}
          className="outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]"
        />
      </div>
      <div className="flex flex-col gap-[9px]">
        <label htmlFor="liscenseNo" className="text-[#454545] text-[14px] font-medium uppercase">
          License Number
        </label>
        <input
          type="text"
          name="liscenseNo"
          id="liscenseNo"
          defaultValue={profile.liscenseNo}
          className="outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]"
        />
      </div>
      <div className="flex flex-col gap-[9px]">
        <label htmlFor="phoneNo" className="text-[#454545] text-[14px] font-medium uppercase">
          Phone Number
        </label>
        <input
          type="text"
          name="phoneNo"
          id="phoneNo"
          defaultValue={profile.phoneNo}
          className="outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]"
        />
      </div>
      <div className="flex flex-col gap-[9px]">
        <label htmlFor="email" className="text-[#454545] text-[14px] font-medium uppercase">
          Email Address
        </label>
        <input
          type="text"
          name="email"
          id="email"
          disabled
          defaultValue={profile.email}
          className="outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]"
        />
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-[#2AA0CD] p-[10px] rounded-[20px] w-[324px] text-[16px] font-normal"
        >
          Update Profile
        </button>
      </div>
    </form>
  )
}
