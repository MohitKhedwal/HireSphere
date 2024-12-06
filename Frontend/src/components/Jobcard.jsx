import React from 'react'
import { Badge } from './ui/badge'

function Jobcard({title="Job Title",company="Company Name",sal="12 LPA",location="India",pos="12",type="Full-Time",des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, adipisci quasi magni pariatur dolore accusantium aperiam cumque quaerat? Mollitia, unde?"}) {
  return (
    <div className=' hover:bg-gray-100 hover:shadow-lg rounded-lg shadow-md p-3 border bg-gray-200 border-gray-100'>
     <div>
     <h1 className='text-[#003366] font-bold text-xl'>{company}</h1>
     <p className=' text-lg'>{location}</p>
     </div>
     <div>
        <h1 className='text-red-500 text-lg  font-bold'>{title}</h1>
       <p className='text-sm text-gray-600'>{des}</p>
     </div>
     <div className='flex gap-2 mt-1 '>
        <Badge className={'bg-[#FFD700] text-[#003366]   font-bold '}>{pos} </Badge>     
        <Badge className={'bg-[#FFD700] text-[#003366]   font-bold '}>{type} </Badge>     
        <Badge className={'bg-[#FFD700] text-[#003366]   font-bold '}>{sal} </Badge>     
 
           </div>
      
    </div>
  )
}

export default Jobcard
