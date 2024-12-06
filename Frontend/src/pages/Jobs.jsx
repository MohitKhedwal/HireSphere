import FilterCard from '@/components/FilterCard';
import Footer from '@/components/Footer'
import Jobcard from '@/components/Jobcard'
import Mainjobcard from '@/components/Mainjobcard';
import Navbar from '@/components/Navbar'
import { SpaceIcon } from 'lucide-react';
import React from 'react'



const cardArray=[1,2,3,4,5,6,7,8]
function Jobs() {
  return (
    <div className="w-full   mx-auto  shadow-md bg-gradient-to-r from-[#DFFFE0] to-[#B3FFF1]">
    <Navbar />

   <div className=" flex w-full mx-auto p-2     mt-5 ">
  {/* Filter Sidebar */}
 <div className='w-1/4 m-2'>
 <FilterCard />
 </div>

  {/* Job Listings */}
  <div className="flex-1 w-1/2 flex-col h-[88vh] overflow-y-auto gap-y-5 m-2">
    {cardArray.length <= 0 ? (
      <span>No Job Found!</span>
    ) : (
      cardArray.map((job, index) => (
        <Mainjobcard
        className="w-full mt-2 "
          key={index}
          companyName={job.companyName || "TechCorp"}
          location={job.location || "India"}
          jobTitle={job.jobTitle || "Frontend Developer"}
          jobDescription={job.jobDescription || "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
          tags={job.tags || ["12", "Part-time", "20 LPA"]}
          postDate={job.postDate || "2 days ago"}
        />
      ))
    )}
  </div>
</div>

   <Footer/> 
      
    
  
  </div>
  )
}

export default Jobs
