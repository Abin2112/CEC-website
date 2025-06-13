import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">CEC Institute</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mumbai's premier computer education center, empowering students with industry-relevant certification courses and practical skills for successful IT careers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/courses" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Our Courses
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link to="/testimonials" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Success Stories
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  Shop No. 15, Tech Plaza,<br />
                  Andheri East, Mumbai - 400069<br />
                  Maharashtra, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+912226784531" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +91 22 2678 4531
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:info@techmasterinstitute.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  cec@institute.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Operating Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 text-sm">Mon - Sat: 9:00 AM - 8:00 PM</span>
              </div>
              <p className="text-gray-400 text-sm ml-6">Sunday: 10:00 AM - 4:00 PM</p>
            </div>
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Visit Our Center
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 TechMaster Institute. All rights reserved. | Empowering careers through quality education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;