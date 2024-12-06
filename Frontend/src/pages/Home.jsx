import Category from '@/components/Category'
import Footer from '@/components/Footer'
import Herosection from '@/components/Herosection'
import Latestjobs from '@/components/Latestjobs'
import Navbar from '@/components/Navbar'
import React from 'react'

function Home() {
  return (
   
   
    <div className="w-full   mx-auto  shadow-md bg-gradient-to-r from-[#DFFFE0] to-[#B3FFF1]">
      <Navbar />
     <div className='p-2'>
     <Herosection />
     <Category/>
     <Latestjobs/>

     </div>
     <Footer/> 
        
      
    
    </div>
 
  
  )
}

export default Home
