'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FaHardHat, 
  FaTools, 
  FaBuilding, 
  FaAward, 
  FaShieldAlt, 
  FaLeaf, 
  FaLightbulb, 
  FaHeart 
} from 'react-icons/fa'

export default function Home() {
  const whyChooseUs = [
    {
      icon: <FaHardHat className="w-8 h-8" />,
      title: 'Expert Team',
      description: 'Our team consists of highly skilled professionals including licensed engineers, certified project managers, master craftsmen, and experienced supervisors with decades of combined experience. We invest in continuous training to keep our team updated with the latest industry standards and construction technologies.',
    },
    {
      icon: <FaTools className="w-8 h-8" />,
      title: 'Quality Materials',
      description: 'We source only the finest materials from trusted suppliers who meet or exceed industry standards. Our rigorous selection process ensures every component meets our exacting standards for performance, longevity, and aesthetic appeal.',
    },
    {
      icon: <FaBuilding className="w-8 h-8" />,
      title: 'Timely Delivery',
      description: 'We have developed proven project management systems to ensure on-time completion. Our detailed planning and clear communication channels ensure we complete projects on time and within budget, every single time.',
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      title: 'Award Winning',
      description: 'Blackstone has been recognized for excellence in construction with multiple industry awards and certifications. Our commitment to quality and innovation has earned us recognition in best construction practices and project management excellence.',
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      title: 'Quality',
      description: 'Throughout our industry, we have built a solid reputation for delivering high-quality, responsive services to our clients, business partners, and fellow employees. Our deep commitment to quality is a central focus of our operating philosophy. It is how we achieve client service and operational excellence that exceeds expectations.',
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: 'Safety',
      description: 'At Blackstone, safety is paramount and serves as a core value that guides how we work in the field, at our sites, in our offices, and in our personal lives. Safety is an all-encompassing way of how we do business and places employee well-being and environmental stewardship at the forefront of every company operation worldwide.',
    },
    {
      icon: <FaLeaf className="w-8 h-8" />,
      title: 'Sustainability',
      description: 'We are committed to business practices, operations, and projects that improve economic, environmental, and societal outcomes. Our comprehensive skills and expertise are a valued resource to clients around the world in support of their sustainability objectives.',
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: 'We think different',
      description: 'We consider our clients\' requirement as their aesthetic expression. We believe our projects must reflect engineering finesse with a vision to provide absolute satisfaction for our clients. Blackstone believes in teamwork that brings in innovative ideas, creative designs and efficient development thus maintaining finest standards of business practice.',
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: 'Serenity',
      description: 'Blackstone has established effective and efficient quality processes and management practices, which support continual improvement. Throughout Blackstone, our work is supported by a strong culture of quality that emphasizes the importance of individual commitment to the success of our clients, as well as our responsibility to our shareholders and society.',
    },
  ]

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '10+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Expert Team Members' },
  ]

  const services = [
    {
      title: 'Commercial & Institutional Building Construction',
      description: 'State-of-the-art commercial and institutional facilities including office buildings, schools, and healthcare facilities.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    },
    {
      title: 'Roads and Related Structures Construction',
      description: 'Comprehensive road construction services including highways, streets, and parking lots with proper infrastructure.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    },
    {
      title: 'Solar System Installation',
      description: 'Complete solar energy solutions for residential and commercial properties to reduce energy costs.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blackstone-black via-blackstone-gray to-blackstone-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-4 py-2 bg-blackstone-yellow/20 backdrop-blur-sm rounded-full border border-blackstone-yellow/30"
          >
            <span className="text-blackstone-yellow font-semibold">Building Excellence Since 2015</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Building Your
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block text-blackstone-yellow"
              >
                Vision to Reality
              </motion.span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              Professional construction services with unmatched quality, reliability, and expertise.
              Transforming ideas into exceptional structures.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden rounded-lg"
            >
              <Link
                href="/contact"
                className="relative px-8 py-4 bg-blackstone-yellow text-blackstone-black font-bold text-lg rounded-lg hover:bg-blackstone-yellow-dark transition-all shadow-lg block btn-primary z-10"
              >
                <span className="relative z-10">Get Started</span>
              </Link>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden rounded-lg"
            >
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-blackstone-yellow text-blackstone-yellow font-bold text-lg rounded-lg hover:bg-blackstone-yellow/10 hover:border-blackstone-yellow-dark transition-all block relative z-10"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                  className="text-4xl md:text-5xl font-bold text-blackstone-black mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Blackstone Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blackstone-black mb-6">
              Why Choose <span className="text-blackstone-yellow">Blackstone</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
              We are company of engineers and constructors. We see engineering not as a science but as an art form. 
              Creating works that not only serve a functional purpose but are also aesthetically pleasing in a simple and elegant way. 
              We draw from our diverse portfolio of personnel and work experience to bring you the best designs and ideas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 border-blackstone-yellow"
              >
                <motion.div 
                  className="text-blackstone-yellow mb-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-blackstone-black mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-blackstone-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-blackstone-yellow">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive construction solutions for every need
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-blackstone-gray rounded-xl overflow-hidden shadow-2xl hover:shadow-blackstone-yellow/20 transition-all group"
              >
                <motion.div 
                  className="relative h-64 overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blackstone-black/80 to-transparent"></div>
                </motion.div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      href="/services"
                      className="text-blackstone-yellow font-semibold hover:underline inline-flex items-center gap-2 transition-all group"
                    >
                      Learn More
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="inline-block"
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/services"
                className="inline-block px-8 py-4 bg-blackstone-yellow text-blackstone-black font-bold text-lg rounded-lg hover:bg-blackstone-yellow-dark transition-all shadow-lg btn-primary relative overflow-hidden"
              >
                <span className="relative z-10">View All Services</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blackstone-yellow to-blackstone-yellow-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blackstone-black mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blackstone-black/80 mb-8">
            Let's discuss how we can bring your construction vision to life with our expert team and proven track record.
          </p>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-blackstone-black text-white font-bold text-lg rounded-lg hover:bg-blackstone-gray transition-all shadow-lg btn-primary relative overflow-hidden"
            >
              <span className="relative z-10">Get Free Consultation</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

