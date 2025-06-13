import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, ChevronRight } from 'lucide-react';
import EnrollmentModal from './EnrollmentModal';

const FeaturedCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const courses = [
    {
      id: 'java-fullstack',
      title: 'Java Full Stack Development',
      duration: '6 months',
      students: '1,200+',
      rating: 4.8,
      price: '₹45,000',
      originalPrice: '₹60,000',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Master Java, Spring Boot, React, and database technologies to become a full-stack developer.',
      highlights: ['Spring Boot', 'React.js', 'MySQL', 'REST APIs', 'Microservices']
    },
    {
      id: 'python-data-science',
      title: 'Python & Data Science',
      duration: '5 months',
      students: '800+',
      rating: 4.9,
      price: '₹42,000',
      originalPrice: '₹55,000',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Learn Python programming, data analysis, machine learning, and visualization techniques.',
      highlights: ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'Data Visualization']
    },
    {
      id: 'web-development',
      title: 'Web Development (MEAN/MERN)',
      duration: '4 months',
      students: '950+',
      rating: 4.7,
      price: '₹38,000',
      originalPrice: '₹50,000',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Build modern web applications using MongoDB, Express.js, Angular/React, and Node.js.',
      highlights: ['MongoDB', 'Express.js', 'Angular/React', 'Node.js', 'REST APIs']
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      duration: '3 months',
      students: '600+',
      rating: 4.6,
      price: '₹25,000',
      originalPrice: '₹35,000',
      image: 'https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Master SEO, SEM, social media marketing, and analytics to boost online presence.',
      highlights: ['SEO/SEM', 'Social Media', 'Google Analytics', 'Content Marketing', 'PPC']
    }
  ];

  const handleEnrollClick = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Certification Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-aligned courses designed to fast-track your career in technology with hands-on projects and expert mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  25% OFF
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.highlights.slice(0, 3).map((highlight, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      {highlight}
                    </span>
                  ))}
                  {course.highlights.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{course.highlights.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students} enrolled</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{course.originalPrice}</span>
                  </div>
                  <div className="text-green-600 font-semibold text-sm">Save ₹{parseInt(course.originalPrice.replace('₹', '').replace(',', '')) - parseInt(course.price.replace('₹', '').replace(',',''))}</div>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleEnrollClick(course.title)}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                  >
                    Enroll Now
                  </button>
                  <Link
                    to={`/course/${course.id}`}
                    className="flex items-center justify-center px-4 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/courses"
            className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
          >
            View All Courses
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      
      <EnrollmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedCourse={selectedCourse}
      />
    </section>
  );
};

export default FeaturedCourses;