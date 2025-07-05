import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-global-1 px-4 sm:px-6 lg:px-64 py-2.5">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src="/images/img_header_logo.png" 
            alt="Astra Logo" 
            className="w-[84px] h-[30px]"
          />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button 
          className="block lg:hidden p-2" 
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-global-1 lg:bg-transparent shadow-lg lg:shadow-none z-50`}>
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 p-4 lg:p-0">
            {/* Product Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center gap-2 text-header-1 font-medium text-base hover:text-blue-600 transition-colors py-4 lg:py-0"
                onClick={() => toggleDropdown('product')}
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'product'}
              >
                Product
                <img 
                  src="/images/img_component_2.svg" 
                  alt="dropdown" 
                  className="w-[8px] h-[5px]"
                />
              </button>
              {activeDropdown === 'product' && (
                <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10" role="menu">
                  <li role="menuitem"><a href="#" className="block px-4 py-2 text-header-2 hover:bg-gray-50">Security Testing</a></li>
                  <li role="menuitem"><a href="#" className="block px-4 py-2 text-header-2 hover:bg-gray-50">Vulnerability Scanner</a></li>
                  <li role="menuitem"><a href="#" className="block px-4 py-2 text-header-2 hover:bg-gray-50">API Security</a></li>
                </ul>
              )}
            </div>

            {/* Pentest Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center gap-2 text-header-1 font-medium text-base hover:text-blue-600 transition-colors py-4 lg:py-0"
                onClick={() => toggleDropdown('pentest')}
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'pentest'}
              >
                Pentest
                <img 
                  src="/images/img_component_2.svg" 
                  alt="dropdown" 
                  className="w-[8px] h-[5px]"
                />
              </button>
              {activeDropdown === 'pentest' && (
                <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10" role="menu">
                  <li role="menuitem"><a href="#" className="block px-4 py-2 text-header-2 hover:bg-gray-50">Web App Testing</a></li>
                  <li role="menuitem"><a href="#" className="block px-4 py-2 text-header-2 hover:bg-gray-50">Mobile App Testing</a></li>
                  <li role="menuitem"><a href="#" className="block px-4 py-2 text-header-2 hover:bg-gray-50">Network Testing</a></li>
                </ul>
              )}
            </div>

            {/* Regular Menu Items */}
            <button 
              className="text-header-2 font-medium text-base hover:text-blue-600 transition-colors text-left py-4 lg:py-0"
              role="menuitem"
            >
              Pricing
            </button>
            
            <button 
              className="text-header-2 font-medium text-base hover:text-blue-600 transition-colors text-left py-4 lg:py-0"
              role="menuitem"
            >
              Customers
            </button>
            
            <button 
              className="text-header-2 font-medium text-base hover:text-blue-600 transition-colors text-left py-4 lg:py-0"
              role="menuitem"
            >
              Partner
            </button>
          </div>
        </nav>

        {/* Auth Section */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-header-2 font-medium text-base hover:text-blue-600 transition-colors">
            Sign in
          </button>
          <Button 
            variant="primary" 
            className="rounded-[10px] px-2.5 py-2.5"
            onClick={() => console.log('Speak to sales clicked')}
          >
            Speak to sales
          </Button>
        </div>
      </div>

      {/* Mobile Auth Section */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 pt-4 mt-4">
          <div className="flex flex-col gap-3">
            <button className="text-header-2 font-medium text-base text-left py-2">
              Sign in
            </button>
            <Button 
              variant="primary" 
              fullWidth
              className="rounded-[10px]"
              onClick={() => console.log('Speak to sales clicked')}
            >
              Speak to sales
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;