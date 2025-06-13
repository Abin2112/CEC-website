import React from 'react';
import { Users, Award, Briefcase, Clock } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: '5,000+',
      label: 'Students Trained',
      description: 'Successful graduates across all programs'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Certification Courses',
      description: 'Industry-recognized programs'
    },
    {
      icon: Briefcase,
      number: '95%',
      label: 'Placement Rate',
      description: 'Students placed in top companies'
    },
    {
      icon: Clock,
      number: '12+',
      label: 'Years Experience',
      description: 'Training excellence since 2012'
    }
  ];

  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Our Success by Numbers
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Over a decade of excellence in computer education and career transformation.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-2xl mx-auto mb-4 group-hover:bg-opacity-30 transition-all duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-blue-100 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white bg-opacity-10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Take the first step towards a rewarding IT career. Our expert counselors are ready to guide you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+912226784531"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Call Now: +91 22 2678 4531
            </a>
            <a
              href="mailto:info@techmasterinstitute.com"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;