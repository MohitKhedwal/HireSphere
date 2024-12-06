import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { USER_API_ENDPOINT } from "@/utility/const";
import { RadioGroup } from "@radix-ui/react-radio-group";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import store from "@/mangement/store";
import { setLoading } from "@/mangement/authSlice";

function Signup() {
  const [data,setData]=useState({
   fullname:"",
   email:"",
   password:"",
   phoneno:"",
   role:"",
   file:"",
  });

const navigate=useNavigate()
const {loading}=useSelector(store=>store.auth)
const dispatch=useDispatch()
    
  const eventHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const fileHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.files[0]})
  } 

  const submitHandler= async (e)=>{
    e.preventDefault();
    const formData=new FormData()// used to send data in form format
    formData.append("fullname",data.fullname);
    formData.append("email",data.email);
    formData.append("password",data.password);
    formData.append("phoneno",data.phoneno);
    formData.append("role",data.role);
    formData.append("file",data.file); 
    // console.log(data)
    try{
      dispatch(setLoading(true))
      const res=await axios.post(`${USER_API_ENDPOINT}/register`,formData,{
        headers:{
          // tell type of data
          "Content-Type":"multipart/form-data",
        },
        withCredentials:true,
      }) // set endpoint
      if(res.data.success){
        navigate("/login")
        toast.success(res.data.message)
      }
    }catch(err){
      console.log(err.message)
      toast.error(err.response.data.message)
    }finally{
      dispatch(setLoading(false))
    }
  }

  return (
    <main>
      <Navbar />
      <div className="  font-Roboto h-screen flex items-center justify-center">
        <form
        onSubmit={submitHandler}
          action=""
          className="w-1/2 border border-black p-2 rounded-md bg-gray-100 shadow-md"
        >
          <h1 className=" font-Roboto font-bold text-xl mb-4 text-center">SignUp</h1>
        <div className="p-2">
        <Label>Full Name: </Label>
          <Input
             name="fullname"
            type="text"
            placeholder="Name"
            className="text-gray-700 leading-tight focus:outline-none"
         onChange={eventHandler}
           value={data.fullname}
        />

          <Label>Email: </Label>
          <Input
          name="email"
            type="text"
            placeholder="Email"
            className="text-gray-700 leading-tight focus:outline-none"
            onChange={eventHandler}
            value={data.email}
            />

          <Label>Phone Number: </Label>
          <Input
             name="phoneno"
            type="tel"
            placeholder="Phone"
            className="text-gray-700 leading-tight focus:outline-none"
            onChange={eventHandler} 
            value={data.phoneno}
            />
          <Label>Password: </Label>
          <Input
             name="password" // used to active input
            type="password"
            placeholder="Name"
            className="text-gray-700 leading-tight focus:outline-none"
            onChange={eventHandler}
            value={data.password}
            />
         <span className="flex items-center caret-transparent font-bold justify-start gap-4 mt-4 mb-4">
        <p className="flex  items-center gap-1">
        <Input
          type="radio"
          name="role"
          value ="Student"
          className="cursor-pointer size-5"
         // for radio
         checked={data.role==='Student'}
         onChange={eventHandler}
         
         />
          <Label htmlFor="r1" > Student</Label>
        </p>
         <p className="flex items-center gap-1">
         <Input
          type="radio"
          name="role"
          value ="Recruiter"
          checked={data.role==='Recruiter'}
         onChange={eventHandler}
          className="cursor-pointer size-5"
          />
          <Label htmlFor="r2" > Recruiter</Label>
         </p>
         </span>
         <Label>Profile: </Label>
          <Input
          accept="image/*"
            type="file"
            onChange={fileHandler}
            name="file"
            className="text-gray-700 leading-tight focus:outline-none"
          />

        </div>
        {
  loading?<Button className="w-full "> <Loader className='.r-2 h-4 w-4 animate-spin bg-[#003366] text-[#FFD700] border border-[#FFD700] px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#FFD700] hover:text-[#003366] hover:border-[#003366] hover:shadow-lg active:bg-[#CCAC00] active:border-[#002244] active:shadow-inner mb-6 flex items-center gap-2' /> Please Wait  </Button>:    <Button type="submit" className="w-full  bg-[#003366] text-[#FFD700] border border-[#FFD700] px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#FFD700] hover:text-[#003366] hover:border-[#003366] hover:shadow-lg active:bg-[#CCAC00] active:border-[#002244] active:shadow-inner mb-6 flex items-center gap-2 ">SignUp</Button>
}
       
          <span className="text-red text-semibold"> Already Have an Account <Link to="/login" className="text-blue-600">Login</Link></span>
        </form>
      </div>
    </main>
  );
}

export default Signup;
