import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, Filter, Search } from 'lucide-react';
import EnrollmentModal from '../components/EnrollmentModal';

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'programming', name: 'Programming' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'digital-marketing', name: 'Digital Marketing' },
    { id: 'cloud-computing', name: 'Cloud Computing' }
  ];

  const courses = [
    {
      id: 'java-fullstack',
      title: 'Java Full Stack Development',
      category: 'programming',
      duration: '6 months',
      students: '1,200+',
      rating: 4.8,
      price: '₹45,000',
      originalPrice: '₹60,000',
      level: 'Intermediate',
      description: 'Comprehensive Java development course covering Spring Boot, React, and enterprise applications.',
      highlights: ['Spring Boot', 'React.js', 'MySQL', 'REST APIs', 'Microservices', 'Git', 'Docker', 'AWS Basics'],
      certification: 'Oracle Certified Java Developer + Project Certificate'
    },
    {
      id: 'python-data-science',
      title: 'Python & Data Science',
      category: 'data-science',
      duration: '5 months',
      students: '800+',
      rating: 4.9,
      price: '₹42,000',
      originalPrice: '₹55,000',
      level: 'Beginner to Advanced',
      description: 'Master Python programming and dive deep into data science, machine learning, and AI.',
      highlights: ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'Deep Learning', 'Tableau', 'SQL', 'Statistics'],
      certification: 'Microsoft Azure Data Science + Python Institute Certificate'
    },
    {
      id: 'mern-stack',
      title: 'MERN Stack Development',
      category: 'web-development',
      duration: '4 months',
      students: '950+',
      rating: 4.7,
      price: '₹38,000',
      originalPrice: '₹50,000',
      level: 'Intermediate',
      description: 'Build modern web applications using MongoDB, Express.js, React, and Node.js.',
      highlights: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'JWT', 'Socket.io', 'GraphQL'],
      certification: 'Meta React Developer + MERN Stack Certificate'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Mastery',
      category: 'digital-marketing',
      duration: '3 months',
      students: '600+',
      rating: 4.6,
      price: '₹25,000',
      originalPrice: '₹35,000',
      level: 'Beginner',
      description: 'Complete digital marketing course covering SEO, SEM, social media, and analytics.',
      highlights: ['SEO/SEM', 'Google Ads', 'Facebook Ads', 'Analytics', 'Content Marketing', 'Email Marketing'],
      certification: 'Google Ads + Google Analytics + Facebook Blueprint Certified'
    },
    {
      id: 'aws-cloud',
      title: 'AWS Cloud Computing',
      category: 'cloud-computing',
      duration: '4 months',
      students: '450+',
      rating: 4.8,
      price: '₹48,000',
      originalPrice: '₹65,000',
      level: 'Intermediate',
      description: 'Master Amazon Web Services and become a certified cloud architect.',
      highlights: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudFormation', 'DevOps', 'Docker', 'Kubernetes'],
      certification: 'AWS Solutions Architect Associate'
    },
    {
      id: 'cyber-security',
      title: 'Cyber Security Fundamentals',
      category: 'programming',
      duration: '5 months',
      students: '320+',
      rating: 4.7,
      price: '₹52,000',
      originalPrice: '₹70,000',
      level: 'Intermediate',
      description: 'Comprehensive cybersecurity training covering ethical hacking and security analysis.',
      highlights: ['Ethical Hacking', 'Network Security', 'Penetration Testing', 'SIEM', 'Incident Response'],
      certification: 'CEH (Certified Ethical Hacker) + CompTIA Security+'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.highlights.some(highlight => highlight.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleEnrollClick = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Professional Certification Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Industry-aligned courses designed to accelerate your career with hands-on projects, expert mentorship, and guaranteed placement support.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              />
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{course.price}</div>
                    <div className="text-sm text-gray-500 line-through">{course.originalPrice}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {course.description}
                </p>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">What you'll learn:</div>
                  <div className="flex flex-wrap gap-1">
                    {course.highlights.slice(0, 6).map((highlight, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md">
                        {highlight}
                      </span>
                    ))}
                    {course.highlights.length > 6 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        +{course.highlights.length - 6} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-4 p-3 bg-green-50 rounded-lg">
                  <div className="text-sm font-medium text-green-800 mb-1">Certification:</div>
                  <div className="text-xs text-green-700">{course.certification}</div>
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
                    className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-medium"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Filter className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>

      <EnrollmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedCourse={selectedCourse}
      />
    </div>
  );
};

export default CoursesPage;