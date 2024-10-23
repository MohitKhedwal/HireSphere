import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { BusFront, LogOut, User2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import Hire from "../assets/H.png"

function Navbar() {
  // make blinking line on text disable caret-transparent
    const user=false
    // bg-[#003366]
    // text-[#FFD700]
    // button-[#FFDA6B]

  return (
    <>
      <main className="flex bg-[#003366]  font-Roboto caret-transparent justify-evenly  text-[#FFD700]     items-center   h-16 w-full ">
        <div className="bg-[#003366]  text-[#FFD700] ">
         <Link to="/" className="flex  items-center gap-3"> <img src={Hire} className=" rounded-full w-14 h-14" alt="HireSphere" />
          <h1 className="text-3xl font-bold">
            Hire<span className="text-3xl font-bold caret-transparent text-[#FFA500]">Sphere</span>
          </h1>
         </Link>
        </div>
        <div className=" flex gap-12   font-2xl items-center  font-semibold">
          <ul className=" flex gap-x-4 font-2xl cursor-pointer  ">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
        </div>
        {
            user?(
                <Popover>
          <PopoverTrigger>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-80   text-[#FFD700] ">
            <div className=" flex gap-2 items-center justify-center w-full">
              <Avatar>
                <AvatarImage src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
              </Avatar>
              <h2 className=" font-medium">Mohit Khedwal</h2>
            </div>
            <span className="text-sm  w-full block text-[#FFD700 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
              asperiores!
            </span>
            <div className="  w-full items-center    flex-row justify-between">
              <p className="flex mt-2 items-center">
              <User2 />
              <Button
                className= "bg-[#003366] text-[#FFD700] border border-[#FFD700] px-4 py-2 rounded transition-all duration-300 hover:bg-[#FFD700] hover:text-[#003366] hover:border-[#003366] hover:shadow-lg active:bg-[#CCAC00] active:border-[#002244] active:shadow-inner w-28 gap-2"
                variant="outline"
              >
                View profile
              </Button>
              </p>

              <p className="flex mt-2 items-center">
              <LogOut />
              <Button
                className=" font-medium  text-gray-900 w-28"
                variant="outline"
              >
                Logout
              </Button>
              </p>
            </div>
          </PopoverContent>
        </Popover>
            ):(
                <div className=" flex items-center gap-3">
                  <Link to="/login"><Button variant="outline " className="bg-[#003366] text-[#FFD700] border border-[#FFD700] px-4 py-2 rounded transition-all duration-300 hover:bg-[#FFD700] hover:text-[#003366] hover:border-[#003366] hover:shadow-lg active:bg-[#CCAC00] active:border-[#002244] active:shadow-inner" >Login</Button>
                  </Link>
                    <Link to="/signup"> <Button variant="outline " className="bg-[#003366] text-[#FFD700] border border-[#FFD700] px-4 py-2 rounded transition-all duration-300 hover:bg-[#FFD700] hover:text-[#003366] hover:border-[#003366] hover:shadow-lg active:bg-[#CCAC00] active:border-[#002244] active:shadow-inner" >Signup</Button>
                    </Link> 
                    </div>
            )
        }
      </main>
    </>
  );
}

export default Navbar;
