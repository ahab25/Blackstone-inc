'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaAward, FaUsers, FaHandshake, FaLightbulb, FaShieldAlt, FaChartLine, FaTools } from 'react-icons/fa'

export default function About() {
  const values = [
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in everything we do.',
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for perfection in every project, setting the highest standards for quality and craftsmanship.',
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We embrace new technologies and methods to deliver cutting-edge construction solutions.',
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: 'Safety',
      description: 'The safety of our team and clients is our top priority in every project we undertake.',
    },
  ]

  const achievements = [
    { number: '100+', label: 'Projects Completed', icon: <FaChartLine className="w-6 h-6" /> },
    { number: '10+', label: 'Years of Excellence', icon: <FaAward className="w-6 h-6" /> },
    { number: '50+', label: 'Team Members', icon: <FaUsers className="w-6 h-6" /> },
    { number: '98%', label: 'Client Satisfaction', icon: <FaHandshake className="w-6 h-6" /> },
  ]

  const timeline = [
    {
      year: '2015',
      title: 'Foundation',
      description: 'Blackstone Incorporated was founded with a vision to revolutionize the construction industry.',
    },
    {
      year: '2019',
      title: 'Expansion',
      description: 'Expanded operations to serve commercial and industrial clients across multiple states.',
    },
    {
      year: '2022',
      title: 'Innovation',
      description: 'Introduced sustainable building practices and green construction technologies.',
    },
    {
      year: '2024',
      title: 'Recognition',
      description: 'Received multiple industry awards for excellence in construction and project management.',
    },
    {
      year: '2025',
      title: 'Future',
      description: 'Continuing to lead the industry with innovative solutions and exceptional service.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blackstone-black via-blackstone-gray to-blackstone-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-blackstone-yellow">Blackstone</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Building excellence for over 10 years with unwavering commitment to quality and innovation
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-blackstone-black mb-6">
                Our <span className="text-blackstone-yellow">Story</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2015, Blackstone Incorporated has grown from a small local construction company
                  into a leading industry player known for excellence, innovation, and reliability. Our journey
                  began with a simple mission: to build structures that stand the test of time while exceeding
                  client expectations.
                </p>
                <p>
                  Over the past 10+ years, we've completed over 100 projects ranging from residential homes
                  to large-scale commercial and industrial facilities. Our success is built on a foundation
                  of skilled craftsmanship, cutting-edge technology, and an unwavering commitment to quality.
                </p>
                <p>
                  Today, Blackstone Incorporated continues to push the boundaries of construction excellence,
                  embracing sustainable practices, innovative building techniques, and state-of-the-art
                  project management to deliver exceptional results for our clients.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                alt="Construction site"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blackstone-black mb-4">
              Our <span className="text-blackstone-yellow">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center border-t-4 border-blackstone-yellow"
              >
                <motion.div 
                  className="text-blackstone-yellow mb-4 flex justify-center"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-blackstone-black mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-blackstone-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-blackstone-yellow">Achievements</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-blackstone-yellow mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-300 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blackstone-black mb-4">
              Our <span className="text-blackstone-yellow">Journey</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Milestones that shaped who we are today
            </p>
          </div>
          <div className="relative">
            {/* Vertical line - hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blackstone-yellow"></div>
            {/* Vertical line for mobile */}
            <div className="md:hidden absolute left-4 sm:left-6 w-1 h-full bg-blackstone-yellow"></div>
            
            <div className="space-y-8 md:space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Mobile and Desktop Card */}
                  <div className={`w-full md:flex-1 ${
                    index % 2 === 0 
                      ? 'md:pr-12 md:text-right pl-12 md:pl-0' 
                      : 'md:pl-12 md:text-left pl-12 md:pr-0'
                  } ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border-l-4 md:border-l-4 border-blackstone-yellow hover:shadow-xl transition-shadow">
                      <div className="text-blackstone-yellow font-bold text-xl md:text-2xl mb-2">{item.year}</div>
                      <h3 className="text-lg md:text-xl font-bold text-blackstone-black mb-2">{item.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Circle */}
                  <div className={`absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 md:w-16 md:h-16 bg-blackstone-yellow rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 flex-shrink-0`}>
                    <span className="text-blackstone-black font-bold text-sm md:text-base">{index + 1}</span>
                  </div>
                  
                  {/* Empty space for desktop alternating layout */}
                  <div className={`hidden md:block flex-1 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} ${index % 2 !== 0 ? 'md:order-1' : ''}`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blackstone-black mb-4">
              Our <span className="text-blackstone-yellow">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blackstone-yellow to-blackstone-yellow-dark rounded-full flex items-center justify-center">
                <FaUsers className="w-16 h-16 text-blackstone-black" />
              </div>
              <h3 className="text-2xl font-bold text-blackstone-black mb-2">Expert Engineers</h3>
              <p className="text-gray-600">
                Licensed professionals with advanced degrees and years of hands-on experience
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blackstone-yellow to-blackstone-yellow-dark rounded-full flex items-center justify-center">
                <FaHandshake className="w-16 h-16 text-blackstone-black" />
              </div>
              <h3 className="text-2xl font-bold text-blackstone-black mb-2">Project Managers</h3>
              <p className="text-gray-600">
                Skilled coordinators ensuring projects stay on schedule and within budget
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blackstone-yellow to-blackstone-yellow-dark rounded-full flex items-center justify-center">
                <FaTools className="w-16 h-16 text-blackstone-black" />
              </div>
              <h3 className="text-2xl font-bold text-blackstone-black mb-2">Skilled Craftsmen</h3>
              <p className="text-gray-600">
                Master tradespeople delivering precision and quality in every detail
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

