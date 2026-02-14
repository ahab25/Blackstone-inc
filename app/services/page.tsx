'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FaBuilding, 
  FaRoad, 
  FaTint, 
  FaHardHat, 
  FaIndustry, 
  FaPaintRoller, 
  FaSolarPanel, 
  FaTractor,
  FaCog
} from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      icon: <FaBuilding className="w-10 h-10" />,
      title: 'Commercial & Institutional Building Construction',
      description: 'We specialize in constructing state-of-the-art commercial and institutional facilities including office buildings, schools, hospitals, retail spaces, and government buildings. Our team ensures every project meets the highest standards of quality, functionality, and compliance with all building codes.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
      features: ['Office Buildings', 'Educational Facilities', 'Healthcare Buildings', 'Government Structures', 'Retail Centers'],
    },
    {
      icon: <FaTint className="w-10 h-10" />,
      title: 'Water & Sewer Lines Construction',
      description: 'Expert installation and maintenance of water distribution and sewer collection systems. We handle everything from main line installation to service connections, ensuring reliable and efficient utility infrastructure for residential, commercial, and municipal projects.',
      image: '/images/water-sewer-construction.png',
      features: ['Water Main Installation', 'Sewer Line Construction', 'Service Connections', 'System Maintenance', 'Infrastructure Upgrades'],
    },
    {
      icon: <FaRoad className="w-10 h-10" />,
      title: 'Roads and Related Structures Construction',
      description: 'Comprehensive road construction services including highways, streets, parking lots, and related infrastructure. We deliver durable, well-designed roadways with proper drainage, signage, and safety features that meet or exceed all regulatory standards.',
      image: '/images/road-construction.png',
      features: ['Highway Construction', 'Street Paving', 'Parking Lots', 'Drainage Systems', 'Road Markings'],
    },
    {
      icon: <FaHardHat className="w-10 h-10" />,
      title: 'Poured Concrete Foundation and Structure Contractors',
      description: 'Specialized concrete foundation and structural work for all types of buildings. Our experienced team handles complex formwork, reinforcement placement, and concrete pouring to create solid, durable foundations and structural elements that stand the test of time.',
      image: '/images/concrete-foundation.png',
      features: ['Foundation Construction', 'Structural Concrete', 'Formwork & Rebar', 'Post-Tension Systems', 'Quality Control'],
    },
    {
      icon: <FaIndustry className="w-10 h-10" />,
      title: 'Concrete Supplier',
      description: 'Reliable concrete supply services with a fleet of ready-mix trucks delivering high-quality concrete to job sites. We offer various mix designs for different applications, ensuring the right concrete for your specific project needs with timely delivery.',
      image: '/images/concrete-supplier.png',
      features: ['Ready-Mix Concrete', 'Custom Mix Designs', 'Timely Delivery', 'Quality Assurance', 'Bulk Supply'],
    },
    {
      icon: <FaCog className="w-10 h-10" />,
      title: 'Masonry Contractor',
      description: 'Expert masonry services for brick, block, stone, and concrete masonry construction. Our skilled masons deliver precision workmanship in both new construction and restoration projects, creating beautiful and durable structures that enhance any building.',
      image: '/images/masonry-contractor.png',
      features: ['Brick Work', 'Block Construction', 'Stone Masonry', 'Restoration Services', 'Architectural Features'],
    },
    {
      icon: <FaPaintRoller className="w-10 h-10" />,
      title: 'Painting and Wall Covering Contractors',
      description: 'Professional painting and wall covering services for interior and exterior surfaces. We provide comprehensive surface preparation, high-quality paint application, and expert installation of various wall coverings to transform and protect your property.',
      image: '/images/painting-contractors.png',
      features: ['Interior Painting', 'Exterior Painting', 'Wall Coverings', 'Surface Preparation', 'Commercial & Residential'],
    },
    {
      icon: <FaSolarPanel className="w-10 h-10" />,
      title: 'Solar System Installation',
      description: 'Complete solar energy solutions including design, installation, and maintenance of photovoltaic systems. We help businesses and homeowners reduce energy costs while contributing to environmental sustainability through professional solar panel installation.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop',
      features: ['Residential Solar', 'Commercial Solar', 'System Design', 'Installation & Maintenance', 'Energy Efficiency'],
    },
    {
      icon: <FaTractor className="w-10 h-10" />,
      title: 'Site Preparation & Services Contractors',
      description: 'Comprehensive site preparation services to get your construction site ready for building. We handle excavation, grading, clearing, utility installation, and all necessary groundwork to ensure a solid foundation for your project.',
      image: '/images/site-preparation.png',
      features: ['Excavation', 'Site Clearing', 'Grading & Leveling', 'Utility Installation', 'Erosion Control'],
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We meet with you to understand your vision, requirements, and budget.',
    },
    {
      step: '02',
      title: 'Planning & Design',
      description: 'Our team creates detailed plans and designs tailored to your needs.',
    },
    {
      step: '03',
      title: 'Approval & Permits',
      description: 'We handle all necessary permits and regulatory approvals.',
    },
    {
      step: '04',
      title: 'Construction',
      description: 'Expert execution with regular updates and quality assurance.',
    },
    {
      step: '05',
      title: 'Completion',
      description: 'Final inspection, handover, and ongoing support.',
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
              Our <span className="text-blackstone-yellow">Services</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive construction solutions tailored to meet your unique needs and exceed your expectations
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all border border-gray-100"
              >
                <motion.div 
                  className="relative h-64 overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="absolute top-6 left-6 text-blackstone-yellow bg-blackstone-black/80 p-4 rounded-lg"
                  >
                    {service.icon}
                  </motion.div>
                </motion.div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-blackstone-black mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-sm font-semibold text-blackstone-black mb-3 uppercase tracking-wide">
                      What We Offer:
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                          className="flex items-center text-gray-600"
                        >
                          <span className="text-blackstone-yellow mr-2">✓</span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blackstone-black mb-4">
              Our <span className="text-blackstone-yellow">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A streamlined approach ensuring quality and efficiency at every step
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 mx-auto bg-blackstone-yellow rounded-full flex items-center justify-center"
                  >
                    <span className="text-blackstone-black font-bold text-2xl">{item.step}</span>
                  </motion.div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-blackstone-yellow transform translate-x-4"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-blackstone-black mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blackstone-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something <span className="text-blackstone-yellow">Amazing</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your project and discover how we can help bring your vision to life.
          </p>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-blackstone-yellow text-blackstone-black font-bold text-lg rounded-lg hover:bg-blackstone-yellow-dark transition-all shadow-lg btn-primary relative overflow-hidden"
            >
              <span className="relative z-10">Get Started Today</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

