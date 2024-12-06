import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Contact, Github, Mail, Pen } from 'lucide-react'
import React from 'react'

function Profile() {
  const isResume = true
  return (
    <div className='shadow-md bg-gradient-to-r from-[#DFFFE0] to-[#B3FFF1]'>
      <Navbar />
      <div className="mt-4  h-screen max-w-7xl mx-auto flex flex-col items-center p-6 rounded-lg shadow-md">
        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <Avatar className="w-48 h-48 shadow-lg">
            <AvatarImage src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
          </Avatar>
        </div>

        {/* Name and Bio */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Full Name</h1>
          <p className="text-gray-600 mt-2">
            Add Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium repellendus cupiditate quam corrupti officia voluptates ipsa totam minus nisi.
          </p>
        </div>

        {/* Edit Button */}
        <Button
          className="bg-[#003366] text-[#FFD700] border border-[#FFD700] px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#FFD700] hover:text-[#003366] hover:border-[#003366] hover:shadow-lg active:bg-[#CCAC00] active:border-[#002244] active:shadow-inner mb-6 flex items-center gap-2"
          variant="outline"
        >
          <Pen />
          Edit
        </Button>

        {/* Contact Information */}
        <div className="flex gap-6 justify-center mb-6">
          <div className="flex items-center gap-2 text-gray-700">
            <Mail className="text-[#003366]" />
            <span>Mohit@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Contact className="text-[#003366]" />
            <span>999999999</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Github className="text-[#003366]" />
            <span>hello</span>
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full mb-6">
          <h1 className="text-lg font-semibold text-gray-800 mb-2">Skills</h1>
          <div className="flex flex-wrap gap-2">
            {["Html", "CSS", "JS"].map((item, index) => (
              <Badge key={index} className="m-1 bg-[#003366] text-[#FFD700] px-3 py-1 rounded-md shadow-sm">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        {/* Resume Section */}
        <div className="w-full max-w-sm">
          <Label className="text-md font-bold text-gray-800 mb-2 block">Resume</Label>
          {isResume ? (
            <a
              target="_blank"
              href="https://www.youtube.com/"
              className="text-[#003366] underline hover:text-[#002244] transition-all"
            >
              Click Here
            </a>
          ) : (
            <h1 className="text-gray-600">No Resume Uploaded</h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile
