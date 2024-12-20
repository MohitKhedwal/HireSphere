import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {  Bookmark } from 'lucide-react'
import React from 'react'
import { Badge } from './ui/badge'
function Mainjobcard({ companyName, location, jobTitle, jobDescription, tags, postDate, companyphoto="data:image/jpeg;base64,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" }) {
  return (
    <div className='p-4 mt-2   border w-full hover:border-black bg-gradient-to-r from-blue-100 to-purple-200 animate-fadeIn rounded-md shadow-md border-gray-300'>
      {/* Header Section */}
      <div className='flex items-center justify-between'>
        <Button variant="outline" className="p-2" size="icon">
          <Avatar>
            <AvatarImage src={companyphoto} alt="Company Logo" />
          </Avatar>
        </Button>
        <div className='flex gap-2'>
          <p className='mt-1 text-gray-700 text-sm'>{postDate}</p>
          <Button variant="outline" className="rounded-full hover:bg-gray-100" size="icon">
            <Bookmark />
          </Button>
        </div>
      </div>

      {/* Job Info Section */}
      <div className="mt-2">
        <h1 className="text-xl font-semibold text-indigo-600">{companyName}</h1> {/* Company Name */}
        <p className="text-gray-500">{location}</p>
      </div>

      {/* Job Description Section */}
      <div className="mt-2">
        <h1 className='font-bold text-lg text-black'>{jobTitle}</h1> {/* Job Title */}
        <p className="text-gray-700 mt-2">{jobDescription}</p>
        <div className='flex gap-2 mt-2 flex-wrap'>
          {tags.map((tag, index) => (
            <Badge key={index} className="bg-[#FFD700] text-[#003366] font-bold px-2 py-1 rounded-md">{tag}</Badge>
          ))}
        </div>
        <div className='flex items-center gap-4 mt-4'>
          <Button className="bg-blue-600 text-white hover:bg-gray-700 px-4 py-2 rounded-md">
            Details
          </Button>
          <Button className="bg-red-400 text-white hover:bg-gray-700 px-4 py-2 rounded-md">
            Save for later
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Mainjobcard;



