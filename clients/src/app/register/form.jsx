'use client'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Alert } from '../components/ui/alert'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Button } from '../components/ui/button'
import GoogleButton from '../components/GoogleButton'

export const Form = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'
  const [name, setName] = useState({
    firstName: "",
    lastName: ""
  })
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    // Validate password and confirm password
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match')
      return
    } else {
      setPasswordError('')
    }

    // Validate email using a regular expression
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address')
      return
    } else {
      setEmailError('')
    }

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
    <form onSubmit={onSubmit} className="space-y-8 w-full sm:w-[400px]">
      <div className="flex w-full items-center gap-1.5 capitalize">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            className="w-full"
            required
            value={name.firstName}
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
            id="firstName"
            type="text"
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            className="w-full"
            required
            value={name.lastName}
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
            id="lastName"
            type="text"
          />
        </div>
      </div>
      <div className="grid w-full items-center gap-1.5 capitalize">
        <Label htmlFor="email">email address</Label>
        <Input
          className="w-full"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
        />
        {emailError && <div className="text-red-500 text-sm">{emailError}</div>}
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          className="w-full"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          className="w-full"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          id="confirmPassword"
          type="password"
        />
        {passwordError && <div className="text-red-500 text-sm">{passwordError}</div>}
      </div>
      {error && <Alert>{error}</Alert>}
      <div className="w-full">
        <Button className="w-full" size="lg">
          Login
        </Button>
        <GoogleButton />
      </div>
    </form>
  )
}