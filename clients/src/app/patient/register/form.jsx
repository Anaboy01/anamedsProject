'use client'
import { Alert } from '../../components/ui/alert'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { Button } from '../../components/ui/button'
import { FormField } from '@/app/components/ui/formField'
import GoogleButton from '../../components/GoogleButton'
import { FaTimes } from 'react-icons/fa'
import { BsCheck2All } from 'react-icons/bs'

export const Form = ({
  formData,
  handleInputChange,
  onSubmit,
  uCase,
  num,
  sChar,
  passLength,
  error
}) => {
  const { firstName, lastName, email, password, password2 } = formData; // Update here



  const switchIcon = (condition) => {
    const checkIcon = <BsCheck2All color="green" size={15} />;
    const timesIcon = <FaTimes color="red" size={15} />;
    return condition ? checkIcon : timesIcon;
  };

  return (
    <form onSubmit={onSubmit} className="space-y-8 w-full sm:w-[400px]">
      <div className="flex w-full items-center gap-1.5 capitalize">
        <FormField className="items-start">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            className="w-full"
            required
            value={firstName}
            onChange={handleInputChange}
            id="firstName"
            type="text"
            name="firstName"
          />
        </FormField>
        <FormField className="items-start">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            className="w-full"
            required
            value={lastName}
            onChange={handleInputChange}
            id="lastName"
            type="text"
            name="lastName"
          />
        </FormField>
      </div>
      <FormField className="grid w-full items-center gap-1.5 capitalize">
        <Label htmlFor="email">Email Address</Label>
        <Input
          className="w-full"
          required
          value={email}
          onChange={handleInputChange}
          id="email"
          type="email"
          name="email"
        />
      </FormField>
      <FormField className="grid w-full items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          className="w-full"
          required
          value={password}
          onChange={handleInputChange}
          id="password"
          type="password"
          name="password"
        />
      </FormField>
      <FormField className="grid w-full items-center gap-1.5">
        <Label htmlFor="password2">Confirm Password</Label> {/* Updated ID here */}
        <Input
          className="w-full"
          required
          value={password2}
          onChange={handleInputChange}
          id="password2" 
          type="password"
          name="password2"  
        />
      </FormField>
      <div className="flex items-center text-[2px]">
        <span className={`text-[2px] mr-1 ${uCase ? 'text-green' : 'text-red'}`}>
          {switchIcon(uCase)}
        </span>
        <span className={`mr-1 text-[2px] ${num ? 'text-green' : 'text-red'}`}>
          {switchIcon(num)}
        </span>
        <span className={`mr-1 text-[2px] ${sChar ? 'text-green' : 'text-red'}`}>
          {switchIcon(sChar)}
        </span>
        <span className={`mr-1 text-[2px] ${passLength ? 'text-green' : 'text-red'}`}>
          {switchIcon(passLength)}
        </span>
      </div>
      {error && <Alert>{error}</Alert>}
      <div className="w-full">
        {/* <button type="submit" className="w-full">Register</button> */}
        <Button className="w-full rounded-[20px]" type="submit" size="lg">
          Login
        </Button>
        <div className='block'>
          <GoogleButton />
        </div>
      </div>
    </form>
  );
}
