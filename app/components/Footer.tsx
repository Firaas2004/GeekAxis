import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-[#282930] text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image src={logo} alt="Geek Axis Logo" height={48} width={48} className="h-12 mb-4" />
            <h2 className="text-lg font-bold">Geek Axis</h2>
            <p className="text-sm mt-2">
              Driving innovation with cutting-edge solutions for businesses
              worldwide.
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about-us" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/customer" className="hover:text-gray-400">
                  Customer
                </a>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="/mes" className="hover:text-gray-400">
                  Manufacturing Execution System
                </a>
              </li>
              <li>
                <a href="/erp" className="hover:text-gray-400">
                  Enterprise Resource Planning
                </a>
              </li>
              <li>
                <a href="/qms" className="hover:text-gray-400">
                  Quality Management System
                </a>
              </li>
              <li>
                <a href="/scp" className="hover:text-gray-400">
                  Supply Chain Planning
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-sm mb-4">Email: contact@geekaxis.com</p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="hover:text-gray-400"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-gray-400"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-gray-400"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">
            &copy; 2024 Geek Axis. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="/terms" className="hover:text-gray-400">
              Terms and Conditions
            </a>
            <a href="/privacy" className="hover:text-gray-400">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
