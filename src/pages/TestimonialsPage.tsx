import React from 'react';
import { Star, Quote, MapPin, Building } from 'lucide-react';

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Software Developer',
      company: 'Infosys',
      course: 'Java Full Stack Development',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      testimonial: 'TechMaster Institute completely transformed my career. I was working in a non-tech role and always wanted to switch to software development. The Java Full Stack course was comprehensive and practical. The faculty provided excellent support, and the hands-on projects made me job-ready. Within 2 months of completion, I got placed at Infosys with a 40% salary hike.',
      salary: '₹8.5 LPA',
      location: 'Mumbai',
      beforeSalary: '₹3.5 LPA'
    },
    {
      id: 2,
      name: 'Rohit Patel',
      role: 'Data Scientist',
      company: 'TCS',
      course: 'Python & Data Science',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      testimonial: 'The Python and Data Science course exceeded all my expectations. Coming from a mechanical engineering background, I was worried about making the transition to data science. But the structured curriculum, real-world projects, and mentorship made it seamless. The placement support was outstanding - they prepared me for interviews and connected me with the right opportunities.',
      salary: '₹12 LPA',
      location: 'Pune',
      beforeSalary: '₹4 LPA'
    },
    {
      id: 3,
      name: 'Sneha Joshi',
      role: 'Digital Marketing Manager',
      company: 'Zomato',
      course: 'Digital Marketing',
      image: 'https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      testimonial: 'As a fresh graduate with no work experience, I was struggling to find a good job. The Digital Marketing course at TechMaster gave me practical skills that employers actually want. The course covered everything from SEO to social media marketing and Google Ads. The live projects and case studies made all the difference.',
      salary: '₹6 LPA',
      location: 'Mumbai',
      beforeSalary: 'Fresher'
    },
    {
      id: 4,
      name: 'Amit Kumar',
      role: 'Cloud Architect',
      company: 'Amazon',
      course: 'AWS Cloud Computing',
      image: 'https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      testimonial: 'The AWS course was perfectly structured and covered everything from basics to advanced cloud architecture. The instructors had real industry experience and shared practical insights. The hands-on labs were excellent, and I got to work on actual AWS services. This course helped me transition from system admin to cloud architect.',
      salary: '₹18 LPA',
      location: 'Bangalore',
      beforeSalary: '₹6 LPA'
    },
    {
      id: 5,
      name: 'Kavita Singh',
      role: 'Full Stack Developer',
      company: 'Flipkart',
      course: 'MERN Stack Development',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      testimonial: 'I was working as a manual tester and wanted to move into development. The MERN stack course was perfect for me. The project-based learning approach helped me build a strong portfolio. The career guidance sessions were very helpful in preparing for interviews. Now I am working as a full stack developer at Flipkart.',
      salary: '₹15 LPA',
      location: 'Bangalore',
      beforeSalary: '₹5 LPA'
    },
    {
      id: 6,
      name: 'Rajesh Gupta',
      role: 'Cyber Security Analyst',
      company: 'Wipro',
      course: 'Cyber Security',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      testimonial: 'The Cyber Security course was comprehensive and up-to-date with current threats and technologies. The ethical hacking modules were particularly interesting. The instructors made complex security concepts easy to understand. The certification preparation was excellent, and I cleared my CEH exam on the first attempt.',
      salary: '₹10 LPA',
      location: 'Mumbai',
      beforeSalary: '₹4.5 LPA'
    }
  ];

  const stats = [
    { number: '5,000+', label: 'Success Stories' },
    { number: '95%', label: 'Placement Rate' },
    { number: '40%', label: 'Average Salary Hike' },
    { number: '50+', label: 'Hiring Partners' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Success Stories That Inspire
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Real stories from our alumni who transformed their careers and are now working 
              in top companies with impressive salary packages.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-200">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-blue-600 font-medium">{testimonial.role}</p>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <Building className="h-4 w-4 mr-1" />
                      <span>{testimonial.company}</span>
                      <span className="mx-2">•</span>
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
                <Quote className="h-8 w-8 text-blue-200 flex-shrink-0" />
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.testimonial}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="bg-blue-50 px-3 py-2 rounded-lg">
                  <div className="text-xs text-blue-600 font-medium">Course Completed</div>
                  <div className="text-sm font-semibold text-blue-800">{testimonial.course}</div>
                </div>
                <div className="text-right">
                  <div className="bg-green-50 px-3 py-2 rounded-lg">
                    <div className="text-xs text-green-600 font-medium">Current Package</div>
                    <div className="text-lg font-bold text-green-800">{testimonial.salary}</div>
                    {testimonial.beforeSalary !== 'Fresher' && (
                      <div className="text-xs text-gray-500">From {testimonial.beforeSalary}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful professionals who transformed their careers with our expert training and placement support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/courses"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Explore Courses
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Talk to Counselor
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;