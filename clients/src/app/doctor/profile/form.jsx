"use client";

import { useState } from "react";
import { Alert } from "../../components/ui/alert";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";

export const Form = ({ profile }) => {
  const [formData, setFormData] = useState(profile);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // Here you would typically send the updated profile data to your backend
      console.log("Updated profile:", formData);
      // Add your API call here
      // If successful, you might want to update the profile state in the parent component
      // For example: updateProfile(formData)
    } catch (err) {
      console.log(err);
      setError("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-[20px]">
      {error && <Alert variant="destructive">{error}</Alert>}

      <div className="flex items-center gap-[15px]">
        <div className="flex flex-col gap-[9px]">
          <Label
            htmlFor="firstName"
            className="text-[#454545] text-[14px] font-medium uppercase"
          >
            First Name
          </Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]"
          />
        </div>
        <div className="flex flex-col gap-[9px]">
          <Label
            htmlFor="lastName"
            className="text-[#454545] text-[14px] font-medium uppercase"
          >
            Last Name
          </Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[9px]">
        <Label
          htmlFor="speciality"
          className="text-[#454545] text-[14px] font-medium uppercase"
        >
          Speciality
        </Label>
        <Input
          type="text"
          name="speciality"
          id="speciality"
          value={formData.speciality}
          onChange={handleInputChange}
          className="outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]"
        />
      </div>

      <div className="flex flex-col gap-[9px]">
        <Label
          htmlFor="liscenseNo"
          className="text-[#454545] text-[14px] font-medium uppercase"
        >
          License Number
        </Label>
        <Input
          type="text"
          name="liscenseNo"
          id="liscenseNo"
          value={formData.liscenseNo}
          onChange={handleInputChange}
          className="outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]"
        />
      </div>

      <div className="flex flex-col gap-[9px]">
        <Label
          htmlFor="phoneNo"
          className="text-[#454545] text-[14px] font-medium uppercase"
        >
          Phone Number
        </Label>
        <Input
          type="text"
          name="phoneNo"
          id="phoneNo"
          value={formData.phoneNo}
          onChange={handleInputChange}
          className="outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]"
        />
      </div>

      <div className="flex flex-col gap-[9px]">
        <Label
          htmlFor="email"
          className="text-[#454545] text-[14px] font-medium uppercase"
        >
          Email Address
        </Label>
        <Input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          disabled
          className="outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[16px] px-[20px]"
        />
      </div>

      <div className="flex items-center justify-center">
        <Button
          type="submit"
          className="bg-[#2AA0CD] p-[10px] rounded-[20px] w-[324px] text-[16px] font-normal text-white"
        >
          Update Profile
        </Button>
      </div>
    </form>
  );
};
