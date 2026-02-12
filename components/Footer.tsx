import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-blackstone-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blackstone-yellow rounded-lg flex items-center justify-center">
                <span className="text-blackstone-black font-bold">BS</span>
              </div>
              <span className="text-white font-bold text-lg">
                Blackstone <span className="text-blackstone-yellow">Inc.</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Registered with Pakistan Engineering Council & Pakistan Federal Board of Revenue.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <span className="w-1 h-5 bg-blackstone-yellow mr-2"></span>
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-blackstone-yellow mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  Alamdar Chowk, Qasimabad, Hyderabad, Sindh.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-blackstone-yellow flex-shrink-0" />
                <a href="mailto:info@blackstoneinc.pk" className="text-gray-400 hover:text-blackstone-yellow transition-colors text-sm">
                  info@blackstoneinc.pk
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaGlobe className="text-blackstone-yellow flex-shrink-0" />
                <a href="http://blackstoneinc.pk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blackstone-yellow transition-colors text-sm">
                  http://blackstoneinc.pk
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <span className="w-1 h-5 bg-blackstone-yellow mr-2"></span>
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blackstone-yellow transition-all text-sm inline-block hover:translate-x-1">
                  Commercial & Institutional Building Construction
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blackstone-yellow transition-all text-sm inline-block hover:translate-x-1">
                  Roads and Related Structures Construction
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blackstone-yellow transition-all text-sm inline-block hover:translate-x-1">
                  Site Preparation & Services Contractors
                </Link>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blackstone-yellow transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blackstone-yellow transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blackstone-yellow transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blackstone-yellow transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Blackstone Incorporated. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

