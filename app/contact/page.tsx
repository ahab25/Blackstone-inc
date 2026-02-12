'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaGlobe, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: 'Address',
      content: 'Alamdar Chowk, Qasimabad\nHyderabad, Sindh',
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email',
      content: 'info@blackstoneinc.pk',
    },
    {
      icon: <FaGlobe className="w-6 h-6" />,
      title: 'Website',
      content: 'http://blackstoneinc.pk',
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: 'Business Hours',
      content: 'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 4:00 PM',
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
              Get In <span className="text-blackstone-yellow">Touch</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project? Contact us today for a free consultation
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-blackstone-black mb-6">
                  Send Us a <span className="text-blackstone-yellow">Message</span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-blackstone-black mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blackstone-yellow focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-blackstone-black mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blackstone-yellow focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-blackstone-black mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blackstone-yellow focus:border-transparent outline-none transition-all"
                        placeholder="+1 (234) 567-8900"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-blackstone-black mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blackstone-yellow focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="commercial">Commercial Construction</option>
                        <option value="residential">Residential Construction</option>
                        <option value="industrial">Industrial Projects</option>
                        <option value="renovation">Renovation & Remodeling</option>
                        <option value="quote">Request a Quote</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-blackstone-black mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blackstone-yellow focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                      Something went wrong. Please try again later.
                    </div>
                  )}
                  <motion.div
                    whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="inline-block w-full md:w-auto"
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-10 py-4 bg-blackstone-yellow text-blackstone-black font-bold text-lg rounded-lg hover:bg-blackstone-yellow-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg btn-primary relative overflow-hidden"
                    >
                      <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </motion.div>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-blackstone-black rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Contact <span className="text-blackstone-yellow">Information</span>
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-blackstone-yellow flex-shrink-0 mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                        {info.title === 'Email' ? (
                          <a href={`mailto:${info.content}`} className="text-gray-300 hover:text-blackstone-yellow transition-colors text-sm">
                            {info.content}
                          </a>
                        ) : info.title === 'Website' ? (
                          <a href={info.content} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blackstone-yellow transition-colors text-sm">
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-300 text-sm whitespace-pre-line">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-blackstone-black mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-blackstone-black text-white rounded-lg flex items-center justify-center hover:bg-blackstone-yellow hover:text-blackstone-black transition-all"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blackstone-black text-white rounded-lg flex items-center justify-center hover:bg-blackstone-yellow hover:text-blackstone-black transition-all"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blackstone-black text-white rounded-lg flex items-center justify-center hover:bg-blackstone-yellow hover:text-blackstone-black transition-all"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blackstone-black text-white rounded-lg flex items-center justify-center hover:bg-blackstone-yellow hover:text-blackstone-black transition-all"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold text-blackstone-black mb-2 flex items-center gap-3">
                <FaMapMarkerAlt className="text-blackstone-yellow" />
                Our Location
              </h3>
              <p className="text-gray-600">Alamdar Chowk, Qasimabad, Hyderabad, Sindh</p>
            </div>
            <div className="relative w-full h-96 md:h-[500px]">
              <iframe
                src="https://www.google.com/maps?q=Alamdar+Chowk,+Qasimabad,+Hyderabad,+Sindh,+Pakistan&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-b-2xl"
                title="Blackstone Incorporated Location - Alamdar Chowk, Qasimabad, Hyderabad, Sindh"
              />
            </div>
            <div className="p-6 bg-gray-50">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Alamdar+Chowk,+Qasimabad,+Hyderabad,+Sindh,+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blackstone-yellow text-blackstone-black font-semibold rounded-lg hover:bg-blackstone-yellow-dark transition-all shadow-md hover:shadow-lg"
              >
                <FaMapMarkerAlt />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

