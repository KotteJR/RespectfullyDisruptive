'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [activeLink, setActiveLink] = useState('Home');
  const [isVisible, setIsVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

            if (isHomePage) {
        // On home page, treat header as over hero until scrolled past hero height (1 viewport)
        setIsTop(currentScrollY < window.innerHeight);
      } else {
        // On other pages, always use dark text
        setIsTop(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px – hide header
        setIsVisible(false);
      } else {
        // Scrolling up – show header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);

    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/#contact-section' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/30 bg-white/10 backdrop-blur-md transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src={isTop ? '/RD/rdglass.svg' : '/RD/rd.svg'} 
              alt="RD Logo"
              className="h-8 w-auto transition-opacity duration-200" 
            />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeLink === link.name
                    ? 'text-[#239D68]'
                    : isTop
                      ? 'text-white hover:text-[#239D68]'
                      : 'text-gray-800 hover:text-[#239D68]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
} 