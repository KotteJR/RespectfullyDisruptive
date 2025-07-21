'use client';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-14">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/RD/rd.svg" 
              alt="RD Logo"
              className="h-8 w-auto filter brightness-0 invert"
            />
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-white text-xs">
              Copyright © 2025 Respectfully Disruptive. <br/> All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 