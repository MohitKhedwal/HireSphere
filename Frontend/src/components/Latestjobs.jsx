import React from 'react'
import Jobcard from './Jobcard';

const cardArray = [
  { id: 1, title: 'Software Engineer', company: 'Company A' ,sal:"25LPA",location:"USA",pos:"30",type:"Full-Time",des:"JOB1"},
  { id: 2, title: 'Data Analyst', company: 'Company B',sal:"30LPA" ,location:"India",pos:"30",type:"Part-Time",des:"JOB 2"},
  { id: 3, title: 'Software Engineer', company: 'Company A' ,sal:"25LPA",location:"USA",pos:"30",type:"Full-Time",des:"JOB1"},
  { id: 4, title: 'Data Analyst', company: 'Company B',sal:"30LPA" ,location:"India",pos:"30",type:"Part-Time",des:"JOB 2"},
  
];
function Latestjobs() {
  return (
    <div className='max-w-7xl mx-auto '  >
      <h1 className=" my-7 text-center mx-auto  text-4xl font-bold "> <span className='text-red-500 '> Latest & New </span>Job Opening</h1>
      <div className='grid grid-cols-4  gap-4 my-5'>


      {/* card display */}
      {
        cardArray.map((job, index) => (
          <Jobcard className="border border-b-2" id={job.id} title={job.title} company={job.company} sal={job.sal} location={job.location} pos={job.pos} type={job.type} des={job.des}  />
        ))
      }
      </div>
    </div>
  )
}

export default Latestjobs
