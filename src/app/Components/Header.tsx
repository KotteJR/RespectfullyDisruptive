'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [activeLink, setActiveLink] = useState('Home');
  const [isVisible, setIsVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
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
  }, [lastScrollY, isHomePage]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/#contact-section' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTop 
          ? 'border-b border-white/30 bg-white/10 backdrop-blur-md' 
          : 'border-b border-gray-200 bg-white'
      } ${
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`md:hidden p-2 focus:outline-none ${isTop ? 'text-white' : 'text-gray-800'}`}
          >
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-50"
          style={{ minHeight: '100dvh' }}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center">
                <img 
                  src="/RD/rd.svg" 
                  alt="RD Logo"
                  className="h-8 w-auto" 
                />
              </div>
              <button
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <FiX size={24} />
              </button>
            </div>
            
            {/* Navigation */}
            <nav className="flex-1 p-6">
              <div className="space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                      activeLink === link.name
                        ? 'text-[#239D68] bg-[#239D68]/10'
                        : 'text-gray-800 hover:text-[#239D68] hover:bg-gray-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
} 