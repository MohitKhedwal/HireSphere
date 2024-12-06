import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

function Herosection() {
  return (
    <div className=" w-full flex flex-col items-center h-full space-y-4   p-6 rounded-lg ">
      <h2 className="     text-center  px-4 py-3  text-[ #FFFACD]   w-1/4 rounded-full bg-[#B3DFFC] font-medium ">
        {" "}
        Largest{" "}
        <span className="text-red-500 text-2xl p-2 font-semibold">
          Job Hiring
        </span>{" "}
        Platform{" "}
      </h2>
      <h1 className="  text-4xl font-bold ">
        {" "}
        Search ,Apply & <br /> Get Your{" "}
        <span className=" text-[#065e5e]">Dream Job</span>{" "}
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        esse reprehenderit vitae adipisci, ipsa fugiat quod corrupti voluptas
        impedit. Quas cum nam expedita reprehenderit iste rem veniam assumenda
        fugit dolorum!
      </p>
      <div className=" w-[60%]  gap-2 flex  items-center justify-between text-center px-4 py-2 mt-2 rounded-full">
  <Input
    type="text"
    placeholder="Search for a job"
    className="outline-none  px-4 py-2 border-none text-gray-800 rounded-full"
  />
  <button className=" bg-[#003366]  text-[#FFD700] border border-[#FFD700] px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#FFD700] hover:text-[#003366] hover:border-[#003366] hover:shadow-lg active:bg-[#CCAC00]  active:border-[#002244] active:shadow-inner">
    
    
    <Search size={24} />
  </button>
</div>

    </div>
  ); 
}

export default Herosection;
