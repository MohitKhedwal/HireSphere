import Jobcard from '@/components/Jobcard'
import Navbar from '@/components/Navbar'
import React from 'react'


const randomjobs=[1,2,3,4]
function Browse() {
  return (
    <div>
      <Navbar/>
      <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10'>Search Results ({randomjobs.length})</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        randomjobs.map((job) => {
                            return (
                                <Jobcard key={job._id} job={job}/>
                            )
                        })
                    }

     
    </div>
    </div>
    </div>
  )
}

export default Browse
