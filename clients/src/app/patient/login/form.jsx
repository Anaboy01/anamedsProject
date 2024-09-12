'use client'
import { Alert } from '../../components/ui/alert'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { Button } from '../../components/ui/button'
import { FormField } from '@/app/components/ui/formField'
import GoogleButton from '../../components/GoogleButton'

export const Form = ({ formData, handleInputChange, loginPatient, error, loading }) => {
  const { email, password } = formData;

  if (loading) return <p>Loading...</p>

  return (
    <form onSubmit={loginPatient} className="space-y-10 w-full sm:w-[400px] font-mavenPro">
      <FormField className="grid w-full items-center gap-[9px]">
        <Label htmlFor="email" className="text-[14px] uppercase">Email Address</Label>
        <Input
          className="w-full py-[24px] px-[20px]"
          required
          value={email}
          onChange={handleInputChange}
          id="email"
          name="email"
          type="email"
        />
      </FormField>
      <FormField className="grid w-full items-center gap-1.5">
        <Label htmlFor="password" className="text-[14px] uppercase">Password</Label>
        <Input
          className="w-full py-[24px] px-[20px]"
          required
          value={password}
          onChange={handleInputChange}
          id="password"
          name="password"
          type="password"
        />
      </FormField>
      {error && <Alert>{error}</Alert>}
      <div className="w-full">
        <Button className="w-full rounded-[20px]" type="submit" size="lg">
          Login
        </Button>
        <div className="block">
          <GoogleButton />
        </div>
      </div>
    </form>
  )
}
