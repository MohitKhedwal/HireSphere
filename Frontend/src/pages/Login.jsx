import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup } from '@/components/ui/radio-group';
import { setLoading, setUser } from '@/mangement/authSlice';
import store from '@/mangement/store';
import { USER_API_ENDPOINT } from '@/utility/const';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';


const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });
    const { loading } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user}=useSelector(store=>store.auth)

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });
            console.log(res.data);
            if (res.data.success) {
                dispatch(setUser(res.data));
                console.log(res.data)
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }
    }
    // useEffect(()=>{
    //     if(user){
    //         navigate("/");
    //     }
    // },[])
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Login</h1>
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="Email"
                        />
                    </div>

                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="password"
                        />
                    </div>
                    <div className='flex items-center justify-between'>
                    {/* <Label>Role:</Label> */}
                    <div className="flex items-center gap-4 p-2">
          <RadioGroup className="flex items-center gap-4 my-5">
            <Label htmlFor="role">Role:</Label>
            <label className="flex items-center gap-2">
              <Input
                type="radio"
                name="role"
                value="Student"
                checked={input.role === "Student"}
                onChange={changeEventHandler}
                className="cursor-pointer"
              />
              <span>Student</span>
            </label>
            <label className="flex items-center gap-2">
              <Input
                type="radio"
                name="role"
                value="Recruiter"
                checked={input.role === "Recruiter"}
                onChange={changeEventHandler}
                className="cursor-pointer"
              />
              <span>Recruiter</span>
            </label>
            </RadioGroup>
          </div>
                    </div>
                    {
                    loading ? (
                        <Button className="w-full my-4 flex items-center justify-center bg-[#003366] text-[#FFD700] border border-[#FFD700] px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#FFD700] hover:text-[#003366] hover:border-[#003366] hover:shadow-lg active:bg-[#CCAC00] active:border-[#002244] active:shadow-inner">
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Please wait
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          className="w-full my-4 bg-[#003366] text-[#FFD700] border border-[#FFD700] px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#FFD700] hover:text-[#003366] hover:border-[#003366] hover:shadow-lg active:bg-[#CCAC00] active:border-[#002244] active:shadow-inner"
                        >
                          Login
                        </Button>
                      )
                      
                    }
                    <span className='text-sm'>Don't have an account? <Link to="/signup" className='text-blue-600'>Signup</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Login