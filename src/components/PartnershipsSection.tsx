import React from 'react';
import { Building2, Handshake, TrendingUp, Users } from 'lucide-react';

const PartnershipsSection = () => {
  const partners = [
    { name: 'TCS', logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Infosys', logo: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Wipro', logo: 'https://images.pexels.com/photos/3183174/pexels-photo-3183174.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Accenture', logo: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'IBM', logo: 'https://images.pexels.com/photos/3183191/pexels-photo-3183191.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Cognizant', logo: 'https://images.pexels.com/photos/3183199/pexels-photo-3183199.jpeg?auto=compress&cs=tinysrgb&w=200' }
  ];

  const placementStats = [
    {
      icon: Building2,
      title: 'Top Companies',
      value: '50+',
      description: 'Hiring partners across industries'
    },
    {
      icon: Handshake,
      title: 'Placement Rate',
      value: '95%',
      description: 'Students successfully placed'
    },
    {
      icon: TrendingUp,
      title: 'Salary Hike',
      value: '40%',
      description: 'Average salary increase'
    },
    {
      icon: Users,
      title: 'HR Network',
      value: '200+',
      description: 'Active recruiters in network'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Industry Partnerships & Placements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strong industry connections ensure our students get placed in top companies with competitive packages.
          </p>
        </div>

        {/* Placement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {placementStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="font-semibold text-gray-900 mb-1">{stat.title}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Partner Companies */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Hiring Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center">
                <div className="text-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-16 h-16 object-cover rounded-lg mx-auto mb-2 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="text-sm font-medium text-gray-900">{partner.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Process */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Placement Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Skill Assessment</h4>
              <p className="text-sm text-gray-600">Comprehensive evaluation of technical and soft skills</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Interview Preparation</h4>
              <p className="text-sm text-gray-600">Mock interviews and resume building sessions</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Company Matching</h4>
              <p className="text-sm text-gray-600">Connect with companies matching your profile</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                4
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Job Placement</h4>
              <p className="text-sm text-gray-600">Secure placement with ongoing career support</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Launch Your Career?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join our placement program and get direct access to top companies. Our dedicated placement team will guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Get Placement Support
              </a>
              <a
                href="tel:+912226784531"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Speak to Placement Officer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;