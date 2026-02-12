'use client'

import Link from 'next/link'

interface LogoProps {
  className?: string
  showText?: boolean
  variant?: 'light' | 'dark'
}

export default function Logo({ className = '', showText = true, variant = 'light' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-blackstone-black'
  const incColor = variant === 'light' ? 'text-white' : 'text-blackstone-black'
  
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="flex items-center">
        {/* BLACKSTONE text on black background */}
        <div className="bg-blackstone-black px-3 py-1.5 md:px-4 md:py-2 rounded-sm">
          <span className={`${textColor} font-bold text-base md:text-lg lg:text-xl tracking-wide uppercase`} style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.08em', fontWeight: 700 }}>
            BLACKSTONE
          </span>
        </div>
        {/* INC. text on white/transparent background */}
        {showText && (
          <span className={`${incColor} font-bold text-base md:text-lg lg:text-xl ml-1.5 tracking-wide uppercase`} style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.08em', fontWeight: 700 }}>
            INC.
          </span>
        )}
      </div>
    </Link>
  )
}

