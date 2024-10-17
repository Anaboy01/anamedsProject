"use client";
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';
import GoogleButton from '../../components/GoogleButton';
import { Alert } from '../../components/ui/alert';

export const Form = ({ email, password, onChangeEmail, onChangePassword, onSubmit, error }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-10 w-full sm:w-[400px]">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email Address</Label>
        <Input
          className="w-full"
          required
          value={email}
          onChange={onChangeEmail}
          id="email"
          type="email"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          className="w-full"
          required
          value={password}
          onChange={onChangePassword}
          id="password"
          type="password"
        />
      </div>
      {error && <Alert>{error}</Alert>}
      <div className="w-full">
        <Button className="w-full" size="lg">
          Login
        </Button>
        {/* <div className='block'><GoogleButton /></div> */}
      </div>
    </form>
  );
};
