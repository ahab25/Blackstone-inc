'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const phoneNumber = '923170279118' // WhatsApp number without + sign for URL
  const message = 'Hello! I would like to know more about your construction services.'

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-[#20BA5A] transition-colors group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8" />
      <motion.div
        className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-5 h-5 md:w-6 md:h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        1
      </motion.div>
      <motion.span
        className="hidden md:block absolute right-full mr-4 px-3 py-2 bg-blackstone-black text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        initial={{ x: 10, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
      >
        Chat with us
      </motion.span>
    </motion.a>
  )
}

