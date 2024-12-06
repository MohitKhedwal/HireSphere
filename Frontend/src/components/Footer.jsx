import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"; // Use Lucide for icons

function Footer() {
  return (
    <footer className="bg-[#003366] text-[#FFD700]  px-5 py-5 pt-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {/* Logo and About Section */}
        <div className="text-center md:text-left">
          <h1 className="text-lg font-bold">
            Hire<span className="text-[#FFA500]">Sphere</span>
          </h1>
          <p className="mt-2 max-w-xs">
            Your trusted job portal connecting top professionals and employers.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <h2 className="text-base font-semibold">Follow Us</h2>
          <div className="flex justify-center gap-4 mt-3">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFA500] transition"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFA500] transition"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
         
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFA500] transition"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Address Section */}
        <div className="text-center md:text-right">
          <h2 className="text-base font-semibold">Contact Us</h2>
          <p className="mt-2">
            123 Talent Drive  
            <br />
            Sector 22, New Delhi  
            <br />
            India - 110001  
          </p>
          <p>Email: <a href="mailto:contact@hiresphere.com" className="hover:text-[#FFA500]">contact@hiresphere.com</a></p>
          <p>Phone: +91 9876543210</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 mt-4 pt-3 text-center text-xs">
        <p>© 2024 HireSphere. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
