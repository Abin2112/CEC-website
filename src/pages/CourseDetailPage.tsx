import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, Star, Award, CheckCircle, Calendar, MapPin, Phone } from 'lucide-react';
import EnrollmentModal from '../components/EnrollmentModal';

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock course data - in a real app, this would come from an API
  const courseData: Record<string, any> = {
    'java-fullstack': {
      title: 'Java Full Stack Development',
      duration: '6 months',
      students: '1,200+',
      rating: 4.8,
      price: '₹45,000',
      originalPrice: '₹60,000',
      level: 'Intermediate',
      description: 'Become a complete Java Full Stack Developer with our comprehensive 6-month program. Master both frontend and backend technologies used by top companies.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Spring Boot', 'React.js', 'MySQL', 'REST APIs', 'Microservices', 'Git', 'Docker', 'AWS Basics'],
      curriculum: [
        {
          module: 'Core Java Fundamentals',
          duration: '4 weeks',
          topics: ['OOP Concepts', 'Collections Framework', 'Exception Handling', 'Multithreading', 'JDBC']
        },
        {
          module: 'Spring Framework & Boot',
          duration: '6 weeks',
          topics: ['Spring Core', 'Spring MVC', 'Spring Boot', 'Spring Data JPA', 'Spring Security']
        },
        {
          module: 'Frontend Development',
          duration: '6 weeks',
          topics: ['HTML5 & CSS3', 'JavaScript ES6+', 'React.js', 'Redux', 'Bootstrap']
        },
        {
          module: 'Database & APIs',
          duration: '4 weeks',
          topics: ['MySQL', 'REST API Development', 'Postman', 'API Documentation', 'Database Design']
        },
        {
          module: 'DevOps & Deployment',
          duration: '4 weeks',
          topics: ['Git & GitHub', 'Docker', 'AWS EC2', 'CI/CD', 'Application Deployment']
        },
        {
          module: 'Capstone Project',
          duration: '2 weeks',
          topics: ['Full Stack Application', 'Code Review', 'Project Presentation', 'Portfolio Development']
        }
      ],
      instructor: {
        name: 'Rajesh Kumar',
        experience: '12+ years',
        expertise: 'Senior Java Architect at TCS',
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      certification: 'Oracle Certified Java Developer + Project Certificate',
      prerequisites: ['Basic programming knowledge', 'Understanding of computer fundamentals'],
      outcomes: [
        'Build complete web applications using Java and React',
        'Deploy applications to cloud platforms',
        'Work with databases and create REST APIs',
        'Follow industry best practices and coding standards',
        'Collaborate using Git and modern development tools'
      ]
    }
    // Add more course data as needed
  };

  const course = courseData[courseId as string];

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h1>
          <p className="text-gray-600">The course you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {course.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">{course.students} enrolled</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-gray-700">{course.rating} ({course.students} reviews)</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-8">
                <div className="text-3xl font-bold text-gray-900">{course.price}</div>
                <div className="text-xl text-gray-500 line-through">{course.originalPrice}</div>
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                  25% OFF
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full lg:w-auto bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Enroll Now - Limited Seats
              </button>
            </div>

            <div>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* What You'll Learn */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.outcomes.map((outcome: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
              <div className="space-y-6">
                {course.curriculum.map((module: any, index: number) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">{module.module}</h3>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {module.duration}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {module.topics.map((topic: string, topicIndex: number) => (
                        <div key={topicIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Instructor</h2>
              <div className="flex items-start space-x-6">
                <img
                  src={course.instructor.image}
                  alt={course.instructor.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.instructor.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{course.instructor.expertise}</p>
                  <p className="text-gray-600">
                    With {course.instructor.experience} of industry experience, our instructor brings 
                    real-world expertise to the classroom, ensuring you learn industry-relevant skills.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Course Info Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">{course.price}</div>
                <div className="text-lg text-gray-500 line-through mb-2">{course.originalPrice}</div>
                <div className="text-green-600 font-semibold">Save ₹15,000</div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 mb-4"
              >
                Enroll Now
              </button>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Level</span>
                  <span className="font-medium">{course.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Students</span>
                  <span className="font-medium">{course.students}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Certificate</span>
                  <Award className="h-4 w-4 text-yellow-500" />
                </div>
              </div>

              <div className="border-t pt-4 mt-4">
                <h4 className="font-semibold text-gray-900 mb-3">Course Includes:</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Lifetime access to course materials</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Industry certification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>100% placement support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Hands-on projects</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h3>
              <div className="space-y-3">
                <a
                  href="tel:+912226784531"
                  className="flex items-center space-x-3 text-blue-600 hover:text-blue-700"
                >
                  <Phone className="h-5 w-5" />
                  <span>+91 22 2678 4531</span>
                </a>
                <div className="flex items-start space-x-3 text-gray-600">
                  <MapPin className="h-5 w-5 mt-1" />
                  <span className="text-sm">Andheri East, Mumbai</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm">Next batch: March 15, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnrollmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedCourse={course.title}
      />
    </div>
  );
};

export default CourseDetailPage;