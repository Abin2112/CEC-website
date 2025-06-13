import React, { useState } from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import EnrollmentModal from './EnrollmentModal';

const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Transform Your Career Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't wait for the perfect moment. Start your journey towards a successful IT career with industry-leading courses and 100% placement support.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full lg:w-auto flex items-center justify-center px-10 py-4 bg-white text-blue-800 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Enroll Now - Limited Seats
            </button>
            
            <a
              href="tel:+912226784531"
              className="w-full lg:w-auto flex items-center justify-center px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-blue-800 transition-all duration-200"
            >
              <Phone className="mr-3 h-6 w-6" />
              Call +91 22 2678 4531
            </a>
            
            <a
              href="mailto:info@techmasterinstitute.com"
              className="w-full lg:w-auto flex items-center justify-center px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-blue-800 transition-all duration-200"
            >
              <Mail className="mr-3 h-6 w-6" />
              Email Us
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-lg">
              <div className="text-3xl font-bold text-white mb-2">Next Batch</div>
              <div className="text-blue-100">Starts March 15, 2024</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-lg">
              <div className="text-3xl font-bold text-white mb-2">Limited Seats</div>
              <div className="text-blue-100">Only 20 seats per batch</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-lg">
              <div className="text-3xl font-bold text-white mb-2">Early Bird</div>
              <div className="text-blue-100">25% off till Feb 28</div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-blue-100 text-sm">
              🏆 Trusted by 5,000+ students | 95% placement rate | Industry expert faculty
            </p>
          </div>
        </div>
      </div>

      <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default CTASection;