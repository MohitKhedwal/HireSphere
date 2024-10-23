import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@radix-ui/react-radio-group";
import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <main>
      <Navbar />
      <div className="  font-Roboto h-screen flex items-center justify-center">
        <form
          action=""
          className="w-1/2 border border-black p-2 rounded-md bg-gray-100 shadow-md"
        >
          <h1 className=" font-Roboto font-bold text-xl mb-4 text-center">SignUp</h1>
        <div className="p-2">
        <Label>Full Name: </Label>
          <Input
            type="text"
            placeholder="Name"
            className="text-gray-700 leading-tight focus:outline-none"
          />

          <Label>Email: </Label>
          <Input
            type="text"
            placeholder="Email"
            className="text-gray-700 leading-tight focus:outline-none"
          />

          <Label>Phone Number: </Label>
          <Input
            type="tel"
            placeholder="Name"
            className="text-gray-700 leading-tight focus:outline-none"
          />
          <Label>Password: </Label>
          <Input
            type="password"
            placeholder="Name"
            className="text-gray-700 leading-tight focus:outline-none"
          />
         <span className="flex items-center caret-transparent font-bold justify-start gap-4 mt-4 mb-4">
        <p className="flex  items-center gap-1">
        <Input
          type="radio"
          name="role"
          value ="Student"
          className="cursor-pointer size-5"
          />
          <Label htmlFor="r1" > Student</Label>
        </p>
         <p className="flex items-center gap-1">
         <Input
          type="radio"
          name="role"
          value ="Recruiter"
          className="cursor-pointer size-5"
          />
          <Label htmlFor="r2" > Recruiter</Label>
         </p>
         </span>
         <Label>Profile: </Label>
          <Input
          accept="image/*"
            type="file"
            
            className="text-gray-700 leading-tight focus:outline-none"
          />

        </div>
      <Button type="submit" className="w-full m-2  ">Sign Up</Button>
          <span className="text-red text-semibold"> Already Have an Account <Link to="/login" className="text-blue-600">Login</Link></span>
        </form>
      </div>
    </main>
  );
}

export default Signup;
