import Link from 'next/link'
import { FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-blackstone-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-4 md:mb-6">
              <Logo showText={true} showTagline={true} variant="light" />
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Registered with Pakistan Engineering Council & Pakistan Federal Board of Revenue.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 md:mb-6 flex items-center">
              <span className="w-1 h-5 bg-blackstone-yellow mr-2"></span>
              Contact Info
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blackstone-yellow mt-0.5 md:mt-1 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base text-gray-400 leading-relaxed break-words">
                  2-B, Anoop Tower, Alamdar Chowk, Qasimabad, Hyderabad, Sindh, Pakistan.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blackstone-yellow flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                <a href="mailto:info@blackstoneinc.pk" className="text-sm md:text-base text-gray-400 hover:text-blackstone-yellow transition-colors break-all">
                  info@blackstoneinc.pk
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaGlobe className="text-blackstone-yellow flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                <a href="http://blackstoneinc.pk" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-gray-400 hover:text-blackstone-yellow transition-colors break-all">
                  http://blackstoneinc.pk
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 md:mb-6 flex items-center">
              <span className="w-1 h-5 bg-blackstone-yellow mr-2"></span>
              Services
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blackstone-yellow transition-all text-sm md:text-base inline-block hover:translate-x-1 break-words">
                  Commercial & Institutional Building Construction
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blackstone-yellow transition-all text-sm md:text-base inline-block hover:translate-x-1 break-words">
                  Roads and Related Structures Construction
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blackstone-yellow transition-all text-sm md:text-base inline-block hover:translate-x-1 break-words">
                  Site Preparation & Services Contractors
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Blackstone Incorporated. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

