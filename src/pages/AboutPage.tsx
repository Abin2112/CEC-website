import React from 'react';
import { Award, Users, Building, Target, Eye, Heart } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Students Trained' },
    { icon: Award, number: '15+', label: 'Certification Courses' },
    { icon: Building, number: '12+', label: 'Years of Excellence' },
    { icon: Target, number: '95%', label: 'Placement Success' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in education, ensuring every student receives world-class training.'
    },
    {
      icon: Users,
      title: 'Student-Centric',
      description: 'Our students are at the heart of everything we do. Their success is our primary goal.'
    },
    {
      icon: Award,
      title: 'Industry Relevance',
      description: 'Our curriculum is constantly updated to match current industry demands and trends.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We maintain the highest standards of integrity in our teaching and business practices.'
    }
  ];

  const team = [
    {
      name: 'Dr. Amit Sharma',
      role: 'Founder & Director',
      experience: '15+ years',
      expertise: 'Computer Science Education',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Priya Patel',
      role: 'Academic Head',
      experience: '12+ years',
      expertise: 'Curriculum Development',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Senior Java Instructor',
      experience: '10+ years',
      expertise: 'Full Stack Development',
      image: 'https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Sarah Johnson',
      role: 'Placement Director',
      experience: '8+ years',
      expertise: 'Corporate Relations',
      image: 'https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About TechMaster Institute
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming careers through quality computer education since 2012. We are Mumbai's premier 
              institute for professional IT training and certification courses.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2012 with a vision to bridge the gap between academic learning and industry requirements, 
                  TechMaster Institute has been at the forefront of computer education in Mumbai.
                </p>
                <p>
                  What started as a small training center has now grown into one of Mumbai's most trusted 
                  institutes for IT education, with over 5,000 successful graduates working in top companies 
                  across India and abroad.
                </p>
                <p>
                  Our commitment to quality education, industry-relevant curriculum, and personalized attention 
                  has made us the preferred choice for students looking to build successful careers in technology.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our Institute"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl">
                <div className="text-2xl font-bold">12+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To empower individuals with cutting-edge technology skills and knowledge, enabling them to 
                excel in their careers and contribute meaningfully to the digital transformation of society. 
                We are committed to providing world-class education that bridges the gap between academic 
                learning and industry requirements.
              </p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be the leading computer education institute in India, recognized for excellence in 
                teaching, innovation in curriculum design, and success in student placements. We envision 
                a future where every student who walks through our doors becomes a successful professional 
                in the technology industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our approach to education.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced faculty and staff are dedicated to your success and bring years of 
              industry experience to the classroom.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-2">{member.experience}</p>
                <p className="text-xs text-gray-500">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Infrastructure */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-6">World-Class Infrastructure</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              State-of-the-art facilities designed to provide the best learning environment for our students.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Modern Computer Labs</h3>
                <p className="text-blue-100">50+ high-performance computers with latest software and tools</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Smart Classrooms</h3>
                <p className="text-blue-100">Interactive whiteboards and multimedia learning systems</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Library & Study Area</h3>
                <p className="text-blue-100">Extensive collection of technical books and quiet study spaces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;