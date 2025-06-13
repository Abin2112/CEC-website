import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Software Developer at Infosys',
      course: 'Java Full Stack Development',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      testimonial: 'TechMaster Institute transformed my career completely. The practical approach and industry-relevant curriculum helped me land a job at Infosys with a 40% salary hike. The faculty support was exceptional!',
      salary: '₹8.5 LPA'
    },
    {
      id: 2,
      name: 'Rohit Patel',
      role: 'Data Scientist at TCS',
      course: 'Python & Data Science',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      testimonial: 'The Python and Data Science course exceeded my expectations. Real-world projects and hands-on learning made me job-ready. Within 3 months of completion, I got placed as a Data Scientist.',
      salary: '₹12 LPA'
    },
    {
      id: 3,
      name: 'Sneha Joshi',
      role: 'Digital Marketing Manager',
      course: 'Digital Marketing',
      image: 'https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      testimonial: 'From a complete beginner to managing digital campaigns for a startup - TechMaster made it possible. The course content is up-to-date with current industry trends and tools.',
      salary: '₹6 LPA'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Our Students
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories of career transformation and growth from our alumni who are now working in top companies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-6 right-6">
                <Quote className="h-8 w-8 text-blue-200" />
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-blue-600 font-medium">{testimonial.role}</p>
                  <p className="text-sm text-gray-600">{testimonial.course}</p>
                </div>
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
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Package: {testimonial.salary}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Your Success Story Starts Here
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of successful professionals who transformed their careers with our expert training and placement support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/testimonials"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                Read More Stories
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Start Your Journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;